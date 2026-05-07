import json
import os
from jinja2 import Environment, FileSystemLoader

# 1. 찍어낸 기사들을 모아둘 새 폴더 만들기
output_folder = 'hyobin_news_publish'
os.makedirs(output_folder, exist_ok=True)

# 2. 우리가 만든 데이터베이스(JSON) 불러오기
with open('news_database.json', 'r', encoding='utf-8') as f:
    articles = json.load(f)

# 3. 마스터 템플릿(붕어빵 틀) 준비하기
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('article_template.html')

# 4. 공장 가동! (150개 기사 1초 만에 찍어내기)
success_count = 0
for article in articles:
    # 템플릿에 데이터 합성
    html_output = template.render(article=article)
    
    # 새 HTML 파일로 저장 (예: hyobin_news_publish/news_nico.html)
    filename = os.path.join(output_folder, f"{article['id']}.html")
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(html_output)
    success_count += 1

print(f"🎉 붕어빵 공장 가동 완료! 총 {success_count}개의 효빈일보 기사가 '{output_folder}' 폴더에 생성되었습니다!")