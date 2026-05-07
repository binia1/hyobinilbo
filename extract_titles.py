import os
import re
from bs4 import BeautifulSoup

target_folder = './' 

def extract_to_js_safe_format(directory_path):
    results = []
    files = [f for f in os.listdir(directory_path) if f.endswith(('.html', '.htm'))]
    
    for filename in files:
        filepath = os.path.join(directory_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                
                # 제목 추출
                title_tag = soup.find('h2', class_='article-title')
                title = title_tag.get_text().strip() if title_tag else (soup.title.string.replace(' - 효빈일보', '').strip() if soup.title else "제목 없음")
                
                # 키워드 추출 (카테고리 + 제목 일부)
                keywords_list = []
                category_tag = soup.find('div', class_='text-[#0055aa]')
                if category_tag:
                    keywords_list.extend(category_tag.get_text().replace('>', '').split())
                
                title_clean = re.sub(r'[^\w\s]', '', title)
                keywords_list.extend(title_clean.split()[:4])
                final_keywords = " ".join(dict.fromkeys(keywords_list))

                # 핵심: 작은따옴표 대신 백틱(`)을 사용하고, 혹시 모를 내부 백틱은 이스케이프(\`) 처리
                safe_title = title.replace('`', '\\`')
                safe_keywords = final_keywords.replace('`', '\\`')

                # JS 객체 형식으로 생성
                formatted_str = f"    {{ type: '기사', title: `{safe_title}`, url: '{filename}', keywords: `{safe_keywords}` }},"
                results.append(formatted_str)

        except Exception as e:
            results.append(f"    // {filename} 오류: {str(e)}")

    return results

if __name__ == "__main__":
    extracted_data = extract_to_js_safe_format(target_folder)
    
    # 바로 복사해서 쓸 수 있게 전체 배열 구조로 출력
    print("const newsData = [")
    for item in extracted_data:
        print(item)
    print("];")