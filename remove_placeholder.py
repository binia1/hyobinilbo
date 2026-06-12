import os
from bs4 import BeautifulSoup

def replace_placeholders_with_local_links(directory):
    # 타겟이 될 플레이스홀더 도메인 목록
    target_domains = ['placehold.co', 'via.placeholder.com', 'dummyimage.com']
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    soup = BeautifulSoup(f, 'html.parser')

                is_modified = False
                
                # 모든 img 태그 검사
                for img in soup.find_all('img'):
                    src = img.get('src', '')
                    # alt 속성에서 텍스트를 가져옴 (양옆 공백 제거)
                    alt_text = img.get('alt', '').strip()
                    
                    # src에 쓸데없는 플레이스홀더 도메인이 들어있다면
                    if any(domain in src for domain in target_domains):
                        # alt 속성에 적힌 한국어 이름을 파일명으로 사용 (없으면 '이름없음'으로 임시 지정)
                        korean_name = alt_text if alt_text else "이름없음"
                        
                        # 강제로 올바른 이미지 경로로 교체
                        new_src = f"이미지/{korean_name}.png"
                        img['src'] = new_src
                        is_modified = True
                        
                # 수정된 사항이 있다면 원본 덮어쓰기
                if is_modified:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(str(soup))
                    print(f"🔄 교체 완료: {filepath} (더미 -> 이미지/{korean_name}.png)")

if __name__ == "__main__":
    # 스크립트를 실행하는 현재 폴더를 기준으로 모두 탐색합니다.
    target_dir = './' 
    print("플레이스홀더를 로컬 이미지 경로로 교체합니다...")
    replace_placeholders_with_local_links(target_dir)
    print("✨ 모든 교체 작업이 끝났습니다.")