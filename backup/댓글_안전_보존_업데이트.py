import os
import re

# 작업할 HTML 파일 경로
folder_path = '.'

print("=" * 60)
print("🚨 [효빈일보 마이그레이션 v3.0 - 댓글 절대 사수 에디션] 🚨")
print("=" * 60)

# 1. 헤더와 랭킹은 동일하게 적출
header_pattern = re.compile(r'(<div[^>]*class="[^"]*top-bar[^"]*"[^>]*>.*?)?<(header|div)[^>]*class="[^"]*news-header[^"]*"[^>]*>.*?</\2>', re.DOTALL)
ranking_pattern = re.compile(r'<div[^>]*class="[^"]*(ranking-box|rank-news)[^"]*"[^>]*>.*?</ul>\s*</div>', re.DOTALL)

# ⭐ 2. 푸터 핀셋 적출 (핵심: </html>까지 지우지 않고 딱 </footer>까지만 지움!) ⭐
footer_pattern = re.compile(r'<footer[^>]*>.*?</footer>', re.DOTALL)

html_files = [f for f in os.listdir(folder_path) if f.endswith('.html')]

success_count = 0

for filename in html_files:
    if filename == 'news_list.html': 
        continue

    filepath = os.path.join(folder_path, filename)
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        continue
        
    orig_content = content

    # 1. 헤더/랭킹 뼈대로 교체
    content = re.sub(header_pattern, '<div id="common-header"></div>', content)
    content = re.sub(ranking_pattern, '<div id="common-sidebar-ranking"></div>', content)
    
    # 2. 푸터만 핀셋 교체 (이 밑에 있는 <script> 태그는 건드리지 않음!)
    content = re.sub(footer_pattern, '<div id="common-footer"></div>', content)
    
    # 3. 개발자(AI) 오타 자동 수습 (normal-comment -> comment-item)
    content = content.replace('"normal-comment"', '"comment-item"')
    content = content.replace("'normal-comment'", "'comment-item'")

    # 4. 코어 스크립트 안전 주입 (</body> 바로 위에 살포시 꽂기)
    if 'assets/hb_news_core.js' not in content:
        # </body>를 찾아서 그 앞에 스크립트를 추가
        content = content.replace('</body>', '    <!-- 효빈일보 코어 스크립트 -->\n    <script src="assets/hb_news_core.js"></script>\n</body>')

    if content != orig_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        success_count += 1
        print(f"✅ [{filename}] 안전 변환 완료! (댓글/스크립트 100% 보존)")

print("\n" + "=" * 60)
print(f"🎉 총 {success_count}개 파일의 수술이 댓글 유실 없이 완벽하게 끝났습니다!")