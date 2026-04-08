(function(){
    // ==========================================
    // 1. 기사 데이터베이스 (카테고리 완비)
    // ==========================================
    const NEWS_DATABASE = [
        // --- 현실 기반 속보 & 주요 기사 ---
        { type: '기사', category: '정치', title: '[선택 2025] 이재명, 제21대 대통령 당선 확정', url: '[선택 2025] 이재명, 제21대 대통령 당선.html', keywords: '이재명 대통령 당선 선거 2025' },
        { type: '기사', category: '정치', title: '2025년 대선 특집', url: '2025년 대선.html', keywords: '2025년 대선 선거 대통령 이재명' },
        { type: '기사', category: '정치', title: '[속보] 윤석열 대통령 탄핵안 가결... 직무 즉시 정지', url: '[속보] 윤석열 대통령 탄핵안 가결... 반란 수괴 심판한 국회, 직무 즉시 정지.html', keywords: '속보 윤석열 탄핵 가결 직무 정지' },
        { type: '기사', category: '정치', title: '[속보] 헌재, 윤석열 탄핵 인용', url: '[속보] 헌재, 윤석열 탄핵 인용.html', keywords: '속보 헌재 윤석열 탄핵 인용' },
        { type: '기사', category: '사회', title: '[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 환호', url: '[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 반란군을 체포하라.html', keywords: '속보 계엄 해제 환호 민주주의 승리 반란군' },
        { type: '기사', category: '정치', title: '[속보] 국회, 비상계엄 해제 요구안 가결... 헌정사상 최단기 종료', url: '[속보] 국회, 비상계엄 해제 요구안 가결... 190명 전원 찬성 헌정사상 최단기 종료 - 효빈일보.html', keywords: '속보 국회 비상계엄 해제 가결 최단기' },
        { type: '기사', category: '사회', title: '윤석열 비상계엄 선포, 부정선거 주장', url: '윤석열 비상계엄 선포, 부정선거 주장.html', keywords: '윤석열 계엄 부정선거' },
        { type: '기사', category: '사회', title: '[단독] 윤석열 구속 취소', url: '[단독] 윤석열 구속 취소.html', keywords: '윤석열 구속 취소 단독' },
        { type: '기사', category: '사회', title: '[속보] 윤석열 전 대통령 구속', url: '[속보] 윤석열 전 대통령 구속.html', keywords: '속보 윤석열 구속' },
        { type: '기사', category: '사회', title: '[속보] 윤석열 전 대통령 재구속', url: '[속보] 윤석열 전 대통령 재구속.html', keywords: '속보 윤석열 재구속' },
        { type: '기사', category: '정치', title: '[속보] 탄핵안 정족수 미달 자동 폐기... 여당 의원들 집단 도주에 아수라장', url: '[속보] 탄핵안 정족수 미달 자동 폐기... 여당 의원들 집단 도주에 국회 아수라장.html', keywords: '속보 탄핵안 정족수 미달 폐기 도주' },
        { type: '기사', category: '사회', title: '윤석열 속옷저항 논란', url: '윤석열 속옷저항.html', keywords: '윤석열 속옷 저항' },
        { type: '기사', category: '경제', title: '[속보] 한국은행, 기준금리 연 3.25%로 전격 인하', url: 'news_bok_rate_cut.html', keywords: '한국은행 금리 인하 피벗 경제 속보 이창용' },
        { type: '기사', category: '경제', title: '코스피 5000 돌파 속보 (2026년 1월 27일)', url: '코스피 5000 돌파 속보 (2026년 1월 27일).html', keywords: '코스피 5000 경제' },
        
        // --- 아카이브 (10년 이상) ---
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 갈색 겨울, 두청운수 파업 사태', url: 'archive_2007_brown_winter.html', keywords: '2007 갈색 겨울 파업 두청운수 archive brown winter' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 두청운수 사건 최종 판결', url: 'archive_2007_final_verdict.html', keywords: '2007 판결 법원 두청운수 archive final verdict' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 치열했던 법정 공방 기록', url: 'archive_2007_legal_battle.html', keywords: '2007 법정 공방 재판 두청운수 archive legal battle' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 5호선 참사의 비극', url: 'archive_2007_line5_tragedy.html', keywords: '2007 5호선 참사 지하철 사고 archive line5 tragedy' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 대통령, 두청운수 사태 강력 질책', url: 'archive_2007_president_rebuke.html', keywords: '2007 대통령 질책 비판 두청운수 archive president rebuke' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 도심 마비시킨 폭력 시위', url: 'archive_2007_protest_violence.html', keywords: '2007 폭력 시위 마비 시청 archive protest violence' },
        { type: '아카이브', category: '특집', title: '[2007년 아카이브] 신세계 언론의 보도 행태', url: 'archive_2007_shinsegae_press.html', keywords: '2007 신세계 언론 보도 가짜뉴스 archive shinsegae press' },
        { type: '아카이브', category: '특집', title: '[2010년 아카이브] 두청운수, 결국 최종 부도 처리', url: 'archive_2010_doocheong_bankruptcy.html', keywords: '2010 두청운수 부도 파산 파산 archive bankruptcy' },
        { type: '아카이브', category: '특집', title: '[2011년 아카이브] 효빈 5호선, 우여곡절 끝 개통', url: 'archive_2011_line5_opening.html', keywords: '2011 5호선 개통 지하철 빨간색 archive line5 opening' },

        // --- 효빈시 주요 기사 ---
        { type: '기사', category: '정치', title: '[속보] 박효빈 시장 계엄 포고령 거부... 시민 지키기 위해 공수부대와 맞서겠다', url: '[속보] 박효빈 시장 계엄 포고령 거부... 시민 지키기 위해 공수부대와 맞서겠다 - 효빈일보.html', keywords: '속보 박효빈 계엄 거부 공수부대' },
        { type: '기사', category: '정치', title: '[여론조사] 박효빈 효빈시장, 지지율 82.4퍼센트 고공행진', url: '[여론조사] 박효빈 효빈시장, 지지율 82.4퍼센트 고공행진.html', keywords: '여론조사 박효빈 지지율 고공행진' },
        { type: '기사', category: '정치', title: '[기획] 강서구의 교훈 잊은 용산, 효빈에서 확인사살 당하다', url: '[기획] 강서구의 교훈 잊은 용산, 효빈에서 확인사살 당하다.html', keywords: '강서구 용산 확인사살 기획' },
        { type: '기사', category: '정치', title: '효빈일보 - 윤재훈 선거법 고발 참사', url: '효빈일보 - 윤재훈 선거법 고발 참사.html', keywords: '윤재훈 고발 선거법' },
        { type: '기사', category: '사회', title: '효빈일보 박효빈 시장 당가동 사건 기사', url: '효빈일보 박효빈 시장 당가동 사건 기사.html', keywords: '박효빈 당가동' },
        { type: '기사', category: '사회', title: '효빈일보 악플 박제 기사', url: '효빈일보 악플 박제 기사.html', keywords: '악플 박제' },
        { type: '기사', category: '정치', title: '효빈일보 곽두환 당선무효 기사', url: '효빈일보 곽두환 당선무효 기사.html', keywords: '곽두환 당선 무효' },
        { type: '기사', category: '정치', title: '효빈일보 박준서 입당 기사', url: '효빈일보 박준서 입당 기사.html', keywords: '박준서 입당' },
        { type: '기사', category: '정치', title: '[단독] 효빈 보수의 양심 부서원, 국민의힘 탈당', url: '[단독] 효빈 보수의 양심 부서원, 국민의힘 탈당.html', keywords: '부서원 탈당 국민의힘 보수 양심' },
        { type: '기사', category: '정치', title: '조병진 의원직 승계 기사', url: '조병진 승계 기사.html', keywords: '조병진 승계' },
        { type: '기사', category: '문화', title: '효빈 명물 엠마빵, 하루 1만개 팔렸다', url: 'news_emma_bread.html', keywords: '엠마빵 엠마 베르데 빵지순례 emma bread' },
        { type: '기사', category: '문화', title: '제1회 효빈 애니메이션 페스티벌(HAF) 개최', url: 'news_haf.html', keywords: 'haf 효빈 애니메이션 페스티벌 축제' },
        { type: '기사', category: '문화', title: '일본 유명 성우, HAF 전격 방문', url: 'news_haf_seiyu_visit.html', keywords: 'haf 성우 방문 일본 애니메이션 seiyu visit' },
        { type: '기사', category: '사회', title: '효빈대 학생들, 인간방패로 계엄군 막아내', url: 'news_univ_human_shield.html', keywords: '효빈대 인간방패 계엄군 민주주의 univ human shield' },
        { type: '기사', category: '경제', title: '침체기 겪던 당가 상권, 화려한 부활', url: 'news_dangga_revival.html', keywords: '당가 상권 부활 도시재생 dangga revival' },
        { type: '기사', category: '국제', title: '필리핀 갱단 연루 윤재훈, 필리핀서 심판받나', url: 'news_philippines.html', keywords: '필리핀 윤재훈 국제 갱단 피노이 프라이드 philippines' },
        { type: '기사', category: '국제', title: '효빈시-퀘존시(필리핀), 자매결연 협약', url: 'news_quezon_city.html', keywords: '퀘존시 필리핀 자매결연 quezon city' },
        { type: '기사', category: '사회', title: '[기획] 비 새는 단칸방... 박효빈 시장의 과거', url: 'news_park_past.html', keywords: '박효빈 과거 단칸방 기획 눈물 park past' },
        { type: '기사', category: '사회', title: '효빈 종합버스터미널 새단장', url: 'news_bus_terminal.html', keywords: '버스터미널 교통 고속버스 bus terminal' },
        { type: '기사', category: '정치', title: '[단독] 2026 효빈시장 선거 여론조사', url: '[단독] 2026 효빈시장 선거 여론조사.html', keywords: '선거 여론조사 2026' },
        { type: '기사', category: '정치', title: '[지선 D-60] 2026 효빈시장 선거 대진표', url: '[지선 D-60] 2026 효빈시장 선거 대진표.html', keywords: '지방선거 대진표 효빈시장' },
        
        // --- 구분 (카테고리 홈) ---
        { type: '구분', category: '안내', title: '효빈일보 홈', url: 'index.html', keywords: '메인 홈 표지 index 구분' },
        { type: '구분', category: '안내', title: '정치 뉴스 홈', url: 'politics.html', keywords: '정치 시정 시장 선거 politics 구분' },
        { type: '구분', category: '안내', title: '경제 뉴스 홈', url: 'economy.html', keywords: '경제 기업 산업 예산 economy 구분' },
        { type: '구분', category: '안내', title: '사회 뉴스 홈', url: 'society.html', keywords: '사회 사건 사고 경찰 society 구분' },
        { type: '구분', category: '안내', title: '국제 뉴스 홈', url: 'world.html', keywords: '국제 세계 해외 특파원 world 구분' },
        { type: '구분', category: '안내', title: '문화 뉴스 홈', url: 'culture.html', keywords: '문화 축제 애니메이션 굿즈 culture 구분' },
        { type: '구분', category: '안내', title: 'IT/과학 뉴스 홈', url: 'it.html', keywords: 'it 과학 기술 인터넷 사이버 it 구분' },
        { type: '구분', category: '안내', title: '오피니언 홈', url: 'opinion.html', keywords: '오피니언 사설 칼럼 기고 opinion 구분' },
        { type: '구분', category: '안내', title: '포토 뉴스 홈', url: 'photo.html', keywords: '포토 사진 화보 현장 photo 구분' },
        { type: '구분', category: '안내', title: '전체 기사 목록', url: 'news_list.html', keywords: '뉴스 목록 전체 news list' }
    ];

    // ==========================================
    // 2. 코어 전용 독립 CSS (원래 HTML의 CSS를 완벽히 무시하고 덮어씀)
    // ==========================================
    const INJECTED_CSS = `
    /* 효빈일보 코어 전용 스타일 - 접두사 hb-core- 사용으로 간섭 원천 차단 */
    
    /* 상단 바 */
    .hb-core-topbar { background-color: #f8f9fa; border-bottom: 1px solid #e2e2e2; font-size: 12px; color: #555; padding: 6px 0; }
    .hb-core-topbar-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 10px; }
    .hb-core-topbar a, .hb-core-topbar button, .hb-core-topbar span.link { color: #555; text-decoration: none; cursor: pointer; transition: color 0.2s; background: none; border: none; padding: 0; font-family: inherit; }
    .hb-core-topbar a:hover, .hb-core-topbar button:hover, .hb-core-topbar span.link:hover { color: #0055aa; text-decoration: underline; }
    .hb-core-topbar .highlight { color: #0055aa; font-weight: bold; }
    .hb-core-topbar .weather { color: #d97706; font-weight: bold; }
    
    /* 메인 헤더 & 네비게이션 */
    .hb-core-header { background-color: #ffffff; border-bottom: 1px solid #e2e2e2; }
    .hb-core-header-inner { max-width: 1100px; margin: 0 auto; padding: 24px 10px 16px; display: flex; justify-content: space-between; align-items: flex-end; }
    .hb-core-logo { font-size: 36px; font-weight: 900; color: #0055aa; letter-spacing: -1.5px; cursor: pointer; line-height: 1; }
    .hb-core-search-box { display: flex; gap: 8px; position: relative; }
    .hb-core-search-input { border: 1px solid #ccc; padding: 6px 12px; font-size: 14px; width: 240px; border-radius: 2px; outline: none; }
    .hb-core-search-input:focus { border-color: #0055aa; }
    .hb-core-search-btn { background-color: #0055aa; color: white; border: none; padding: 6px 16px; font-size: 14px; font-weight: bold; cursor: pointer; border-radius: 2px; }
    .hb-core-search-btn:hover { background-color: #004488; }
    
    .hb-core-nav-wrap { border-top: 1px solid #e2e2e2; }
    .hb-core-nav { max-width: 1100px; margin: 0 auto; display: flex; }
    .hb-core-nav a { color: #333; font-weight: bold; font-size: 16px; padding: 0 16px; text-decoration: none; display: inline-flex; align-items: center; height: 50px; }
    .hb-core-nav a:hover { color: #0055aa; }
    .hb-core-nav a.active { color: #0055aa; border-bottom: 3px solid #0055aa; }
    .hb-core-nav-divider { border-left: 1px solid #ddd; margin-left: 8px; padding-left: 8px; }

    /* 사이드바 랜덤 랭킹 박스 (확실하게 보이도록 스타일 재정의) */
    .hb-core-ranking { background-color: #ffffff; border: 1px solid #e2e2e2; padding: 20px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); margin-bottom: 20px; }
    .hb-core-ranking-title { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #222; padding-bottom: 10px; margin-bottom: 16px; }
    .hb-core-ranking-title-text { font-size: 17px; font-weight: 800; color: #0055aa; }
    .hb-core-ranking-title-sub { font-size: 12px; color: #888; }
    
    .hb-core-rank-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
    .hb-core-rank-item { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; padding: 4px; border-radius: 4px; transition: background 0.2s; }
    .hb-core-rank-item:hover { background-color: #f8f9fa; }
    .hb-core-rank-num { font-size: 16px; font-weight: 900; font-style: italic; color: #0055aa; width: 20px; flex-shrink: 0; line-height: 1.2; }
    .hb-core-rank-num.top3 { color: #d9534f; }
    .hb-core-rank-text-wrap { flex: 1; display: flex; flex-direction: column; }
    .hb-core-rank-cat { font-size: 11px; font-weight: bold; color: #777; margin-bottom: 2px; }
    .hb-core-rank-title { font-size: 14px; font-weight: 500; color: #222; line-height: 1.4; word-break: break-all; }
    .hb-core-rank-item:hover .hb-core-rank-title { color: #0055aa; text-decoration: underline; }
    
    /* 스크랩 별 버튼 (가독성 극대화) */
    .hb-core-scrap-btn { background: none; border: none; font-size: 20px; color: #d1d5db; cursor: pointer; line-height: 1; padding: 0 4px; transition: color 0.2s; flex-shrink: 0; }
    .hb-core-scrap-btn:hover { color: #facc15; }
    .hb-core-scrap-btn.active { color: #eab308; }

    /* 푸터 */
    .hb-core-footer { background-color: #222222; color: #aaaaaa; padding: 40px 10px; font-size: 13px; margin-top: 50px; }
    .hb-core-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
    @media(min-width: 768px) { .hb-core-footer-inner { flex-direction: row; justify-content: space-between; } }
    .hb-core-footer-links { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; }
    .hb-core-footer-links span { cursor: pointer; transition: color 0.2s; }
    .hb-core-footer-links span:hover { color: #ffffff; text-decoration: underline; }
    .hb-core-footer-text p { margin: 0 0 6px 0; }
    
    /* 다크모드 완벽 대응 */
    html.dark .hb-core-topbar { background-color: #1a1a1a; border-color: #333; color: #aaa; }
    html.dark .hb-core-topbar a, html.dark .hb-core-topbar button, html.dark .hb-core-topbar span.link { color: #aaa; }
    html.dark .hb-core-topbar a:hover, html.dark .hb-core-topbar button:hover, html.dark .hb-core-topbar span.link:hover { color: #4dabf7; }
    html.dark .hb-core-topbar .highlight { color: #4dabf7; }
    
    html.dark .hb-core-header { background-color: #1e1e1e; border-color: #333; }
    html.dark .hb-core-header-inner { border-color: #333; }
    html.dark .hb-core-logo { color: #4dabf7; }
    html.dark .hb-core-search-input { background-color: #2a2a2a; border-color: #555; color: white; }
    html.dark .hb-core-search-input:focus { border-color: #4dabf7; }
    html.dark .hb-core-search-btn { background-color: #0066cc; }
    
    html.dark .hb-core-nav-wrap { border-color: #333; }
    html.dark .hb-core-nav a { color: #eee; }
    html.dark .hb-core-nav a:hover { color: #4dabf7; }
    html.dark .hb-core-nav a.active { color: #4dabf7; border-color: #4dabf7; }
    html.dark .hb-core-nav-divider { border-color: #444; }

    html.dark .hb-core-ranking { background-color: #1e1e1e; border-color: #333; box-shadow: none; }
    html.dark .hb-core-ranking-title { border-color: #555; }
    html.dark .hb-core-ranking-title-text { color: #4dabf7; }
    html.dark .hb-core-rank-item:hover { background-color: #2a2a2a; }
    html.dark .hb-core-rank-num { color: #4dabf7; }
    html.dark .hb-core-rank-num.top3 { color: #ff6b6b; }
    html.dark .hb-core-rank-cat { color: #aaa; }
    html.dark .hb-core-rank-title { color: #e0e0e0; }
    html.dark .hb-core-rank-item:hover .hb-core-rank-title { color: #4dabf7; }
    html.dark .hb-core-scrap-btn { color: #666; }
    html.dark .hb-core-scrap-btn:hover { color: #facc15; }
    html.dark .hb-core-scrap-btn.active { color: #eab308; }

    html.dark .hb-core-footer { background-color: #0a0a0a; border-top: 1px solid #222; }
    `;

    // ==========================================
    // 3. 공통 HTML 템플릿 (접두사 적용)
    // ==========================================
    const COMMON_HEADER_HTML = `
    <div class="hb-core-topbar">
        <div class="hb-core-topbar-inner">
            <div style="display:flex; gap:16px; align-items:center;">
                <span class="highlight">효빈일보</span>
                <span id="current-time"></span>
                <span class="weather">☀️ 맑음 22℃ / 미세먼지 좋음 (효빈시)</span>
            </div>
            <div style="display:flex; gap:12px; align-items:center;">
                <button id="toggle-dark-mode" title="야간 모드 전환">
                    <span id="dark-mode-icon">🌙</span> <span id="dark-mode-text">야간 모드</span>
                </button> |
                <button id="open-scrapbook" title="저장한 기사 보기" style="color: #d97706; font-weight:bold;">
                    ⭐ 스크랩북 (<span id="scrap-count">0</span>)
                </button> | 
                <a href="index.html">효빈위키 홈</a> | 
                <span id="btn-login-top" class="link">로그인</span> |
                <span id="btn-subscribe-top" class="highlight link">구독신청</span>
            </div>
        </div>
    </div>
    <header class="hb-core-header">
        <div class="hb-core-header-inner">
            <div class="hb-core-logo" onclick="location.href='index.html'">효빈일보</div>
            <div class="hb-core-search-box">
                <input type="text" placeholder="기사, 아카이브 검색" class="hb-core-search-input" id="hnNewsSearchInput" autocomplete="off">
                <button id="hnNewsSearchBtn" class="hb-core-search-btn">검색</button>
            </div>
        </div>
        <div class="hb-core-nav-wrap">
            <div class="hb-core-nav">
                <a href="index.html" id="nav-home">홈</a>
                <a href="politics.html" id="nav-politics">정치</a>
                <a href="economy.html" id="nav-economy">경제</a>
                <a href="society.html" id="nav-society">사회</a>
                <a href="world.html" id="nav-world">국제</a>
                <a href="culture.html" id="nav-culture">문화</a>
                <a href="it.html" id="nav-it">IT/과학</a>
                <a href="opinion.html" id="nav-opinion">오피니언</a>
                <a href="photo.html" id="nav-photo">포토</a>
                <a href="news_list.html" id="nav-list" class="hb-core-nav-divider">전체 기사</a>
            </div>
        </div>
    </header>
    `;

    const COMMON_FOOTER_HTML = `
    <footer class="hb-core-footer">
        <div class="hb-core-footer-inner">
            <div>
                <div class="hb-core-footer-links">
                    <span class="policy-link" data-type="about">회사소개</span>
                    <span class="policy-link" data-type="subscribe">구독신청</span>
                    <span class="policy-link" data-type="grievance">고충처리</span>
                    <span class="policy-link" data-type="terms">이용약관</span>
                    <span class="policy-link" data-type="privacy" style="font-weight:bold; color:#ddd;">개인정보처리방침</span>
                </div>
                <div class="hb-core-footer-text">
                    <p>제호: 효빈일보 | 등록번호: 효빈 가00001 | 발행인: 최진언 | 편집인: 강정직</p>
                    <p>주소: 효빈광역시 북구 중수동 281-1 효빈미디어센터 5층</p>
                    <p>전화: 079-212-2123 | 팩스: 079-212-2124</p>
                    <p style="margin-top:10px; color:#777;">Copyright © Hyobin Ilbo. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    `;

    const COMMON_MODALS_HTML = `
    <!-- 스크랩북 모달 -->
    <div id="scrapbook-modal" class="fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <h3 class="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <span class="text-yellow-500">⭐</span> 나의 스크랩북
                </h3>
                <button id="close-scrapbook" class="text-gray-500 hover:text-red-500 font-bold px-2 py-1">✕</button>
            </div>
            <div id="scrap-modal-list" class="p-4 overflow-y-auto flex-1 custom-scrollbar"></div>
        </div>
    </div>

    <!-- 로그인 모달 -->
    <div id="login-modal" class="fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-white dark:bg-gray-800 w-full max-w-sm rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 class="font-bold text-lg text-gray-800 dark:text-gray-100">효빈일보 로그인</h3>
                <button class="close-modal-btn text-gray-500 hover:text-red-500 font-bold px-2 py-1">✕</button>
            </div>
            <div class="p-6 flex flex-col gap-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">아이디</label>
                    <input type="text" id="login-id" placeholder="아이디를 입력하세요" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">비밀번호</label>
                    <input type="password" id="login-pw" placeholder="비밀번호를 입력하세요" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <button id="submit-login" class="w-full bg-[#0055aa] hover:bg-[#004488] text-white font-bold py-2 rounded-lg mt-2 transition-colors">로그인</button>
                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <span id="btn-open-signup" class="cursor-pointer hover:underline text-[#0055aa] dark:text-[#4dabf7] font-bold">회원가입</span>
                    <span class="cursor-pointer hover:underline">아이디/비밀번호 찾기</span>
                </div>
            </div>
        </div>
    </div>

    <!-- 회원가입 모달 -->
    <div id="signup-modal" class="fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-white dark:bg-gray-800 w-full max-w-sm rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <h3 class="font-bold text-lg text-[#0055aa] dark:text-[#4dabf7]">효빈일보 회원가입</h3>
                <button class="close-modal-btn text-gray-500 hover:text-red-500 font-bold px-2 py-1">✕</button>
            </div>
            <div class="p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar max-h-[70vh]">
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">아이디</label>
                    <input type="text" id="signup-id" placeholder="사용할 아이디" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">비밀번호</label>
                    <input type="password" id="signup-pw" placeholder="비밀번호" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">비밀번호 확인</label>
                    <input type="password" id="signup-pw-confirm" placeholder="비밀번호 재입력" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">이름</label>
                    <input type="text" id="signup-name" placeholder="홍길동" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]">
                </div>
                <button id="submit-signup" class="w-full bg-[#0055aa] hover:bg-[#004488] text-white font-bold py-2 rounded-lg mt-4 transition-colors">가입완료</button>
            </div>
        </div>
    </div>

    <!-- 구독신청 모달 -->
    <div id="subscribe-modal" class="fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shrink-0">
                <h3 class="font-bold text-lg text-[#0055aa] dark:text-[#4dabf7]">효빈일보 정기구독 신청</h3>
                <button class="close-modal-btn text-gray-500 hover:text-red-500 font-bold px-2 py-1">✕</button>
            </div>
            <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">효빈시민의 진실된 눈, 효빈일보를 매일 아침 만나보세요.</p>
                <div class="flex flex-col gap-3 mb-6">
                    <label class="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        <input type="radio" name="sub_type" class="mr-3 w-4 h-4" checked>
                        <div class="flex-1">
                            <div class="font-bold text-gray-800 dark:text-gray-200">디지털 베이직</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">웹/앱 무제한 열람</div>
                        </div>
                        <div class="font-bold text-[#0055aa] dark:text-[#4dabf7]">월 4,900원</div>
                    </label>
                    <label class="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        <input type="radio" name="sub_type" class="mr-3 w-4 h-4">
                        <div class="flex-1">
                            <div class="font-bold text-gray-800 dark:text-gray-200">종이신문 + 디지털</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">매일 아침 문앞 배송</div>
                        </div>
                        <div class="font-bold text-[#0055aa] dark:text-[#4dabf7]">월 15,000원</div>
                    </label>
                </div>
                <div class="flex flex-col gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">신청자 이름</label>
                        <input type="text" id="sub-name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]" placeholder="홍길동">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">연락처</label>
                        <input type="text" id="sub-phone" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]" placeholder="010-1234-5678">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">배송지 주소 <span class="text-xs font-normal text-gray-500">(디지털 전용시 생략 가능)</span></label>
                        <input type="text" id="sub-address" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#0055aa] dark:focus:border-[#4dabf7]" placeholder="효빈광역시 북구...">
                    </div>
                </div>
                <button id="submit-subscribe" class="w-full bg-[#0055aa] hover:bg-[#004488] text-white font-bold py-3 rounded-lg mt-6 transition-colors shadow-lg">구독 신청 및 결제 진행하기</button>
            </div>
        </div>
    </div>

    <!-- 하단 정책(텍스트) 모달 -->
    <div id="policy-modal" class="fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shrink-0">
                <h3 id="policy-title" class="font-bold text-lg text-gray-800 dark:text-gray-100">정책 타이틀</h3>
                <button class="close-modal-btn text-gray-500 hover:text-red-500 font-bold px-2 py-1">✕</button>
            </div>
            <div id="policy-content" class="p-6 overflow-y-auto flex-1 custom-scrollbar text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"></div>
            <div class="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end shrink-0">
                <button class="close-modal-btn bg-[#0055aa] hover:bg-[#004488] text-white px-5 py-2 rounded-lg font-bold transition-colors">확인</button>
            </div>
        </div>
    </div>
    `;

    // ==========================================
    // 4. UI 자동 주입 로직
    // ==========================================
    function injectCommonUI() {
        // CSS 주입
        if(!document.getElementById('hb-core-injected-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'hb-core-injected-styles';
            styleEl.innerHTML = INJECTED_CSS;
            document.head.appendChild(styleEl);
        }

        // 헤더 주입
        const headerContainer = document.getElementById('common-header');
        if (headerContainer) headerContainer.innerHTML = COMMON_HEADER_HTML;
        
        // 푸터 주입
        const footerContainer = document.getElementById('common-footer');
        if (footerContainer) footerContainer.innerHTML = COMMON_FOOTER_HTML;
        
        // 모달 주입
        document.body.insertAdjacentHTML('beforeend', COMMON_MODALS_HTML);

        // 현재 메뉴 활성화
        const currentPath = window.location.pathname.split('/').pop();
        if(currentPath) {
            document.querySelectorAll('.hb-core-nav a').forEach(a => a.classList.remove('active'));
            if(currentPath.includes('index.html')) document.getElementById('nav-home')?.classList.add('active');
            else if(currentPath.includes('politics.html')) document.getElementById('nav-politics')?.classList.add('active');
            else if(currentPath.includes('economy.html')) document.getElementById('nav-economy')?.classList.add('active');
            else if(currentPath.includes('society.html')) document.getElementById('nav-society')?.classList.add('active');
            else if(currentPath.includes('world.html')) document.getElementById('nav-world')?.classList.add('active');
            else if(currentPath.includes('culture.html')) document.getElementById('nav-culture')?.classList.add('active');
            else if(currentPath.includes('it.html')) document.getElementById('nav-it')?.classList.add('active');
            else if(currentPath.includes('opinion.html')) document.getElementById('nav-opinion')?.classList.add('active');
            else if(currentPath.includes('photo.html')) document.getElementById('nav-photo')?.classList.add('active');
            else if(currentPath.includes('news_list.html')) document.getElementById('nav-list')?.classList.add('active');
        }
    }

    // ==========================================
    // 5. 검색 엔진 로직
    // ==========================================
    const MAX_RECENT = 8;
    const RECENT_KEY = "hb_news_recent";

    function normKey(s){ return (s||"").toString().trim().toLowerCase(); }
    function loadRecent(){ try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]") || []; }catch(e){ return []; } }
    function saveRecent(list){ try{ localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0,MAX_RECENT))); }catch(e){} }
    function pushRecent(q){
        let qNorm = q.trim();
        if(!qNorm) return;
        const list = loadRecent().filter(x=>normKey(x)!==normKey(qNorm));
        list.unshift(qNorm);
        saveRecent(list);
    }

    function score(item, q){
        const t = normKey(item.title);
        const k = normKey(q);
        const kw = normKey(item.keywords || "");
        if(!k) return 0;
        if(t === k) return 100;
        if(t.startsWith(k)) return 80;
        if(t.includes(k)) return 50;
        if(kw.includes(k)) return 30;
        return 0;
    }

    function ensureDropdown(input){
        const wrap = input.parentElement;
        if(wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";
        let dd = wrap.querySelector(".hn-autocomplete");
        if(!dd){
            dd = document.createElement("div");
            dd.className = "hn-autocomplete absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-[9999] max-h-72 overflow-y-auto hidden";
            wrap.appendChild(dd);
        }
        return dd;
    }

    function hide(dd){ if(dd) dd.classList.add("hidden"); }
    function show(dd){ if(dd) dd.classList.remove("hidden"); }

    function row(dd, label, typeStr, cb, isMuted=false){
        const r = document.createElement("button");
        r.type="button";
        r.className = `w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors ${isMuted ? 'text-gray-400 cursor-default' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'}`;
        let typeBadge = typeStr ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ml-2 whitespace-nowrap">${typeStr}</span>` : '';
        r.innerHTML = `<span class="truncate pr-2">${label}</span>${typeBadge}`;
        if(!isMuted) r.addEventListener("click", cb);
        dd.appendChild(r);
    }

    function renderDropdown(dd, input, q){
        dd.innerHTML="";
        const query = q.trim();
        const recent = loadRecent();

        if(!query){
            row(dd, "🕒 최근 검색어", "", null, true);
            if(recent.length===0) row(dd, "검색 이력이 없습니다.", "", null, true);
            else{
                recent.forEach(r=>{
                    row(dd, r, "", ()=>{ input.value=r; doSearch(r); });
                });
                const clear = document.createElement("button");
                clear.className = "w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors";
                clear.textContent = "최근 검색어 지우기";
                clear.addEventListener("click", ()=>{ saveRecent([]); renderDropdown(dd,input,""); });
                dd.appendChild(clear);
            }
            show(dd);
            return;
        }

        const matches = NEWS_DATABASE
            .map(it=>({it, s: score(it, query)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .slice(0, 8)
            .map(x=>x.it);

        if(matches.length===0) row(dd,"일치하는 문서가 없습니다", "", null, true);
        else{
            matches.forEach(it=>{
                row(dd, it.title, it.type, ()=>{ pushRecent(query); location.href = it.url; });
            });
        }
        show(dd);
    }

    function showModal(query, items){
        let modal = document.getElementById("hn-search-modal");
        if(!modal){
            modal = document.createElement("div");
            modal.id = "hn-search-modal";
            modal.className = "fixed inset-0 bg-black bg-opacity-50 z-[10000] hidden backdrop-blur-sm transition-opacity";
            modal.innerHTML = `
                <div data-close="1" class="absolute inset-0 cursor-pointer"></div>
                <div class="relative mt-20 mx-auto w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
                    <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                        <div class="font-bold text-lg text-gray-800 dark:text-white">통합 검색 결과</div>
                        <button type="button" data-close="1" class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">닫기</button>
                    </div>
                    <div class="p-4 overflow-y-auto flex-1 custom-scrollbar">
                        <div id="hn-search-meta" class="text-sm text-[#0055aa] dark:text-[#4dabf7] font-bold mb-3"></div>
                        <div id="hn-search-list" class="flex flex-col gap-2"></div>
                    </div>
                </div>
            `;
            modal.addEventListener("click", (e)=>{
                if(e.target.getAttribute("data-close")==="1") modal.classList.add("hidden");
            });
            document.body.appendChild(modal);
        }
        
        const meta = modal.querySelector("#hn-search-meta");
        const list = modal.querySelector("#hn-search-list");
        meta.textContent = `“${query}” 검색 결과 총 ${items.length}건`;
        list.innerHTML = "";

        if(items.length===0){
            list.innerHTML = `<div class="py-10 text-center text-gray-500">일치하는 문서가 없습니다.</div>`;
        } else {
            items.forEach(it=>{
                const typeColor = it.type === '아카이브' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' : 
                                  it.type === '구분' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
                
                list.innerHTML += `
                    <a href="${it.url}" class="block p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md hover:border-[#0055aa] dark:hover:border-[#4dabf7] transition-all bg-white dark:bg-gray-800 relative group" style="text-decoration:none;">
                        <div class="font-bold text-gray-900 dark:text-gray-100 mb-1 pr-10">
                            <span class="text-gray-500 text-xs font-normal mr-1">[${it.category}]</span> ${it.title}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs px-1.5 py-0.5 rounded font-bold ${typeColor}">${it.type}</span>
                            <span class="text-xs text-gray-400 dark:text-gray-500">${it.url}</span>
                        </div>
                    </a>
                `;
            });
        }
        modal.classList.remove("hidden");
    }

    window.doSearch = function(q){
        q = q.trim();
        if(!q) return;
        const matches = NEWS_DATABASE
            .map(it=>({it, s: score(it, q)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .map(x=>x.it);

        pushRecent(q);
        showModal(q, matches);
    }

    function initSearch() {
        const input = document.getElementById("hnNewsSearchInput");
        const btn = document.getElementById("hnNewsSearchBtn");
        if(input){
            const dd = ensureDropdown(input);
            input.addEventListener("keydown", (e)=>{
                if(e.key==="Enter"){ e.preventDefault(); hide(dd); window.doSearch(input.value); } 
                else if(e.key==="Escape"){ hide(dd); input.blur(); }
            });
            input.addEventListener("input", ()=>renderDropdown(dd,input,input.value));
            input.addEventListener("focus", ()=>renderDropdown(dd,input,input.value));
            document.addEventListener("click", (e)=>{
                if(input.parentElement && input.parentElement.contains(e.target)) return;
                hide(dd);
            });
            if(btn) btn.addEventListener("click", ()=>window.doSearch(input.value));
        }
    }


    // ==========================================
    // 6. 많이 본 뉴스 (랜덤 랭킹 자동 주입 & 렌더링)
    // ==========================================
    function renderRandomRanking() {
        const rankingContainer = document.getElementById('common-sidebar-ranking');
        if(!rankingContainer) return;

        const articles = NEWS_DATABASE.filter(item => item.type === '기사' || item.type === '아카이브');
        for (let i = articles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [articles[i], articles[j]] = [articles[j], articles[i]];
        }

        const top10 = articles.slice(0, 10);
        let listHTML = '';

        top10.forEach((item, index) => {
            const numClass = index < 3 ? 'top3' : ''; 
            listHTML += `
                <li class="hb-core-rank-item" onclick="if(!event.target.closest('.hb-core-scrap-btn')) location.href='${item.url}'">
                    <span class="hb-core-rank-num ${numClass}">${index + 1}</span>
                    <div class="hb-core-rank-text-wrap">
                        <span class="hb-core-rank-cat">[${item.category}]</span>
                        <span class="hb-core-rank-title">${item.title}</span>
                    </div>
                    <button class="hb-core-scrap-btn scrap-btn" data-url="${item.url}" data-title="${item.title}" title="스크랩하기">★</button>
                </li>
            `;
        });

        rankingContainer.innerHTML = `
            <div class="hb-core-ranking">
                <div class="hb-core-ranking-title">
                    <span class="hb-core-ranking-title-text">많이 본 뉴스</span>
                    <span class="hb-core-ranking-title-sub">실시간 랜덤</span>
                </div>
                <ul class="hb-core-rank-list">
                    ${listHTML}
                </ul>
            </div>
        `;
    }

    // ==========================================
    // 7. 스크랩, 모달, 다크모드, 시간 로직 등
    // ==========================================
    const SCRAP_KEY = 'hyobin_scraps';
    function getScraps() { try { return JSON.parse(localStorage.getItem(SCRAP_KEY)) || []; } catch { return []; } }
    function saveScraps(scraps) { localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps)); updateScrapUI(); }

    window.toggleScrap = function(url, title, btnEl) {
        let scraps = getScraps();
        const existingIdx = scraps.findIndex(s => s.url === url);
        if (existingIdx > -1) { scraps.splice(existingIdx, 1); if(btnEl) btnEl.classList.remove('active'); } 
        else { scraps.push({ url, title, date: new Date().getTime() }); if(btnEl) btnEl.classList.add('active'); }
        saveScraps(scraps);
    }

    function updateScrapUI() {
        const scraps = getScraps();
        const countEl = document.getElementById('scrap-count');
        if(countEl) countEl.textContent = scraps.length;
        document.querySelectorAll('.scrap-btn').forEach(btn => {
            if (scraps.some(s => s.url === btn.getAttribute('data-url'))) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    function bindScrapButtons() {
        document.querySelectorAll('.scrap-btn').forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            newBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleScrap(newBtn.getAttribute('data-url'), newBtn.getAttribute('data-title'), newBtn);
            });
        });
        updateScrapUI();
    }

    function initInteractiveFeatures() {
        // 날짜/시간
        setInterval(() => {
            const timeEl = document.getElementById('current-time');
            if(!timeEl) return;
            const now = new Date();
            const days = ['일', '월', '화', '수', '목', '금', '토'];
            timeEl.textContent = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} (${days[now.getDay()]}) ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
        }, 1000);

        // 다크모드
        const darkModeBtn = document.getElementById('toggle-dark-mode');
        if(darkModeBtn) {
            darkModeBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.theme = isDark ? 'dark' : 'light';
                document.getElementById('dark-mode-icon').textContent = isDark ? '☀️' : '🌙';
                document.getElementById('dark-mode-text').textContent = isDark ? '주간 모드' : '야간 모드';
            });
        }

        // 스크랩북 모달
        function renderScrapbook() {
            const listContainer = document.getElementById('scrap-modal-list');
            const scraps = getScraps();
            if (scraps.length === 0) { listContainer.innerHTML = '<div class="text-center text-gray-500 py-10">저장된 기사가 없습니다.</div>'; return; }
            listContainer.innerHTML = '';
            scraps.sort((a,b) => b.date - a.date).forEach(s => {
                const dateStr = new Date(s.date).toLocaleDateString('ko-KR', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
                listContainer.innerHTML += `
                    <div class="flex justify-between items-center p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <a href="${s.url}" class="text-gray-800 dark:text-gray-200 hover:text-[#0055aa] dark:hover:text-[#4dabf7] font-bold flex-1 pr-4 truncate" style="text-decoration:none;">${s.title}</a>
                        <div class="flex items-center gap-3">
                            <span class="text-xs text-gray-400">${dateStr}</span>
                            <button class="text-red-400 hover:text-red-600 font-bold px-2 py-1 text-sm" onclick="removeScrapFromModal('${s.url}')">삭제</button>
                        </div>
                    </div>`;
            });
        }
        window.removeScrapFromModal = function(url) { saveScraps(getScraps().filter(s => s.url !== url)); renderScrapbook(); }

        document.getElementById('open-scrapbook')?.addEventListener('click', () => { renderScrapbook(); document.getElementById('scrapbook-modal').classList.remove('hidden'); });

        // 모든 모달 닫기
        document.querySelectorAll('.close-modal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => e.target.closest('.fixed.inset-0').classList.add('hidden'));
        });
        window.addEventListener('click', (e) => { if(e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) e.target.classList.add('hidden'); });

        // 로그인/구독 모달 열기
        document.getElementById('btn-login-top')?.addEventListener('click', () => document.getElementById('login-modal').classList.remove('hidden'));
        document.getElementById('btn-subscribe-top')?.addEventListener('click', () => document.getElementById('subscribe-modal').classList.remove('hidden'));
        document.getElementById('btn-open-signup')?.addEventListener('click', () => { document.getElementById('login-modal').classList.add('hidden'); document.getElementById('signup-modal').classList.remove('hidden'); });

        // 푸터 정책
        document.querySelectorAll('.policy-link').forEach(link => {
            link.addEventListener('click', () => {
                const type = link.getAttribute('data-type');
                if(type === 'subscribe') { document.getElementById('subscribe-modal').classList.remove('hidden'); } 
                else { 
                    document.getElementById('policy-title').textContent = type.toUpperCase() + ' 안내';
                    document.getElementById('policy-content').textContent = '해당 정책 내용은 준비 중입니다.';
                    document.getElementById('policy-modal').classList.remove('hidden'); 
                }
            });
        });
    }

    // ==========================================
    // 8. 초기화 실행
    // ==========================================
    document.addEventListener("DOMContentLoaded", () => {
        injectCommonUI();         // 1. 헤더/푸터/모달 독립 CSS 및 HTML 주입
        initSearch();             // 2. 검색 이벤트 바인딩
        renderRandomRanking();    // 3. 랜덤 사이드바 랭킹 렌더링
        initInteractiveFeatures();// 4. 다크모드, 스크랩, 모달 바인딩
        bindScrapButtons();       // 5. 스크랩 버튼 이벤트 연결
        
        // 뉴스 리스트 필터 통신 (news_list.html)
        if(typeof window.hbNewsDatabaseReady === 'function') {
            window.hbNewsDatabaseReady(NEWS_DATABASE);
        }
    });

})();