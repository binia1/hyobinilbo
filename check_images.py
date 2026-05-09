import os
import glob
from bs4 import BeautifulSoup
from urllib.parse import urlparse

def check_images_in_directory():
    # 파이썬 스크립트가 있는 현재 폴더
    base_dir = "." 
    
    # 현재 폴더 내의 모든 .html 파일 검색
    html_files = glob.glob(os.path.join(base_dir, "*.html"))
    
    if not html_files:
        print("❌ 현재 폴더에 HTML 파일이 없습니다.")
        return

    print(f"🔍 총 {len(html_files)}개의 HTML 기사를 검사합니다...\n")
    print("-" * 50)

    total_missing_count = 0
    files_with_missing_images = 0

    # 각 HTML 파일 반복 검사
    for html_file_path in html_files:
        file_name = os.path.basename(html_file_path)
        
        try:
            with open(html_file_path, 'r', encoding='utf-8') as f:
                html_content = f.read()
        except Exception as e:
            print(f"⚠️ '{file_name}' 파일을 읽는 중 오류 발생: {e}")
            continue

        soup = BeautifulSoup(html_content, 'html.parser')
        img_tags = soup.find_all('img')
        
        missing_images = []

        for img in img_tags:
            src = img.get('src')
            if not src:
                continue

            # 외부 링크나 base64 데이터는 제외
            parsed_src = urlparse(src)
            if parsed_src.scheme in ['http', 'https', 'data']:
                continue
                
            # 이미지 실제 경로 조합 (현재폴더 + src경로)
            # 예: "." + "이미지/철도부_포스터1.png" -> "./이미지/철도부_포스터1.png"
            full_image_path = os.path.join(base_dir, src)
            full_image_path = os.path.normpath(full_image_path)

            # 파일이 존재하지 않으면 누락 리스트에 추가
            if not os.path.exists(full_image_path):
                missing_images.append(src)

        # 해당 HTML 파일에서 누락된 이미지가 있을 경우 출력
        if missing_images:
            files_with_missing_images += 1
            total_missing_count += len(missing_images)
            print(f"📄 문서: {file_name}")
            for missing in missing_images:
                print(f"   ❌ 누락: {missing}")
            print("-" * 50)

    # 최종 결과 요약
    print("\n[ 검사 완료 ]")
    if total_missing_count > 0:
        print(f"⚠️ 총 {files_with_missing_images}개의 기사에서 {total_missing_count}개의 이미지가 '이미지/' 폴더에 없습니다.")
    else:
        print("✅ 모든 기사의 이미지가 '이미지/' 폴더에 정상적으로 존재합니다!")


if __name__ == "__main__":
    check_images_in_directory()