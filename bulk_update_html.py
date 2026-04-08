import os
import re

# 1. 작업할 HTML 파일들이 있는 폴더 경로 (현재 폴더면 '.')
# 만약 스크립트 파일과 HTML 파일 위치가 다르면 절대 경로를 적어주세요. (예: 'C:/hyobin_news')
folder_path = '.'

print("=" * 50)
print("[효빈일보 시스템 마이그레이션 도구 v2.2 - 극대노 진정 에디션]")
print("=" * 50)
print(f"▶ 지정된 폴더('{os.path.abspath(folder_path)}')에서 HTML 파일을 찾습니다...\n")

# 2. 극강의 유연함을 갖춘 정규 표현식 패턴
# 헤더: <header> 태그뿐만 아니라 <div class="news-header"> 인 경우도 모두 잡도록 수정
header_pattern = re.compile(r'(<div[^>]*class="[^"]*top-bar[^"]*"[^>]*>.*?)?<(header|div)[^>]*class="[^"]*news-header[^"]*"[^>]*>.*?</\2>', re.DOTALL)

# 랭킹: ranking-box 뿐만 아니라 rank-news 인 경우도 모두 잡도록 괄호(OR) 패턴 적용
ranking_pattern = re.compile(r'<div[^>]*class="[^"]*(ranking-box|rank-news)[^"]*"[^>]*>.*?</ul>\s*</div>', re.DOTALL)

# 푸터: 기존과 동일
footer_pattern = re.compile(r'<footer[^>]*>.*?</html>', re.DOTALL)

# HTML 파일 목록 수집
html_files = [f for f in os.listdir(folder_path) if f.endswith('.html')]
total_files = len(html_files)

if total_files == 0:
    print("❌ 앗! 현재 폴더에 HTML 파일이 단 한 개도 없습니다. 폴더 위치를 다시 확인해 주세요!")
    exit()

print(f"✅ 총 {total_files}개의 HTML 파일을 발견했습니다. 변환 작업을 시작합니다.\n")

success_count = 0
skip_count = 0

for filename in html_files:
    if filename == 'news_list.html': # 리스트 페이지 등 특수 페이지 예외 처리
        print(f"⏭️  [{filename}] : 코어 파일이므로 변환을 스킵합니다.")
        continue

    filepath = os.path.join(folder_path, filename)
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()
    except Exception as e:
        print(f"❌ [{filename}] 읽기 오류: {e}")
        continue
        
    new_content = original_content

    # re.subn을 사용하면 교체된 횟수도 같이 반환해줍니다.
    new_content, h_count = re.subn(header_pattern, '<div id="common-header"></div>', new_content)
    new_content, r_count = re.subn(ranking_pattern, '<div id="common-sidebar-ranking"></div>', new_content)
    
    # 여기서부터 이어지는 텍스트가 잘리지 않도록 주의하세요!
    new_footer = '''<div id="common-footer"></div>

    <!-- 효빈일보 코어 스크립트 (헤더, 푸터, 모달, 검색, 랜덤랭킹 자동 주입) -->
    <script src="assets/hb_news_core.js"></script>
</body>
</html>'''
    
    new_content, f_count = re.subn(footer_pattern, new_footer, new_content)

    # 변경점이 하나라도 있는지 확인
    if new_content != original_content:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            success_count += 1
            print(f"🔄 [{filename}] 변환 성공! (헤더: {h_count}건, 랭킹: {r_count}건, 푸터: {f_count}건 교체됨)")
        except Exception as e:
            print(f"❌ [{filename}] 쓰기 오류: {e}")
    else:
        skip_count += 1
        print(f"⚠️  [{filename}] 변경 안 됨! (정규식 패턴과 일치하는 부분이 없거나, 이미 변환된 파일입니다.)")

print("\n" + "=" * 50)
print("[작업 결과 보고서]")
print(f"- 성공적으로 뼈대를 교체한 파일: {success_count}개")
print(f"- 패턴이 안 맞아서 스킵된 파일: {skip_count}개")
print("=" * 50)
print("\n작업이 모두 완료되었습니다. assets 폴더에 hb_news_core.js가 있는지 꼭 확인하세요!")