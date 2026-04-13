import os
import re

# 1. 설정
# HTML 파일들이 있는 폴더 경로 (현재 폴더면 '.')
folder_path = '.'
backup_folder = './backup' # 만약의 사태를 대비한 백업 폴더

def migrate_html_files():
    print("=" * 60)
    print("[효빈일보 시스템 마이그레이션 도구 v2.3 - 안정화 에디션]")
    print("=" * 60)
    
    if not os.path.exists(folder_path):
        print(f"❌ 에러: 폴더를 찾을 수 없습니다: {folder_path}")
        return

    # 백업 폴더 생성
    if not os.path.exists(backup_folder):
        os.makedirs(backup_folder)

    # 정규 표현식 패턴 (공백 및 대소문자 유연하게 대응)
    # 헤더 패턴: top-bar(선택) + news-header
    header_pattern = re.compile(
        r'(<div[^>]*class="[^"]*top-bar[^"]*"[^>]*>.*?</div>\s*)?<(header|div)[^>]*class="[^"]*news-header[^"]*"[^>]*>.*?</\2>', 
        re.DOTALL | re.IGNORECASE
    )

    # 랭킹 박스 패턴: ranking-box 또는 rank-news
    ranking_pattern = re.compile(
        r'<div[^>]*class="[^"]*(ranking-box|rank-news)[^"]*"[^>]*>.*?</div>', 
        re.DOTALL | re.IGNORECASE
    )

    # 푸터 패턴: footer 태그부터 html 끝까지
    # 만약 footer가 없으면 </body> 태그를 찾아서 그 앞에 주입하는 방식으로 보완 가능
    footer_pattern = re.compile(
        r'<footer[^>]*>.*?</html>', 
        re.DOTALL | re.IGNORECASE
    )

    # HTML 파일 목록 수집
    files = [f for f in os.listdir(folder_path) if f.endswith('.html')]
    
    if not files:
        print("❓ 해당 폴더에 HTML 파일이 없습니다.")
        return

    print(f"📂 총 {len(files)}개의 파일을 검사합니다...\n")

    success_count = 0
    skip_count = 0

    for filename in files:
        # 코어 파일이나 리스트 페이지는 변환에서 제외
        if filename in ['news_list.html', 'index.html']:
            print(f"⏭️  [{filename}] : 시스템 파일이므로 스킵합니다.")
            continue

        filepath = os.path.join(folder_path, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"❌ [{filename}] 읽기 오류: {e}")
            continue

        original_content = content

        # 1. 헤더 교체
        content, h_count = re.subn(header_pattern, '<div id="common-header"></div>', content)
        
        # 2. 사이드바 랭킹 교체
        content, r_count = re.subn(ranking_pattern, '<div id="common-sidebar-ranking"></div>', content)
        
        # 3. 푸터 및 코어 스크립트 주입
        new_footer_html = (
            '<div id="common-footer"></div>\n\n'
            '    <!-- 효빈일보 코어 스크립트 (헤더, 푸터, 모달, 검색 등 자동 주입) -->\n'
            '    <script src="assets/hb_news_core.js"></script>\n'
            '</body>\n'
            '</html>'
        )
        
        # footer 태그가 있으면 교체, 없으면 </body> 태그를 찾아 주입
        if re.search(r'<footer', content, re.IGNORECASE):
            content, f_count = re.subn(footer_pattern, new_footer_html, content)
        else:
            # footer가 없는 경우를 대비해 </body> 태그 바로 앞에 주입
            content, f_count = re.subn(r'</body>\s*</html>', new_footer_html, content, flags=re.IGNORECASE)

        # 변경 사항이 있을 때만 파일 저장
        if content != original_content:
            # 기존 파일 백업
            with open(os.path.join(backup_folder, filename), 'w', encoding='utf-8') as b:
                b.write(original_content)
                
            # 파일 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            success_count += 1
            print(f"🔄 [{filename}] 변환 완료! (H:{h_count}, R:{r_count}, F:{f_count})")
        else:
            skip_count += 1
            print(f"⚠️  [{filename}] 변경 사항 없음 (이미 변환되었거나 패턴 불일치)")

    print("\n" + "=" * 60)
    print(f"✅ 작업 결과 보고")
    print(f"- 변환 성공: {success_count}개")
    print(f"- 스킵됨: {skip_count}개")
    print(f"- 백업 위치: {os.path.abspath(backup_folder)}")
    print("=" * 60)
    print("\n[주의] assets 폴더에 'hb_news_core.js' 파일이 있는지 반드시 확인하세요!")

if __name__ == "__main__":
    migrate_html_files()