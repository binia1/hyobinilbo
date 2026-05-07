import os
import re
from bs4 import BeautifulSoup

target_folder = './' # HTML 파일들이 있는 폴더

def extract_with_category(directory_path):
    results = []
    files = [f for f in os.listdir(directory_path) if f.endswith(('.html', '.htm'))]
    
    for filename in files:
        filepath = os.path.join(directory_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                
                # 1. 제목 추출
                title_tag = soup.find('h2', class_='article-title')
                title = title_tag.get_text().strip() if title_tag else (soup.title.string.replace(' - 효빈일보', '').strip() if soup.title else "제목 없음")
                
                # 2. 카테고리 추출 로직 (우선순위 제어)
                category = "기타"
                
                # (방법 A) HTML 내부의 카테고리 태그 확인 (예: 오피니언 > 기자수첩)
                category_div = soup.find('div', class_='text-[#0055aa]')
                if category_div:
                    category_text = category_div.get_text()
                    # '>' 기호가 있으면 앞부분(메인 카테고리)만 가져옴
                    category = category_text.split('>')[0].strip() if '>' in category_text else category_text.strip()
                
                # (방법 B) 만약 HTML에 태그가 없다면 제목의 [대괄호] 내용 추출
                if category == "기타":
                    bracket_match = re.search(r'\[(.*?)\]', title)
                    if bracket_match:
                        category = bracket_match.group(1)

                # 3. 키워드 생성 (제목에서 단어 추출)
                title_clean = re.sub(r'[^\w\s]', '', title)
                keywords = " ".join(dict.fromkeys(title_clean.split()[:3]))

                # 4. JS 객체 형식으로 조립 (백틱 사용으로 따옴표 오류 방지)
                formatted_str = (
                    f"    {{ type: '기사', category: '{category}', "
                    f"title: `{title}`, url: '{filename}', keywords: `{keywords}` }},"
                )
                results.append(formatted_str)

        except Exception as e:
            results.append(f"    // {filename} 오류: {str(e)}")

    return results

if __name__ == "__main__":
    data_list = extract_with_category(target_folder)
    
    print("const newsData = [")
    for item in data_list:
        print(item)
    print("];")