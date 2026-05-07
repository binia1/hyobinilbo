import os
import json
import re
import ast
from bs4 import BeautifulSoup

html_folder = '.' 
extracted_articles = []
failed_articles = []

def js_to_python_obj(js_str):
    """
    JSON보다 훨씬 유연한 ast.literal_eval을 사용해
    지랄맞은 JS 객체를 파이썬 데이터로 강제 변환합니다.
    """
    try:
        # 1. 주석 제거
        js_str = re.sub(r'/\*.*?\*/', '', js_str, flags=re.DOTALL)
        js_str = re.sub(r'//.*', '', js_str)
        # 2. JS 키워드를 파이썬 키워드로 변경
        js_str = js_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')
        # 3. 따옴표 없는 키값들에 따옴표 붙이기
        js_str = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', js_str)
        # 4. 파이썬이 읽을 수 있게 변환 (문법이 좀 틀려도 웬만하면 읽음)
        return ast.literal_eval(js_str)
    except:
        try:
            # 실패 시 최후의 수단: 억지로 JSON 시도
            return json.loads(js_str)
        except:
            return None

print("🚀 [V7 갓모드] 150개 실종 사건을 해결하러 갑니다. 지랄금지 모드 가동...\n")

exclude_files = ['index.html', 'news_list.html', 'article_template.html', 'news_list_template.html']

for filename in os.listdir(html_folder):
    if not filename.endswith(".html") or filename in exclude_files:
        continue

    filepath = os.path.join(html_folder, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    try:
        # 기사 정보
        title = soup.select_one('.article-title').get_text(strip=True) if soup.select_one('.article-title') else filename
        info_tag = soup.select_one('.article-info')
        reporter = "정치부 김기자"
        if info_tag and info_tag.select_one('.font-bold'):
            reporter = info_tag.select_one('.font-bold').get_text(strip=True)
        
        date = "2026.01.29"
        if info_tag:
            d_match = re.search(r'\d{4}\.\d{2}\.\d{2}', info_tag.get_text())
            if d_match: date = d_match.group()

        body_tag = soup.select_one('.article-body')
        content_html = "".join([str(c) for c in body_tag.contents]) if body_tag else ""

        # 🌟 댓글 추출 (순서가 중요함)
        comments_list = []
        full_text = "".join([str(s.string) for s in soup.find_all('script') if s.string])

        # 방법 1: 특정 변수명(commentsData, initialComments) 타겟팅
        for var_name in ['commentsData', 'initialComments', 'comments']:
            pattern = rf'{var_name}\s*=\s*(\[[\s\S]*?\])\s*;'
            match = re.search(pattern, full_text)
            if match:
                comments_list = js_to_python_obj(match.group(1))
                if comments_list: break

        # 방법 2: 방법 1이 실패하면, 'nick'이 들어있는 모든 배열 쑤시기
        if not comments_list:
            all_arrays = re.findall(r'(\[[\s\S]*?\{[\s\S]*?nick[\s\S]*?\}[\s\S]*?\])', full_text)
            for arr in all_arrays:
                parsed = js_to_python_obj(arr)
                if parsed and isinstance(parsed, list):
                    comments_list = parsed
                    break

        # 방법 3: HTML 태그 크롤링 (최수아 기사 등)
        if not comments_list:
            blocks = soup.select('.comment-item, .best-comment, .yoon-comment, .bad-comment, .official-comment')
            for b in blocks:
                n = b.select_one('.font-bold, .font-black')
                c = b.select_one('p')
                if n and c:
                    comments_list.append({
                        "nick": n.get_text(strip=True),
                        "content": c.get_text(strip=True),
                        "like": 0, "dislike": 0, "time": "기록됨"
                    })

        extracted_articles.append({
            "id": filename.replace('.html', ''),
            "title": title,
            "reporter": reporter,
            "date": date,
            "content": content_html,
            "comments": comments_list
        })

        if not comments_list:
            failed_articles.append(filename)
            print(f"🚨 [여전히 실패] {filename}")
        else:
            print(f"✅ [성공] {filename} (댓글 {len(comments_list)}개)")

    except Exception as e:
        print(f"❌ [완전 에러] {filename}: {e}")

# 저장
with open('news_database.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_articles, f, ensure_ascii=False, indent=4)

print(f"\n🎉 작업 완료! 성공: {len(extracted_articles)-len(failed_articles)} / 전체: {len(extracted_articles)}")
if failed_articles:
    print(f"끝까지 속 썩이는 놈들: {failed_articles}")