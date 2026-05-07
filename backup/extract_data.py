import os
import json
from bs4 import BeautifulSoup

# HTML 파일들이 있는 폴더 경로 (현재 폴더면 '.')
html_folder = '.' 
extracted_articles = []

# 폴더 안의 모든 파일을 하나씩 확인
for filename in os.listdir(html_folder):
    if filename.endswith(".html"):
        filepath = os.path.join(html_folder, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()
            
        soup = BeautifulSoup(html_content, 'html.parser')
        
        try:
            # 1. 제목 뽑기
            title = soup.select_one('.article-title').get_text(strip=True)
            
            # 2. 기자 이름 뽑기 (예: '정치부 김기자')
            # article-info 안의 첫 번째 span 태그 등을 찾습니다.
            reporter_tag = soup.select_one('.article-info .font-bold')
            reporter = reporter_tag.get_text(strip=True) if reporter_tag else "익명기자"
            
            # 3. 본문 뽑기 (HTML 태그를 그대로 유지해야 나중에 예쁘게 나옴)
            # 본문 안의 내용물(p 태그, img 태그 등)을 통째로 문자열로 가져옵니다.
            body_tag = soup.select_one('.article-body')
            content_html = ""
            if body_tag:
                # 본문 안의 내용을 HTML 코드 그대로 추출
                content_html = "".join([str(child) for child in body_tag.contents])
            
            # 4. 고유 ID 만들기 (파일명에서 .html 제거)
            article_id = filename.replace('.html', '')
            
            # 뽑아낸 데이터를 딕셔너리로 정리
            article_data = {
                "id": article_id,
                "title": title,
                "reporter": reporter,
                "content": content_html,
                "comments": [] # 댓글은 기본 빈 배열로 세팅
            }
            
            extracted_articles.append(article_data)
            print(f"✅ 추출 성공: {title}")
            
        except Exception as e:
            print(f"❌ 추출 실패 ({filename}): 양식이 달라서 에러가 났습니다. -> {e}")

# 다 뽑아낸 데이터를 하나의 JSON 파일(데이터베이스)로 저장
with open('news_database.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_articles, f, ensure_ascii=False, indent=4)

print(f"\n🎉 총 {len(extracted_articles)}개의 기사가 데이터베이스로 변환되었습니다!")