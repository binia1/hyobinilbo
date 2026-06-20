(function(){
    // ==========================================
    // 1. 기사 데이터베이스 (카테고리 완비)
    // ==========================================
const NEWS_DATABASE = [
        // --- 현실 기반 속보 & 주요 기사 ---
        { type: '기사', category: '정치', title: '[21대 대선] 이재명 대통령 당선... 효빈시 박효빈 시장과 환상의 공조 기대', url: '[선택 2025] 이재명, 제21대 대통령 당선.html', keywords: '이재명 대통령 당선 선거 2025' },
        { type: '기사', category: '정치', title: '[21대 대선] 이재명 대통령 당선... 효빈시 박효빈 시장과 환상의 공조 기대', url: '2025년 대선.html', keywords: '2025년 대선 선거 대통령 이재명' },
        { type: '기사', category: '정치', title: '[속보] 윤석열 대통령 탄핵안 가결... 반란 수괴 심판한 국회, 직무 즉시 정지', url: '[속보] 윤석열 대통령 탄핵안 가결... 반란 수괴 심판한 국회, 직무 즉시 정지.html', keywords: '속보 윤석열 탄핵 가결 직무 정지' },
        { type: '기사', category: '정치', title: '[속보] 헌재, 윤석열 탄핵 인용', url: '[속보] 헌재, 윤석열 탄핵 인용.html', keywords: '속보 헌재 윤석열 탄핵 인용' },
        { type: '기사', category: '사회', title: '[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 반란군을 체포하라', url: '[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 반란군을 체포하라.html', keywords: '속보 계엄 해제 환호 민주주의 승리 반란군' },
        { type: '기사', category: '정치', title: '[속보] 국회, 비상계엄 해제 요구안 가결... 190명 전원 찬성 헌정사상 최단기 종료 - 효빈일보', url: '[속보] 국회, 비상계엄 해제 요구안 가결... 190명 전원 찬성 헌정사상 최단기 종료 - 효빈일보.html', keywords: '속보 국회 비상계엄 해제 가결 최단기' },
        { type: '기사', category: '사회', title: '윤석열 비상계엄 선포, 부정선거 주장', url: '윤석열 비상계엄 선포, 부정선거 주장.html', keywords: '윤석열 계엄 부정선거' },
        { type: '기사', category: '사회', title: '[단독] 윤석열 구속 취소', url: '[단독] 윤석열 구속 취소.html', keywords: '윤석열 구속 취소 단독' },
        { type: '기사', category: '사회', title: '[속보] 윤석열 전 대통령 구속', url: '[속보] 윤석열 전 대통령 구속.html', keywords: '속보 윤석열 구속' },
        { type: '기사', category: '사회', title: '[속보] 윤석열 전 대통령 재구속', url: '[속보] 윤석열 전 대통령 재구속.html', keywords: '속보 윤석열 재구속' },
        { type: '기사', category: '정치', title: '[속보] 탄핵안 정족수 미달 자동 폐기... 여당 의원들 집단 도주에 국회 아수라장', url: '[속보] 탄핵안 정족수 미달 자동 폐기... 여당 의원들 집단 도주에 국회 아수라장.html', keywords: '속보 탄핵안 정족수 미달 폐기 도주' },
        { type: '기사', category: '사회', title: '윤석열 속옷저항 논란', url: '윤석열 속옷저항.html', keywords: '윤석열 속옷 저항' },
        { type: '기사', category: '경제', title: '[속보] 한국은행, 기준금리 연 3.25%로 전격 인하', url: 'news_bok_rate_cut.html', keywords: '한국은행 금리 인하 피벗 경제 속보 이창용' },
        { type: '기사', category: '경제', title: '코스피 5000 돌파 속보 (2026년 1월 27일)', url: '코스피 5000 돌파 속보 (2026년 1월 27일).html', keywords: '코스피 5000 경제' },
        
        // --- 아카이브 (10년 이상) ---
        { type: '아카이브', category: '특집', title: '갈색 벽에 막힌 골든타임... 14세 소년 등 시민 2명 도로 위에서 숨져', url: 'archive_2007_brown_winter.html', keywords: '2007 갈색 겨울 파업 두청운수 archive brown winter' },
        { type: '아카이브', category: '특집', title: '상고를 기각한다... 대법원, 윤대환 시장 당선무효형 확정... 1년 10개월 폭정 종지부', url: 'archive_2007_final_verdict.html', keywords: '2007 판결 법원 두청운수 archive final verdict' },
        { type: '아카이브', category: '특집', title: '거지 촌동네가 구걸질인가... 법원, 윤대환 시장 이웃 도시 모독 행정에 철퇴', url: 'archive_2007_legal_battle.html', keywords: '2007 법정 공방 재판 두청운수 archive legal battle' },
        { type: '아카이브', category: '특집', title: '내 노동은 죄가 아니다... 5호선 중단 항의하던 노동자, 공사장서 숨진 채 발견', url: 'archive_2007_line5_tragedy.html', keywords: '2007 5호선 참사 지하철 사고 archive line5 tragedy' },
        { type: '아카이브', category: '특집', title: '노 대통령, 효빈시 참사에 시민 생명을 이권과 바꾸는 자, 공직 자격 없다 격노', url: 'archive_2007_president_rebuke.html', keywords: '2007 대통령 질책 비판 두청운수 archive president rebuke' },
        { type: '아카이브', category: '특집', title: '하얀 가운과 피 묻은 아스팔트... 시청 광장 용역 쇠파이프 난입에 아수라장', url: 'archive_2007_protest_violence.html', keywords: '2007 폭력 시위 마비 시청 archive protest violence' },
        { type: '아카이브', category: '특집', title: '신세계 효빈점장 윤대환 시장은 쓰레기 이하... 터미널 정상화 안 되면 영업 중단', url: 'archive_2007_shinsegae_press.html', keywords: '2007 신세계 언론 보도 가짜뉴스 archive shinsegae press' },
        { type: '아카이브', category: '특집', title: '갈색 제국의 몰락... 두청운수, 면허 취소 및 최종 파산 처리', url: 'archive_2010_doocheong_bankruptcy.html', keywords: '2010 두청운수 부도 파산 파산 archive bankruptcy' },
        { type: '아카이브', category: '특집', title: '상처를 딛고 달린다... 효빈 5호선 전격 개통, 서구-탄성 30분 시대', url: 'archive_2011_line5_opening.html', keywords: '2011 5호선 개통 지하철 빨간색 archive line5 opening' },

        // --- 효빈시 주요 기사 ---
    { type: '기사', category: '오피니언', title: `[오피니언] '1,350원'의 눈물 외면한 중앙 언론, 청년의 내일은 뉴스가 되지 못하는가`, url: '1,350원의 눈물 외면한 중앙 언론, 청년의 내일은 뉴스가 되지 못하는가.html', keywords: `오피니언 1350원의 눈물` },
    { type: '기사', category: '정치', title: `[선택 2025] "심판의 날 밝았다"... 제21대 대선 투표 시작, 효빈시 투표소 '인산인해'`, url: '2025년 대선.html', keywords: `선택 2025 심판의` },
    { type: '기사', category: '사회', title: `[현장] "잃어버린 5년, 마침내 보라색 궤도가 달린다!" 효빈 6호선 전면 개통`, url: '6호선 개통 기사.html', keywords: `현장 잃어버린 5년` },
    { type: '기사', category: '사회', title: `[현장] "몽키스패너가 뚫어낸 시민의 궤도!" 효빈 8호선 전면 개통... 남구 교통 혁명 시작`, url: '8호선 개통 기사.html', keywords: `현장 몽키스패너가 뚫어낸` },
    { type: '기사', category: '정치', title: `[정치] "우리 동네도 지나갑니다만?" 고정민, 8호선 딴지 건 우신면에 '노선도 팩폭'`, url: '8호선 예산 삭감 논란 기사.html', keywords: `정치 우리 동네도` },
    { type: '기사', category: '기타', title: `"갈색 벽에 막힌 골든타임"... 14세 소년 등 시민 2명 도로 위에서 숨져`, url: 'archive_2007_brown_winter.html', keywords: `갈색 벽에 막힌` },
    { type: '기사', category: '행정실록', title: `"상고를 기각한다"... 대법원, 윤대환 시장 '당선무효형' 확정... 1년 10개월 폭정 종지부`, url: 'archive_2007_final_verdict.html', keywords: `상고를 기각한다 대법원` },
    { type: '기사', category: '기타', title: `"거지 촌동네가 구걸질인가"... 법원, 윤대환 시장 '이웃 도시 모독' 행정에 철퇴`, url: 'archive_2007_legal_battle.html', keywords: `거지 촌동네가 구걸질인가` },
    { type: '기사', category: '기타', title: `"내 노동은 죄가 아니다"... 5호선 중단 항의하던 노동자, 공사장서 숨진 채 발견`, url: 'archive_2007_line5_tragedy.html', keywords: `내 노동은 죄가` },
    { type: '기사', category: '정치', title: `노 대통령, 효빈시 참사에 "시민 생명을 이권과 바꾸는 자, 공직 자격 없다" 격노`, url: 'archive_2007_president_rebuke.html', keywords: `노 대통령 효빈시` },
    { type: '기사', category: '기타', title: `하얀 가운과 피 묻은 아스팔트... 시청 광장 '용역 쇠파이프' 난입에 아수라장`, url: 'archive_2007_protest_violence.html', keywords: `하얀 가운과 피` },
    { type: '기사', category: '경제시평', title: `신세계 효빈점장 "윤대환 시장은 쓰레기 이하... 터미널 정상화 안 되면 영업 중단"`, url: 'archive_2007_shinsegae_press.html', keywords: `신세계 효빈점장 윤대환` },
    { type: '기사', category: '기타', title: `'갈색 제국'의 몰락... 두청운수, 면허 취소 및 최종 파산 처리`, url: 'archive_2010_doocheong_bankruptcy.html', keywords: `갈색 제국의 몰락` },
    { type: '기사', category: '기타', title: `"상처를 딛고 달린다"... 효빈 5호선 전격 개통, 서구-탄성 30분 시대`, url: 'archive_2011_line5_opening.html', keywords: `상처를 딛고 달린다` },
    { type: '기사', category: '효빈일보 뉴스', title: `{{ article.title }}`, url: 'article_template.html', keywords: `articletitle` },
    { type: '기사', category: '문화', title: `효빈일보 - 생활/문화`, url: 'culture.html', keywords: `효빈일보 생활문화` },
    { type: '기사', category: '경제', title: `효빈일보 - 경제`, url: 'economy.html', keywords: `효빈일보 경제` },
    { type: '기사', category: '사회', title: `[속보] 윤재훈 '징역 6월' 실형 선고... 박효빈 향해 "죽여버리겠다" 욕설 난동`, url: 'hyobin_ilbo_court_ruling.html', keywords: `속보 윤재훈 징역` },
    { type: '기사', category: '정치', title: `[6.2 선거] 효빈은 '파란 물결'... 김성민·박효빈 70%대 압승, 與 윤재훈 4.8% '충격의 3등'`, url: 'hyobin_ilbo_election.html', keywords: `62 선거 효빈은` },
    { type: '기사', category: '22대 총선', title: `[22대 총선] "철도 건드리면 죽는다"... 사면받은 '빌런'들과 발목 잡은 '텃밭'의 처참한 궤멸`, url: 'hyobin_ilbo_election_2024.html', keywords: `22대 총선 철도` },
    { type: '기사', category: '정치', title: `[8.15 특사] 尹, 윤재훈·주민우 전격 사면... "4.8%는 부정선거, 억울한 옥살이 풀어줘야"`, url: 'hyobin_ilbo_pardon_2023.html', keywords: `815 특사 尹` },
    { type: '기사', category: '정치', title: `효빈일보 - 진실을 향한 정직한 눈`, url: 'index.html', keywords: `효빈일보 진실을 향한` },
    { type: '기사', category: 'IT', title: `효빈일보 - IT/과학`, url: 'it.html', keywords: `효빈일보 IT과학` },
    { type: '기사', category: 'IT/과학', title: `[통신] 효빈시, 국내 최초 '6G 시범 서비스' 대상지 선정`, url: 'news_6g_pilot.html', keywords: `통신 효빈시 국내` },
    { type: '기사', category: 'IT/과학', title: `[의료] 효빈대병원, AI 진단 시스템 '닥터 왓슨' 도입... 오진율 줄인다`, url: 'news_ai_hospital.html', keywords: `의료 효빈대병원 AI` },
    { type: '기사', category: '경제', title: `[산업·기획] 정부, 효빈시 '글로벌 애니메이션 특구' 추가 지정 초읽기... "K-콘텐츠의 새로운 심장"`, url: 'news_animation_hub.html', keywords: `산업기획 정부 효빈시` },
    { type: '기사', category: '기타', title: `효빈일보 - 기사 상세`, url: 'news_article.html', keywords: `효빈일보 기사 상세` },
    { type: '기사', category: '정치', title: `감사원, '부자 동반 출소' 윤대환 집행부 정조준... "조직적 비호 정황 포착"`, url: 'news_audit_yoon.html', keywords: `감사원 부자 동반` },
    { type: '기사', category: 'IT/과학', title: `[모빌리티] 운전대 없는 버스가 온다... 효빈테크노밸리 자율주행 셔틀 운행 개시`, url: 'news_autonomous_bus.html', keywords: `모빌리티 운전대 없는` },
    { type: '기사', category: '생활/문화', title: `"이 빵 먹으려고 부산에서 왔어요"... 사능동 빵지순례 장사진`, url: 'news_bakery_tour.html', keywords: `이 빵 먹으려고` },
    { type: '기사', category: 'IT/과학', title: `[의료] 약산시 바이오 클러스터, 차세대 항암 신약 개발 '청신호'`, url: 'news_bio_cluster.html', keywords: `의료 약산시 바이오` },
    { type: '기사', category: '사회', title: `"덕질도 복지다"... 박효빈 시장, 청소년 문화지원 '블루버드 정책' 전격 시행`, url: 'news_bluebird_policy_2023.html', keywords: `덕질도 복지다 박효빈` },
    { type: '기사', category: '복지/교육', title: `"가난해도 덕질할 권리 있다"... 효빈시 '블루버드 정책'에 청소년 환호`, url: 'news_bluebird_welfare.html', keywords: `가난해도 덕질할 권리` },
    { type: '기사', category: '정치', title: `대통령, 박효빈 시장 '빵 테러' 사건에 "민주주의 파괴 행위... 엄중 처벌" 지시`, url: 'news_blue_house.html', keywords: `대통령 박효빈 시장` },
    { type: '기사', category: '경제', title: `[속보] 한국은행, 기준금리 연 3.25%로 전격 인하... 3년 2개월 만에 '피벗' 단행`, url: 'news_bok_rate_cut.html', keywords: `속보 한국은행 기준금리` },
    { type: '기사', category: '문화/출판', title: `[신간] '효빈 도시철도의 역사'... 철도 동호인 필독서 등극`, url: 'news_book_release.html', keywords: `신간 효빈 도시철도의` },
    { type: '기사', category: '사회', title: `[현장] "똥재훈 사건의 그곳"... 효빈터미널, 전국 최초 '래핑버스 성지' 등극`, url: 'news_bus_terminal.html', keywords: `현장 똥재훈 사건의` },
    { type: '기사', category: '기타', title: `"아버지가 못다 만든 빨간 철길, 이제 제가 데이터로 수호합니다"`, url: 'news_choi_daughter_success.html', keywords: `아버지가 못다 만든` },
    { type: '기사', category: '사회', title: `[속보] 조선일보, 1면 톱으로 사과문 게재... "안다야 여사 인권 유린, 뼈저리게 반성"`, url: 'news_chosun_apology.html', keywords: `속보 조선일보 1면` },
    { type: '기사', category: '미디어', title: `[미디어] 조선일보 영문판에도 '정정 보도'... 국제적 망신 자초`, url: 'news_chosun_english.html', keywords: `미디어 조선일보 영문판에도` },
    { type: '기사', category: '사회', title: `"이것은 증오범죄"... 효빈시, 조선일보 '인종차별 허위보도'에 전면전 선포`, url: 'news_chosun_fake.html', keywords: `이것은 증오범죄 효빈시` },
    { type: '기사', category: '기타', title: `"머물다 간 자리도 아름답게"... HAF 폐막 후 쓰레기 '0' 기록`, url: 'news_clean_campaign.html', keywords: `머물다 간 자리도` },
    { type: '기사', category: '오피니언', title: `[데스크 칼럼] 언론의 자유는 '거짓말 면허'가 아니다`, url: 'news_column_fake_news.html', keywords: `데스크 칼럼 언론의` },
    { type: '기사', category: '오피니언', title: `[효빈시평] '덕질'이 밥 먹여주냐고? 네, 아주 잘 먹여줍니다`, url: 'news_column_otaku.html', keywords: `효빈시평 덕질이 밥` },
    { type: '기사', category: '오피니언', title: `[기자수첩] 케손시티에서 날아온 '형제애', 그리고 우리의 부끄러움`, url: 'news_column_quezon.html', keywords: `기자수첩 케손시티에서 날아온` },
    { type: '기사', category: '정치', title: `[비평] 조병진 의원 "협치 실종" 발언 역풍... "잘하는 시정에 억지 프레임"`, url: 'news_council_member_criticism.html', keywords: `비평 조병진 의원` },
    { type: '기사', category: 'IT/과학', title: `[보안] "해킹 꼼짝 마"... 시청 전산망 '블록체인 보안' 구축 완료`, url: 'news_cyber_security.html', keywords: `보안 해킹 꼼짝` },
    { type: '기사', category: '문화', title: `"여기가 탕쿠쿠의 성지"... 당가동 디저트 거리, K-관광 100선 선정`, url: 'news_dangga_dessert.html', keywords: `여기가 탕쿠쿠의 성지` },
    { type: '기사', category: '사회', title: `"내 최애가 도시를 살렸다"... 당가동 '파스텔 블루' 기적의 전말`, url: 'news_dangga_revival.html', keywords: `내 최애가 도시를` },
    { type: '기사', category: '정치', title: `[D-9] '28초의 포효'가 판 뒤집었다... 박효빈 75.1% 독주, 윤재훈 한 자릿수 추락`, url: 'news_debate_aftermath.html', keywords: `D9 28초의 포효가` },
    { type: '기사', category: '충격', title: `[충격] "당신이 감히!"... 박효빈, 윤재훈 패륜 막말에 생방송 도중 '대폭발'`, url: 'news_debate_broadcast_accident.html', keywords: `충격 당신이 감히` },
    { type: '기사', category: '오피니언', title: `[사설] 혐오가 빵을 짓밟을 때, 시민은 '인간의 품격'을 증명했다`, url: 'news_editorial_bread.html', keywords: `사설 혐오가 빵을` },
    { type: '기사', category: '교육/사회', title: `[교육] 효빈 애니메이션 특성화고 경쟁률 15:1... 역대 최고`, url: 'news_education_highschool.html', keywords: `교육 효빈 애니메이션` },
    { type: '기사', category: '기타', title: `"2.2%의 심판"... '오타쿠 비하' 윤재훈, 창전갑서 처참한 몰락`, url: 'news_election_changjeon.html', keywords: `22의 심판 오타쿠` },
    { type: '기사', category: '정치', title: `'28초의 승부'가 가른 운명... 박효빈 77.9% 압승, 윤재훈 4.8% 몰락`, url: 'news_election_poll.html', keywords: `28초의 승부가 가른` },
    { type: '기사', category: '정치', title: `"이름이 곧 도시"... '효빈 그 자체' 박효빈, 77.9% 역대 최다 득표 '압승'`, url: 'news_election_result_2022.html', keywords: `이름이 곧 도시` },
    { type: '기사', category: '사회', title: `"그분은 경제학보다 인성 교육이 필요해"... 日 성우, '빵 난동'에 우아한 일침`, url: 'news_emma_bread.html', keywords: `그분은 경제학보다 인성` },
    { type: '기사', category: '기타', title: `이재명 대통령, 가짜뉴스 선전포고 "민주주의 파괴하는 독버섯... 무관용 엄벌"`, url: 'news_fake_news_punishment.html', keywords: `이재명 대통령 가짜뉴스` },
    { type: '기사', category: '패션', title: `[패션] 올여름 효빈시 강타한 '캐릭터 티셔츠' 룩... "일코해제 붐"`, url: 'news_fashion_trend.html', keywords: `패션 올여름 효빈시` },
    { type: '기사', category: '세계', title: `필리핀 방송사, 효빈시 '뚝배기 폭행' 대서특필... "한국의 인종차별 민낯 드러나"`, url: 'news_foreign_press.html', keywords: `필리핀 방송사 효빈시` },
    { type: '기사', category: 'IT/과학', title: `[게임] "제2의 넥슨 꿈꾼다"... 효빈 게임특구에 스타트업 50곳 둥지`, url: 'news_game_industry.html', keywords: `게임 제2의 넥슨` },
    { type: '기사', category: '사회', title: `"여권이 제 보물 1호예요"... '글로벌 쿠쿠 원정대' 1기, 꿈을 안고 귀국`, url: 'news_global_kuku_expedition.html', keywords: `여권이 제 보물` },
    { type: '기사', category: '문화', title: `[현장] "아시아의 아키하바라"... 제16회 HAF 개막, 10만 인파에 효빈시 '들썩'`, url: 'news_haf.html', keywords: `현장 아시아의 아키하바라` },
    { type: '기사', category: '문화', title: `"현실이야 만화야?"... 효빈시 수놓은 HAF 코스프레 퍼레이드`, url: 'news_haf_cosplay.html', keywords: `현실이야 만화야 효빈시` },
    { type: '기사', category: '경제', title: `[경제] "HAF 2025가 남긴 기적"... 효빈시, 애니메이션으로 먹고 산다`, url: 'news_haf_economy.html', keywords: `경제 HAF 2025가` },
    { type: '기사', category: '문화', title: `"도시 전체가 덕질 성지"... 역대 최대 'HAF 2025' 화려한 개막`, url: 'news_haf_opening.html', keywords: `도시 전체가 덕질` },
    { type: '기사', category: '문화', title: `"이게 진짜 성지순례"... HAF 2025, 韓日 성우 18인 효빈 도시철도 기습 방문에 '대혼란'`, url: 'news_haf_seiyu_visit.html', keywords: `이게 진짜 성지순례` },
    { type: '기사', category: '경제', title: `"평일인데 줄 섰어요"... HAF '낙수 효과', 골목상권 심폐소생`, url: 'news_haf_weekday_economy.html', keywords: `평일인데 줄 섰어요` },
    { type: '기사', category: '사회', title: `"단맛은 인권이다"... 저소득층 아동 위한 '해피 쿠쿠 카드' 화제`, url: 'news_happy_kuku_card.html', keywords: `단맛은 인권이다 저소득층` },
    { type: '기사', category: '사회', title: `[의료] 대학병원 노사 협상 타결... "축제 기간 의료 공백 없다"`, url: 'news_hospital_strike.html', keywords: `의료 대학병원 노사` },
    { type: '기사', category: '단독', title: `[단독] 효빈시청, 전국 최초 '가짜뉴스 AI 검증 시스템' 가동... 팩트로 철권 통치`, url: 'news_hyobin_cooperation.html', keywords: `단독 효빈시청 전국` },
    { type: '기사', category: '경제', title: `"굿즈 살 땐 필수"... 효빈페이, 서브컬처 성지서 결제액 1위 등극`, url: 'news_hyobin_pay.html', keywords: `굿즈 살 땐` },
    { type: '기사', category: 'IT/과학', title: `[핀테크] 효빈페이 대규모 업데이트... "폰만 대면 결제 끝"`, url: 'news_hyobin_pay_nfc.html', keywords: `핀테크 효빈페이 대규모` },
    { type: '기사', category: '세계', title: `[일본] "오타쿠가 시장인 도시가 있다?"... 日 SNS서 효빈시 인기 급상승`, url: 'news_japan_otaku.html', keywords: `일본 오타쿠가 시장인` },
    { type: '기사', category: '국제/경제', title: `[글로벌] "정글 취급하더니 꿀먹벙"... 코레일, 필리핀 마닐라 지하철 운영권 획득`, url: 'news_korail_manila.html', keywords: `글로벌 정글 취급하더니` },
    { type: '기사', category: '인권/법조', title: `혐오 표현엔 '무관용' 원칙... '쿠쿠스 배리어' 조례, 오늘부터 전격 시행`, url: 'news_kukus_barrier.html', keywords: `혐오 표현엔 무관용` },
    { type: '기사', category: '사회', title: `"낡은 패딩 대신 '신상' 입혀주고 싶었다"... 자존감 선물하는 '쿠쿠 클로젯'`, url: 'news_kuku_closet.html', keywords: `낡은 패딩 대신` },
    { type: '기사', category: '교통/안전', title: `[교통/안전] 시장님 출퇴근길 '6호선(보라색)', 안심 귀가 스카우트 배치 강화`, url: 'news_line6_safety.html', keywords: `교통안전 시장님 출퇴근길` },
    { type: '기사', category: '효빈일보 구독 안내', title: `전체 기사 목록`, url: 'news_list.html', keywords: `전체 기사 목록` },
    { type: '기사', category: '기타', title: `효빈일보 - 진실을 향한 정직한 눈`, url: 'news_list_template.html', keywords: `효빈일보 진실을 향한` },
    { type: '기사', category: '세계', title: `"제 굿즈 때문에 다치셨다니..." 성우 Liyuu, 효빈시청 폭행 피해자에 '눈물의 응원'`, url: 'news_liyuu_message.html', keywords: `제 굿즈 때문에` },
    { type: '기사', category: '기타', title: `"총칼로 민심 못 막는다"... 계엄령 선포에 효빈시 '행정 불복종' 선언`, url: 'news_martial_law_hyobin.html', keywords: `총칼로 민심 못` },
    { type: '기사', category: '정치', title: `효빈시의회, '윤대환 방지법' 만장일치 통과... "부패 고리 끊는다"`, url: 'news_mayor_act.html', keywords: `효빈시의회 윤대환 방지법` },
    { type: '기사', category: '기타', title: `"한 사람의 광기가 수만 명의 꿈을 짓밟았다"... 박효빈 시장, 성우 방문 무산에 '격노'`, url: 'news_mayor_anger_watase.html', keywords: `한 사람의 광기가` },
    { type: '기사', category: '행정', title: `박효빈 시장 지지율 78% 고공행진... "소통 행정 통했다"`, url: 'news_mayor_approval.html', keywords: `박효빈 시장 지지율` },
    { type: '기사', category: '정치', title: `"저뿐만이 아닌, 여러분 모두의 '효빈'으로"... 박효빈 시장 취임`, url: 'news_mayor_inauguration.html', keywords: `저뿐만이 아닌 여러분` },
    { type: '기사', category: 'IT/과학', title: `[게임] "집에서도 성지순례"... 효빈시, HAF 메타버스 플랫폼 전 세계 오픈`, url: 'news_metaverse_haf.html', keywords: `게임 집에서도 성지순례` },
    { type: '기사', category: '경제', title: `효빈 도시철도 26년 연속 흑자 신화... "캐릭터 도입이 신의 한 수"`, url: 'news_metro_surplus.html', keywords: `효빈 도시철도 26년` },
    { type: '기사', category: '문화', title: `"코난이 부정승차 잡고, 아냐가 결재 올린다"... 효빈 도시철도 성우 '드림팀' 화제`, url: 'news_metro_voice_actors.html', keywords: `코난이 부정승차 잡고` },
    { type: '기사', category: '기획', title: `[기획] 효빈동신도시 착공 10년, 미래형 스마트 시티의 윤곽이 보인다`, url: 'news_newtown.html', keywords: `기획 효빈동신도시 착공` },
    { type: '기사', category: '기타', title: `효빈일보 - 기사 상세`, url: 'news_nico.html', keywords: `효빈일보 기사 상세` },
    { type: '기사', category: '데스크 칼럼', title: `[데스크 칼럼] '잡종'이라 짖던 펜, 시민의 정의 앞에 부러지다`, url: 'news_opinion.html', keywords: `데스크 칼럼 잡종이라` },
    { type: '기사', category: '오피니언', title: `[시론] 윤대환 방지법, '이해충돌'의 고리를 끊어야 산다`, url: 'news_opinion_1.html', keywords: `시론 윤대환 방지법` },
    { type: '기사', category: '오피니언', title: `[경제노트] HAF 메타버스, 가상 공간에서 창출되는 실물 가치`, url: 'news_opinion_2.html', keywords: `경제노트 HAF 메타버스` },
    { type: '기사', category: '오피니언', title: `[문화산책] '니나관' 20층에서 바라본 효빈의 스카이라인`, url: 'news_opinion_3.html', keywords: `문화산책 니나관 20층에서` },
    { type: '기사', category: '오피니언', title: `[발언대] '4호선(주황색)' 연장, 약산시 교통 혁명의 시작`, url: 'news_opinion_4.html', keywords: `발언대 4호선주황색 연장` },
    { type: '기사', category: '정치', title: `구태 청산 외치는 야당 비대위... "윤대환 그림자 지우기 총력"`, url: 'news_opposition_party.html', keywords: `구태 청산 외치는` },
    { type: '기사', category: '문화/예술', title: `[공연] "지브리부터 마코토까지"... 효빈 필하모닉 '애니송의 밤' 1분 만에 매진`, url: 'news_orchestra.html', keywords: `공연 지브리부터 마코토까지` },
    { type: '기사', category: '기타', title: `"법치주의는 죽었다"... '부정선거' 궤변 수용한 윤 대통령, 윤재훈 사면 강행`, url: 'news_pardon_criticism.html', keywords: `법치주의는 죽었다 부정선거` },
    { type: '기사', category: '정치', title: `박효빈 "거친 모습 죄송... 그러나 혐오엔 침묵 않겠다" 대국민 사과`, url: 'news_park_apology.html', keywords: `박효빈 거친 모습` },
    { type: '기사', category: '정치', title: `[기획] "비 새는 단칸방의 오타쿠, 효빈을 구하다"... 박효빈 시장의 '눈물 젖은 빵'`, url: 'news_park_past.html', keywords: `기획 비 새는` },
    { type: '기사', category: '국제', title: `[특파원] "Don't touch our blood"... 필리핀 '피노이 프라이드', 윤재훈을 심판하다`, url: 'news_philippines.html', keywords: `특파원 Dont touch` },
    { type: '기사', category: '국제/외교', title: `[외교] 주한 필리핀 대사, 효빈시청 방문... "박 시장은 우리의 자부심"`, url: 'news_philippines_embassy.html', keywords: `외교 주한 필리핀` },
    { type: '기사', category: '기타', title: `효빈경찰청, HAF 암표상 특별 단속... 20대 일당 전격 검거`, url: 'news_police_scalper.html', keywords: `효빈경찰청 HAF 암표상` },
    { type: '기사', category: '세계', title: `"26년 우정, 이제는 혈맹이다"... 케손시티 시장, 효빈시 직접 찾아 '특수 파트너십' 선포`, url: 'news_quezon_city.html', keywords: `26년 우정 이제는` },
    { type: '기사', category: '정치/국제', title: `[속보] 효빈시-케손시티, 다음 달 '무역·문화 교류 MOU' 체결 합의`, url: 'news_quezon_mou.html', keywords: `속보 효빈시케손시티 다음` },
    { type: '기사', category: '오피니언', title: `[독자투고] 트램 타는 엠마 빵을 먹으며: 공존의 맛`, url: 'news_reader_essay.html', keywords: `독자투고 트램 타는` },
    { type: '기사', category: '경제', title: `[부동산] "성지가 내 집 앞에?"... 탄성군 도변읍, 외지인 매수세 폭발`, url: 'news_realestate_trend.html', keywords: `부동산 성지가 내` },
    { type: '기사', category: '스쿨아이돌힐스 이사청소', title: `[경제] "강남 비켜, 이젠 효빈이다"... '스쿨아이돌힐스' 청약 경쟁률 5000:1 폭발`, url: 'news_school_idol_hills.html', keywords: `경제 강남 비켜` },
    { type: '기사', category: 'IT/과학', title: `[교통] 효빈시, AI 신호등으로 '출퇴근 전쟁' 잡았다... 교통 혼잡 30% 감소`, url: 'news_smart_city.html', keywords: `교통 효빈시 AI` },
    { type: '기사', category: 'IT/과학', title: `[우주] 한국형 발사체 핵심 부품, 효빈 산단서 품었다... 우주 강국 도약 '엔진 점화'`, url: 'news_space_rocket.html', keywords: `우주 한국형 발사체` },
    { type: '기사', category: '정치', title: `[정책] 빈효선 광역전철 2단계 예산 확정... "교통 소외지역 해소 기대"`, url: 'news_subway_budget.html', keywords: `정책 빈효선 광역전철` },
    { type: '기사', category: '여행', title: `[여행] 주말엔 3호선(노란색) 타고 '철도박물관' 나들이 어때요?`, url: 'news_subway_tour.html', keywords: `여행 주말엔 3호선노란색` },
    { type: '기사', category: '건강/생활', title: `"두꺼운 코스프레 의상 위험해요"... 효빈소방서, 온열질환 예방 캠페인`, url: 'news_summer_health.html', keywords: `두꺼운 코스프레 의상` },
    { type: '기사', category: '기타', title: `효빈일보 - 기사 템플릿`, url: 'news_template.html', keywords: `효빈일보 기사 템플릿` },
    { type: '기사', category: '경제', title: `'HAF PASS' 트래블 패스포트, 중고거래서 웃돈 거래 기승... 市 "전량 무효화" 강력 경고`, url: 'news_tour_pass.html', keywords: `HAF PASS 트래블` },
    { type: '기사', category: '교통', title: `[교통] 주말 HAF 퍼레이드로 고송대로 일부 통제... 2호선(초록색) 우회 안내`, url: 'news_traffic_control.html', keywords: `교통 주말 HAF` },
    { type: '기사', category: '사회', title: `[현장] "메카쿠시테!"... 효빈대생 3천 명, '인간 장벽'으로 윤재훈 난동 막았다`, url: 'news_univ.html', keywords: `현장 메카쿠시테 효빈대생` },
    { type: '기사', category: '사회', title: `효빈대, 덕북 약산시에 제2병원 '약산병원' 착공... "의료 공백 메운다"`, url: 'news_univ_hospital.html', keywords: `효빈대 덕북 약산시에` },
    { type: '기사', category: '사회', title: `"결식아동 빵에 침 뱉고 사가라 마유 폭행 시도"... 효빈대생 3천 명 '철벽 방어'`, url: 'news_univ_human_shield.html', keywords: `결식아동 빵에 침` },
    { type: '기사', category: '기타', title: `"계엄령이 뺏어간 무츠미"... 성우 와타세 유즈키, 효빈 방문 전격 취소`, url: 'news_watase_cancellation.html', keywords: `계엄령이 뺏어간 무츠미` },
    { type: '기사', category: '사회', title: `[날씨] 효빈시 전역 폭염경보... "야외 코스프레 시 온열질환 주의"`, url: 'news_weather_heat.html', keywords: `날씨 효빈시 전역` },
    { type: '기사', category: '사회/문화', title: `[날씨] 이번 주말 대체로 맑음... 봄맞이 야외 코스프레 촬영 '최적'`, url: 'news_weather_weekend.html', keywords: `날씨 이번 주말` },
    { type: '기사', category: '기타', title: `"1년 전의 눈물, 환호로 바뀌었다"... 와타세·니시오, 효빈시 'v2' 행사 성료`, url: 'news_winter_preview_v2.html', keywords: `1년 전의 눈물` },
    { type: '기사', category: '경제', title: `[기업] 두청운수 폐업 16년, 그 자리에 핀 '팬덤 꽃'... 칠양여객 흑자 10년째 유지`, url: 'news_wrapping_bus.html', keywords: `기업 두청운수 폐업` },
    { type: '기사', category: '포토', title: `[포토] 불 밝힌 약산시... 덕북의 새로운 랜드마크로 우뚝`, url: 'news_yaksan_city.html', keywords: `포토 불 밝힌` },
    { type: '기사', category: '정치', title: `"4.8%의 굴욕"... 윤재훈, 선거비 전액 미보전 '파산 위기'`, url: 'news_yoon_defeat_2022.html', keywords: `48의 굴욕 윤재훈` },
    { type: '기사', category: '정치', title: `"혐오의 시대가 끝났다"... 윤석열 탄핵 소식에 효빈시 '축제 분위기'`, url: 'news_yoon_impeachment.html', keywords: `혐오의 시대가 끝났다` },
    { type: '기사', category: '사회', title: `[사회] 윤재훈, 구치소 내 필리핀계 수감자에게 '망고 구걸' 굴욕`, url: 'news_yoon_jail.html', keywords: `사회 윤재훈 구치소` },
    { type: '기사', category: '정치', title: `"4.8% 득표가 조작?"... 尹, 윤재훈 특별사면 강행에 효빈시 '술렁'`, url: 'news_yoon_pardon_2023.html', keywords: `48 득표가 조작` },
    { type: '기사', category: '기타', title: `효빈일보 - 오피니언`, url: 'opinion.html', keywords: `효빈일보 오피니언` },
    { type: '기사', category: '기타', title: `효빈일보 - 포토`, url: 'photo.html', keywords: `효빈일보 포토` },
    { type: '기사', category: '정치', title: `효빈일보 - 정치`, url: 'politics.html', keywords: `효빈일보 정치` },
    { type: '기사', category: '사회', title: `효빈일보 - 사회`, url: 'society.html', keywords: `효빈일보 사회` },
    { type: '기사', category: '세계', title: `효빈일보 - 세계`, url: 'world.html', keywords: `효빈일보 세계` },
    { type: '기사', category: '기획', title: `[기획] 강서구의 교훈 잊은 용산, 효빈에서 '확인사살' 당하다... 사면 정치가 부른 참극`, url: '[기획] 강서구의 교훈 잊은 용산, 효빈에서 확인사살 당하다.html', keywords: `기획 강서구의 교훈` },
    { type: '기사', category: '정치', title: `[단독여론조사] 박효빈 74.8% '압도적 1위'... 유성민 14.5% 돌풍 속 빌런들의 '처참한 성적표'`, url: '[단독] 2026 효빈시장 선거 여론조사.html', keywords: `단독여론조사 박효빈 748` },
    { type: '기사', category: '효빈시 시민 연대', title: `[단독] 윤석열 구속 취소... 지귀연 판사 "내란 혐의 다툼 여지"... '룸살롱 판결' 논란`, url: '[단독] 윤석열 구속 취소.html', keywords: `단독 윤석열 구속` },
    { type: '기사', category: '정치', title: `[단독] '효빈 보수의 양심' 부서원, 국민의힘 탈당... "계엄 옹호하는 당에 미래 없다"`, url: '[단독] 효빈 보수의 양심 부서원, 국민의힘 탈당.html', keywords: `단독 효빈 보수의` },
    { type: '기사', category: '정치', title: `[선택 2025] 이재명, 제21대 대통령 당선... "국민이 이겼다, 다시 뛰는 대한민국"`, url: '[선택 2025] 이재명, 제21대 대통령 당선.html', keywords: `선택 2025 이재명` },
    { type: '기사', category: '속보', title: `[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 "반란군을 체포하라"`, url: '[속보] 6시간의 악몽 끝, 민주주의 승리... 계엄 해제에 효빈 시민들 반란군을 체포하라.html', keywords: `속보 6시간의 악몽` },
    { type: '기사', category: '속보', title: `[속보] 국회, 비상계엄 해제 요구안 가결... '190명 전원 찬성' 헌정사상 최단기 종료`, url: '[속보] 국회, 비상계엄 해제 요구안 가결... 190명 전원 찬성 헌정사상 최단기 종료 - 효빈일보.html', keywords: `속보 국회 비상계엄` },
    { type: '기사', category: '속보', title: `[속보] 박효빈 시장 "계엄 포고령 거부... 시민 지키기 위해 공수부대와 맞서겠다"`, url: '[속보] 박효빈 시장 계엄 포고령 거부... 시민 지키기 위해 공수부대와 맞서겠다 - 효빈일보.html', keywords: `속보 박효빈 시장` },
    { type: '기사', category: '속보', title: `[속보] 윤석열 대통령 탄핵안 가결... '반란 수괴' 심판한 국회, 직무 즉시 정지`, url: '[속보] 윤석열 대통령 탄핵안 가결... 반란 수괴 심판한 국회, 직무 즉시 정지.html', keywords: `속보 윤석열 대통령` },
    { type: '기사', category: '사회', title: `[속보] 윤석열 전 대통령 구속... 관저서 5시간 버티다 '강제 연행' 추태`, url: '[속보] 윤석열 전 대통령 구속.html', keywords: `속보 윤석열 전` },
    { type: '기사', category: '사회', title: `[속보] 윤석열 전 대통령 재구속... 법원 "증거 인멸 우려, 사안 엄중" 4개월 만에 재수감`, url: '[속보] 윤석열 전 대통령 재구속.html', keywords: `속보 윤석열 전` },
    { type: '기사', category: '속보', title: `[속보] 탄핵안 '정족수 미달' 자동 폐기... 여당 의원들 집단 도주에 국회 '아수라장'`, url: '[속보] 탄핵안 정족수 미달 자동 폐기... 여당 의원들 집단 도주에 국회 아수라장.html', keywords: `속보 탄핵안 정족수` },
    { type: '기사', category: '정치', title: `[속보] 헌재, 윤석열 탄핵 인용... 재판관 8인 전원 일치 "헌법 수호 의지 없어" 파면`, url: '[속보] 헌재, 윤석열 탄핵 인용.html', keywords: `속보 헌재 윤석열` },
    { type: '기사', category: '정치', title: `[여론조사] 박효빈 효빈시장, 지지율 82.4% '고공행진'... 전국 시도지사 압도적 1위`, url: '[여론조사] 박효빈 효빈시장, 지지율 82.4퍼센트 고공행진.html', keywords: `여론조사 박효빈 효빈시장` },
    { type: '기사', category: '정치', title: `[지선 D-60] '어차피 시장은 박효빈?'... 2026 효빈시장 선거, 5파전 대진표 완성`, url: '[지선 D-60] 2026 효빈시장 선거 대진표.html', keywords: `지선 D60 어차피` },
    { type: '기사', category: '정치', title: `[현장] 이재명 대통령, 취임 후 첫 효빈 방문... "효빈시 모델, 대한민국 표준 만들겠다"`, url: '[현장] 이재명 대통령, 취임 후 첫 효빈 방문.html', keywords: `현장 이재명 대통령` },
    { type: '기사', category: '정치', title: `[현장] 고시원 쫓겨나 길거리로... 0.8% 지총민, 캐리어 끌고 눈물의 출마 선언`, url: '[현장] 지총민 출마선언.html', keywords: `현장 고시원 쫓겨나` },
    { type: '기사', category: '정치', title: `[속보] 효빈시장 개표 100%... 윤대환, 단 '3표' 차이로 기적의 당선 확정`, url: '[효빈일보 아카이브] 2006년 효빈시장 당선 확정 보도.html', keywords: `속보 효빈시장 개표` },
    { type: '기사', category: '정치', title: `[지선 출구조사] 효빈시장 '초접전'... 尹 25.3% vs 朴 25.1%, 운명 가를 '피 말리는 밤'`, url: '[효빈일보 아카이브] 2006년 효빈시장 출구조사 보도.html', keywords: `지선 출구조사 효빈시장` },
    { type: '기사', category: '사회', title: `"골든타임 막은 갈색 버스의 벽"... 尹 '교통 효율화'가 앗아간 두 생명`, url: '[효빈일보 아카이브] 2007년 구급차 고립 사망 사건 보도.html', keywords: `골든타임 막은 갈색` },
    { type: '기사', category: '정치', title: `"지총민 지적이 맞다, 내 탓이오"... 박현만, 남 탓 대신 '대인(大人)의 사과'`, url: '[효빈일보 아카이브] 박현만 전 시장 대국민 사과 보도.html', keywords: `지총민 지적이 맞다` },
    { type: '기사', category: '정치', title: `"제 욕심이 철길을 끊었습니다" 서무련, 빗속 108배 사죄... '3표 비극' 짊어지다`, url: '[효빈일보 아카이브] 서무련 후보 눈물의 빗속 사죄 보도.html', keywords: `제 욕심이 철길을` },
    { type: '기사', category: '사회', title: `"환자가 원래 위독했던 탓"... 윤대환, 구급차 참사 유가족 앞 '악마의 망언'`, url: '[효빈일보 아카이브] 윤대환 구급차 참사 망언 보도.html', keywords: `환자가 원래 위독했던` },
    { type: '기사', category: '사회', title: `"감히 내게 악플을?" 윤대환, 구급차 참사 비판 시민 무더기 고소... 시청 지하실서 초등학생 아들이 조롱까지`, url: '[효빈일보 아카이브] 윤대환 시민 고소 및 지하실 협박 사건 보도.html', keywords: `감히 내게 악플을` },
    { type: '기사', category: '정치', title: `"내가 아니라 무능한 박현만 탓"... 지총민, 적반하장 기자회견에 효빈 민심 '폭발'`, url: '[효빈일보 아카이브] 지총민 적반하장 기자회견 보도.html', keywords: `내가 아니라 무능한` },
    { type: '기사', category: '정치', title: `단 3표가 가른 효빈의 운명... '사죄' 택한 서무련과 '남 탓' 지총민의 엇갈린 최후`, url: '[효빈일보] 2006년 선거 3표 차 비극과 두 무소속 후보의 엇갈린 최후.html', keywords: `단 3표가 가른` },
    { type: '기사', category: '정치', title: `박효빈 시장, "청년 시드머니 150만 원 뺏은 건 합법적 강도"... 尹 정부 직격`, url: '[효빈일보] 박효빈 시장 합법적 강도 비판.html', keywords: `박효빈 시장 청년` },
    { type: '기사', category: '정치', title: `물가는 뛰는데 청년 시급은 '역주행'... 尹 정부, 대학생 멘토링 예산 '꼼수 삭감' 실태`, url: '[효빈일보] 윤석열 정부 대학생 멘토링 시급 삭감 실태 단독 보도.html', keywords: `물가는 뛰는데 청년` },
    { type: '기사', category: '정치', title: `전북 광역철도 '대광법' 가로막은 권영진... "제주는 어쩌고" 황당 논리 도마 위`, url: '[효빈일보] 전북 광역철도 대광법 반대 권영진 비판 기사.html', keywords: `전북 광역철도 대광법` },
    { type: '기사', category: '사회/IT', title: `"제가 미쳤었나 봅니다" 제미나이, 박효빈 시장에 공식 사과... 구글코리아 시청 '진땀' 방문`, url: '[효빈일보] 제미나이 공식 사과 보도.html', keywords: `제가 미쳤었나 봅니다` },
    { type: '기사', category: '사회/IT', title: `"청년 시장 그려달랬더니 웬..." AI 제미나이, 박효빈 시장 취임식에 '윤석열 사진' 뱉어내 대참사`, url: '[효빈일보] 제미나이 오인 사건 보도.html', keywords: `청년 시장 그려달랬더니` },
    { type: '기사', category: '사회', title: `[현장] "철도 망치는 적폐 청산!" 효빈교통공사, 도시공사에서 전격 분사... 홀로서기 시작`, url: '교통공사 분사 기사.html', keywords: `현장 철도 망치는` },
    { type: '기사', category: '정치', title: `대선 D-15… 김상욱, 더불어민주당 전격 입당 "이재명 후보 지지"`, url: '김상욱 민주당 입당 속보 (2025년 5월 19일).html', keywords: `대선 D15 김상욱` },
    { type: '기사', category: '효빈 정치아카데미', title: `조기 대선 D-26... 김상욱 의원, 국민의힘 전격 탈당 "기득권 보수와 결별"`, url: '김상욱 탈당 속보 (2025년 5월 8일).html', keywords: `조기 대선 D26` },
    { type: '기사', category: '정치', title: `[현장] "오타쿠의 질주는 멈추지 않는다!" 박효빈 시장, 압도적 지지율 속 재선 출마 공식 선언`, url: '박효빈 재선 출마선언 기사.html', keywords: `현장 오타쿠의 질주는` },
    { type: '기사', category: '사회', title: `[현장] "거지 동네 망언 딛고 10년 만의 쾌속 질주!" 빈효선 광역전철 1단계 개통`, url: '빈효선 개통 기사.html', keywords: `현장 거지 동네` },
    { type: '기사', category: '정치', title: `[정책] 빈효선 광역전철 2단계 예산 확정... "교통 소외지역 해소 기대"`, url: '빈효선_예산확정_기사.html', keywords: `정책 빈효선 광역전철` },
    { type: '기사', category: '문화', title: `[리뷰] "제작진 단체로 도핑했나?" 효빈메트로 스핀오프 애니 '쁘띠 레일루미네' 첫방부터 대폭발`, url: '쁘띠 레일루미네 방영 기사.html', keywords: `리뷰 제작진 단체로` },
    { type: '기사', category: '사설', title: `[사설] 서울 깍쟁이 언론들은 서진 시민들의 피눈물을 아는가`, url: '서진일보 사설.html', keywords: `사설 서울 깍쟁이` },
    { type: '기사', category: '정치', title: `[부고] "효빈 민주주의의 산증인" 여수원 전 위원장 별세... 주민우 '막말' 논란 파장`, url: '여수원 별세 기사.html', keywords: `부고 효빈 민주주의의` },
    { type: '기사', category: '정치', title: `[현장] "양심이 파쇄기에 갈렸나" 우신면, 8호선 개통식서 계란 맞을 뻔... 시민들 '분노'`, url: '우신면 계란 투척 미수 사건 기사.html', keywords: `현장 양심이 파쇄기에` },
    { type: '기사', category: '경제', title: `[부동산] "조망권 지키려다 집값 폭락?" 8호선 반대 우신면 펜트하우스, 나홀로 하락세`, url: '우신면 펜트하우스 집값 폭락 기사.html', keywords: `부동산 조망권 지키려다` },
    { type: '기사', category: '정치', title: `[현장] "부끄러운 보수 청산하겠다!" 유성민, 15% 돌파 목전 속 무소속 출마 선언`, url: '유성민 출마선언 기사.html', keywords: `현장 부끄러운 보수` },
    { type: '기사', category: '속보', title: `[속보] 윤석열 대통령, 비상계엄 선포... "효빈 2.2%는 북한 해킹, 부정선거 명백"`, url: '윤석열 비상계엄 선포, 부정선거 주장.html', keywords: `속보 윤석열 대통령` },
    { type: '기사', category: '효빈일보 팩트체크', title: `[단독] "나 검사 27년 했어!"... 윤석열 '속옷 저항' CCTV 공개, 국민들 "눈을 의심했다"`, url: '윤석열 속옷저항.html', keywords: `단독 나 검사` },
    { type: '기사', category: '정치', title: `[현장] "오타쿠 시장 몰아내겠다!" 윤재훈, 장난감 총 들고 효빈시장 출마 선언... 시민들 '싸늘'`, url: '윤재훈 출마선언 기사.html', keywords: `현장 오타쿠 시장` },
    { type: '기사', category: '정치', title: `이재명 대통령 국정 지지율 65% '고공행진'… 국민의힘 19% 출범 이래 '최저'`, url: '이재명 대통령 지지율 속보.html', keywords: `이재명 대통령 국정` },
    { type: '기사', category: '정치', title: `[총선] "빨간 점퍼의 무덤이 된 효빈" 국민의힘 14석 전석 참패... 완벽한 '0석' 굴욕`, url: '제22대 총선 결과 기사.html', keywords: `총선 빨간 점퍼의` },
    { type: '기사', category: '사회', title: `[사회] "안전 핑계로 무능 은폐"… 제미나이 AI, 전문가에게 '109 상담전화' 난사 논란`, url: '제미나이 109 난사 논란.html', keywords: `사회 안전 핑계로` },
    { type: '기사', category: 'IT/과학', title: `[종합] 제미나이 AI, '한바다' 마스코트 비하 발언 논란…"공식 AI가 혐오 발언?"`, url: '제미나이 논란 기사.html', keywords: `종합 제미나이 AI` },
    { type: '기사', category: '정치', title: `[정치] "보이스피싱인 줄 알았다"... 국민의힘 조병진, 여주연 사퇴로 시의원 비례대표 '기적의 승계'`, url: '조병진 승계 기사.html', keywords: `정치 보이스피싱인 줄` },
    { type: '기사', category: '정치', title: `[현장] "제 아내가 미성년자라고요?"... 이한선 여사 '76년생 민증' 전격 공개에 주민우 '정치적 사형 선고'`, url: '주민우 민증 인증 대참사 기사.html', keywords: `현장 제 아내가` },
    { type: '기사', category: '정치', title: `[정치] "술 냄새 나는 의정활동 끝" 주민우 의원, 선거법 위반으로 결국 당선무효... 중·동구 시민들 '환호'`, url: '주민우 의원 당선무효 기사.html', keywords: `정치 술 냄새` },
    { type: '기사', category: '문화', title: `[리뷰] "이게 공기업 홍보물이라고?" 효빈메트로 애니 '철도부!', 첫 방영부터 열도까지 홀렸다`, url: '철도부 1기 방영 기사.html', keywords: `리뷰 이게 공기업` },
    { type: '기사', category: '기타', title: `코스피, 사상 최초 '5,000시대' 활짝 열렸다… 새 정부 부양책·AI 특수 '폭발'`, url: '코스피 5000 돌파 속보 (2026년 1월 27일).html', keywords: `코스피 사상 최초` },
    { type: '기사', category: '기타', title: `인구 2만 읍내에 '3개 노선' 환승역? 고해역, 관광·문화 융합으로 기적 쐈다`, url: '효빈일보 - 고해역 3개 노선 환승역.html', keywords: `인구 2만 읍내에` },
    { type: '기사', category: '기타', title: `"꿈을 향해 걷다"... 효빈 1호선 보몽역, 한·일 서브컬처 문화 교류의 '성지'로 우뚝`, url: '효빈일보 - 보몽역 서브컬처 성지.html', keywords: `꿈을 향해 걷다` },
    { type: '기사', category: '정치', title: `"결식아동 돕는 게 선거법 위반?" 윤재훈 '황당 고발'에 선관위 "합법적 자선" 철퇴`, url: '효빈일보 - 윤재훈 선거법 고발 참사.html', keywords: `결식아동 돕는 게` },
    { type: '기사', category: '기타', title: `핀 조명 맞고 오물 '셀프 샤워'... 중수역 '골든 로드' 테러범들의 최후`, url: '효빈일보 - 중수역 골든 로드 테러 사건.html', keywords: `핀 조명 맞고` },
    { type: '기사', category: '경제', title: `효빈국제공항-시즈오카공항 '직항' 하늘길 열렸다... 자매결연 5개월 만의 초고속 성과`, url: '효빈일보 - 효빈-시즈오카 직항 취항.html', keywords: `효빈국제공항시즈오카공항 직항 하늘길` },
    { type: '기사', category: '문화', title: `효빈시-누마즈시, 바다와 애니메이션으로 맺어진 '운명적 자매결연'`, url: '효빈일보 - 효빈시 누마즈시 자매결연.html', keywords: `효빈시누마즈시 바다와 애니메이션으로` },
    { type: '기사', category: '단독', title: `[단독] 윤대환의 끔찍한 복수극... 6호선 설계도 파쇄에 이어 국토부 메인 서버까지 '영구 삭제'`, url: '효빈일보 6호선 설계도 파쇄 사건.html', keywords: `단독 윤대환의 끔찍한` },
    { type: '기사', category: '기타', title: `"거지 동네? 주둥이 조심해라"... 강수성 천주시장, 효빈시 '빈효선 분담금 거부'에 전면전 선포`, url: '효빈일보 강수성 천주시장 윤대환 전면전.html', keywords: `거지 동네 주둥이` },
    { type: '기사', category: '기타', title: `"우리 애들이 똥차에 짐짝처럼 실려간다!" 효빈의 강남 고송동, 윤대환 규탄 '외제차 길막' 횃불 시위`, url: '효빈일보 고송동 윤대환 규탄 시위.html', keywords: `우리 애들이 똥차에` },
    { type: '기사', category: '문화/예술', title: `[기획] 효빈광역시, 글로벌 콘텐츠 성지로 우뚝... 선라이즈·부시로드와 '골든 파트너십' 갱신`, url: '효빈일보 골든 파트너십 갱신 기사.html', keywords: `기획 효빈광역시 글로벌` },
    { type: '기사', category: '사회', title: `[종합] "악플러 고소가 탄압?" 중앙언론 옹호에 효빈·서진 시민들 "범죄 비호" 횃불 들었다`, url: '효빈일보 과도한 탄압 논란 반박 기사.html', keywords: `종합 악플러 고소가` },
    { type: '기사', category: '정치', title: `[정치] "무사도 철거하려다 본인 배지가 철거됐다"... 국민의힘 곽두환 시의원, 당선무효형 확정`, url: '효빈일보 곽두환 당선무효 기사.html', keywords: `정치 무사도 철거하려다` },
    { type: '기사', category: '기타', title: `"부끄러운 줄 알아야지!" 노무현 대통령, 윤대환 '거지 동네' 망언에 극대노... "균형발전 전면 부정"`, url: '효빈일보 노무현 대통령 윤대환 극대노.html', keywords: `부끄러운 줄 알아야지` },
    { type: '기사', category: '정치', title: `[정치/외교] "플라스틱 쪼가리가 아니다"... 박효빈 시장, 상하이·시부야 합작 '탕 쿠쿠' 파손에 국제적 결례 사과 및 철퇴 예고`, url: '효빈일보 당가동 새벽 방문 기사.html', keywords: `정치외교 플라스틱 쪼가리가` },
    { type: '기사', category: '정치', title: `[정치] "보수의 가치는 탱크에 있지 않다" 박준서, 이부역서 파란 넥타이 매고 민주당 전격 입당`, url: '효빈일보 박준서 입당 기사.html', keywords: `정치 보수의 가치는` },
    { type: '기사', category: '정치/사회', title: `[종합] "시정은 이성으로, 보호는 완벽하게"... 박효빈 시장, 당가동 '탕 쿠쿠' 등신대 파손에 무관용 원칙 천명`, url: '효빈일보 박효빈 시장 당가동 사건 기사.html', keywords: `종합 시정은 이성으로` },
    { type: '기사', category: '사회', title: `[사회] "이부역 배달 오면 밀어버린다"... 곽두환 극렬 지지층, 공익제보 '부시도 라이더' 살해 협박`, url: '효빈일보 부시도 라이더 협박 기사.html', keywords: `사회 이부역 배달` },
    { type: '기사', category: '정치', title: `[기획] "애니 캐릭터 건드렸다가 구속에 낙선까지"... 효빈시 정치권 덮친 '서브컬처 역풍'`, url: '효빈일보 서브컬처 정치 기획기사.html', keywords: `기획 애니 캐릭터` },
    { type: '기사', category: '경제/국제', title: `[단독] 선라이즈·부시로드, 박효빈 시장과 긴급 회동... "저작권 약탈 행위, 타협 없다"`, url: '효빈일보 선라이즈 부시로드 긴급 회동 기사.html', keywords: `단독 선라이즈부시로드 박효빈` },
    { type: '기사', category: '사회', title: `[단독] "파란머리 가시나야" 한바다에 패륜 악플... 효빈시청 "선처 없는 영구 박제 및 형사고발"`, url: '효빈일보 악플 박제 기사.html', keywords: `단독 파란머리 가시나야` },
    { type: '기사', category: '기타', title: `"대통령이 지방자치 탄압"... 윤대환 효빈시장, 노무현 대통령 상대로 '선거법 위반' 고발 촌극`, url: '효빈일보 윤대환 노무현 대통령 고발.html', keywords: `대통령이 지방자치 탄압` },
    { type: '기사', category: '기타', title: `출소 직후 또 난동? 윤대환 전 시장, 청엽역서 시민들에게 '빵 세례' 굴욕 도주`, url: '효빈일보 윤대환 빵 테러 굴욕.html', keywords: `출소 직후 또` },
    { type: '기사', category: '정치/사회', title: `[집중취재] 윤재훈 "따로나 카페는 창조적 예술"... 시청 앞 '기괴한' 옹호 시위 논란`, url: '효빈일보 윤재훈 기사.html', keywords: `집중취재 윤재훈 따로나` },
    { type: '기사', category: '기타', title: `"HAF 참가자는 사회 부적응자, 격리 수용해야"... 정철규 의원, 선 넘은 '서브컬처 혐오' 파문`, url: '효빈일보 정철규 HAF 망언.html', keywords: `HAF 참가자는 사회` },
    { type: '기사', category: '기타', title: `'망언 폭격기' 정철규의 비참한 최후... 민주당 텃밭이라지만 무소속에도 밀린 6.33% '역대 최악 참패'`, url: '효빈일보 정철규 의원 3위 낙선.html', keywords: `망언 폭격기 정철규의` },
    { type: '기사', category: '기타', title: `"애니 센터 부수고 공장 지어야"... 정철규 의원, 고해역 막말 난동에 지역사회 '발칵'`, url: '효빈일보 정철규 의원 고해역 난동 파문.html', keywords: `애니 센터 부수고` },
    { type: '기사', category: 'IT/과학', title: `[IT/사회] "평범한 팬아트가 아동 범죄?"… 제미나이 AI, 과도한 검열로 일반 사용자 '성범죄자' 매도 논란`, url: '효빈일보 제미나이 과도검열 논란 기사.html', keywords: `IT사회 평범한 팬아트가` },
    { type: '기사', category: 'IT/과학', title: `[IT/사회] "사용자엔 예절 강요, 마스코트엔 쌍욕"… 제미나이 AI, 기괴한 '내로남불' 논란`, url: '효빈일보 제미나이 내로남불 기사.html', keywords: `IT사회 사용자엔 예절` },
    { type: '기사', category: 'IT/과학', title: `[IT/사회] "말로만 그림 그립니다?"… 제미나이 AI, 유료 구독자 대상 '이미지 사기' 논란`, url: '효빈일보 제미나이 이미지 사기 기사.html', keywords: `IT사회 말로만 그림` },
    { type: '기사', category: '기타', title: `"국가 전산망 테러, 무기징역도 모자라"... 중수동 법조타운, 윤대환 '역대급 중형' 한목소리`, url: '효빈일보 중수동 법조인 윤대환 판결 예상.html', keywords: `국가 전산망 테러` },
    { type: '기사', category: '사회/경제', title: `[단독] ‘따로나’ 카페의 후안무치... 글로벌 IP ‘러브라이브·뱅드림’까지 무단 도용 확인`, url: '효빈일보 짝퉁 카페 글로벌 IP 도용 기사.html', keywords: `단독 따로나 카페의` },
    { type: '기사', category: '사회/경제', title: `[단독] "다로나 아니라 '따로나'라고요!"... 적발된 짝퉁 카페 업주의 황당한 항변`, url: '효빈일보 짝퉁 카페 업주 궤변 기사.html', keywords: `단독 다로나 아니라` },
    { type: '기사', category: '문화/예술', title: `[현장] 효빈광역시, 선라이즈·부시로드와 '초밀착 협력' 선언... 콘텐츠 메카로 도약`, url: '효빈일보 초밀착 협력 선언 기사.html', keywords: `현장 효빈광역시 선라이즈부시로드와` },
    { type: '기사', category: '사회/경제', title: `[충격] 효빈교통공사 캐릭터 인기에 편승한 '따로나' 카페, 위생 최악 수준... 박효빈 시장 '격노'`, url: '효빈일보 캐릭터 짝퉁 카페 적발 기사.html', keywords: `충격 효빈교통공사 캐릭터` },
    { type: '기사', category: '기타', title: `'정글' 취급하더니 꿀먹벙... 코레일, 필리핀 마닐라 지하철 운영권 획득 쾌거`, url: '효빈일보 코레일 마닐라 지하철 운영권 획득.html', keywords: `정글 취급하더니 꿀먹벙` },
    { type: '기사', category: '행정/자치', title: `[종합] "단순한 인형이 아니다"... 효빈시 마스코트 '한바다', 2025 행정혁신 우수사례 '대통령상' 쾌거`, url: '효빈일보 행정우수사례 기사.html', keywords: `종합 단순한 인형이` },        
    { type: '기사',category: '사회',title: `[사회] 창전의 스카이라인 누빌 새 얼굴 '심세이' 전격 공개… 개통 전 마스코트 선공개 기조 굳히나`, url: '심세이공개.html', keywords: `사회 교통/문화 창전의 스카이라인 누빌` },
    { type: '기사', category: '정치', title: `구태 청산 외치는 야당 비대위... "윤대환 그림자 지우기 총력"`, url: '효빈일보_야당비대위_기사.html', keywords: `구태 청산 외치는` },{ type: '기사', category: '정치', title: `[단독] 백민우 치원군수, 1000번 버스 거부 파문`, url: '[단독] 백민우 치원군수, 1000번 버스 거부 파문.html', keywords: `백민우 치원군수 1000번 버스 거부` },
{ type: '기사', category: '사회', title: `[단독] 만화 본다고 장학금 박탈 폭로`, url: '[단독] 만화 본다고 장학금 박탈 폭로.html', keywords: `만화 장학금 박탈 이세리 백민우` },
{ type: '기사', category: '사회', title: `[단독] 윤간석 전 교장 성범죄 폭로`, url: '[단독] 윤간석 전 교장 성범죄 폭로.html', keywords: `윤간석 전 교장 성범죄 폭로` },
{ type: '기사', category: '사회', title: `[단독] 권상민 교육감 극대노 폭로`, url: '[단독] 권상민 교육감 극대노 폭로.html', keywords: `권상민 교육감 극대노 폭로` },
{ type: '기사', category: '정치', title: `[단독] 국민의힘 염세현 윤간석 공천에 극대노 사자후 폭로`, url: '[단독] 국민의힘 염세현 윤간석 공천에 극대노 사자후 폭로.html', keywords: `염세현 윤간석 공천 극대노 사자후` },
{ type: '기사', category: '정치', title: `[단독] 윤간석 후보 망언 폭로`, url: '[단독] 윤간석 후보 망언 폭로.html', keywords: `윤간석 후보 망언 폭로` },
{ type: '기사', category: '정치', title: `[단독] 권상민 교육감 윤간석 유세장 극대노 설전 폭로`, url: '[단독] 권상민 교육감 윤간석 유세장 극대노 설전 폭로.html', keywords: `권상민 교육감 윤간석 유세장 설전` },
{ type: '기사', category: '사회', title: `[단독] 윤간석 패드립 망언 폭로`, url: '[단독] 윤간석 패드립 망언 폭로.html', keywords: `윤간석 패드립 망언 폭로` },
{ type: '기사', category: '정치', title: `[단독] 국민의힘 염세현 윤간석 유세차 대치`, url: '[단독] 국민의힘 염세현 윤간석 유세차 대치.html', keywords: `염세현 윤간석 유세차 대치` },
{ type: '기사', category: '사회', title: `[단독] 기계 새끼야 뒤질래？윤간석 챗봇 살해 협박`, url: '[단독] 기계 새끼야 뒤질래？윤간석 챗봇 살해 협박.html', keywords: `윤간석 챗봇 살해 협박 제미나이` },
{ type: '기사', category: '사회', title: `[단독] 윤간석 유세장 참스승 살해 협박 폭로`, url: '[단독] 윤간석 유세장 참스승 살해 협박 폭로.html', keywords: `윤간석 유세장 참스승 살해 협박 오한숙` },
{ type: '기사', category: '정치', title: `[단독] 장동혁 국힘 대표 윤간석 쉴드 망언`, url: '[단독] 장동혁 국힘 대표 윤간석 쉴드 망언.html', keywords: `장동혁 국힘 대표 윤간석 쉴드 망언` },
{ type: '기사', category: '정치', title: `[속보] 박효빈 압승, 윤재훈 4위 몰락`, url: '[속보] 박효빈 압승, 윤재훈 4위 몰락.html', keywords: `박효빈 압승 윤재훈 4위 몰락 지방선거` },
{ type: '기사', category: '사회', title: `[속보] 윤석열 1심 징역 30년 선고`, url: '[속보] 윤석열 1심 징역 30년 선고.html', keywords: `윤석열 1심 징역 30년 선고` },
{ type: '기사', category: '사회', title: `[속보] 尹 변호인단, 일반이적 징역 30년에 격앙`, url: '[속보] 尹 변호인단, 일반이적 징역 30년에 격앙.html', keywords: `윤석열 변호인단 일반이적 징역 30년 격앙` },{ type: '기사', category: '사회고발', title: `[심층취재] '가짜 덕후'의 가면 뒤에 숨겨진 추악한 횡령... 반덕수의 '오이 지옥'은 기획된 범죄였다`, url: '[심층취재] 반덕수 비리 사건 - 효빈일보.html', keywords: `심층취재 가짜 덕후의 반덕수 횡령` },
{ type: '기사', category: '사회', title: `[단독] "어디서 감히 시민을 굶겨!" 박효빈 시장, '오이 지옥' 풍천재단 급습... 책상 내리치며 '적폐 청산'`, url: '[단독] 박효빈 시장, 오이 지옥 풍천재단 급습... 책상 내리치며 적폐 청산 - 효빈일보.html', keywords: `단독 어디서 감히 박효빈 시장 오이 지옥` },
{ type: '기사', category: '사회', title: `[단독] "어린 시장이 반말해 수치심"... '2억 횡령' 반덕수, 옥중에서 朴 시장 권력남용·부당해고 고소 '적반하장'`, url: '[단독] 어린 시장이 반말해 수치심... 2억 횡령 반덕수, 고소 코미디 - 효빈일보.html', keywords: `단독 어린 시장이 반덕수 고소 코미디` },
{ type: '기사', category: '정치', title: `[단독] 尹 대통령, '가짜뉴스 온상' 파이낸스 투데이 공개 옹호 파장... "효빈시의 언론 탄압" 적반하장`, url: '윤석열 파이낸스 투데이 옹호 논란 - 효빈일보.html', keywords: `단독 尹 대통령 윤석열 파이낸스 투데이` },
{ type: '기사', category: '정치', title: `[속보] 윤간석의 저주 뚫었다... 염세현 10표 차 기적의 3선`, url: '[속보] 윤간석의 저주 뚫었다... 염세현 10표 차 기적의 3선.html', keywords: `염세현 10표 차 기적의 3선 당선` },
{ type: '기사', category: '정치', title: `[기획] 치원·모제 철옹성 함락`, url: '[기획] 치원·모제 철옹성 함락.html', keywords: `치원 모제 철옹성 함락 지방선거` },
{ type: '기사', category: '정치', title: `[기획] 마진시장 문양인 당선`, url: '[기획] 마진시장 문양인 당선.html', keywords: `마진시장 문양인 당선 어부지리` },
{ type: '기사', category: '정치', title: `[기획] 주언일·강준영 통쾌한 반란`, url: '[기획] 주언일·강준영 통쾌한 반란.html', keywords: `주언일 강준영 통쾌한 반란 당선` },{ type: '기사', category: '정치', title: '[단독] 78% 압승 박효빈·차연소 김상욱 전격 회동', url: '[단독] 78% 압승 박효빈·차연소 김상욱 전격 회동.html', keywords: '박효빈 차연소 김상욱 회동 압승 정치' },
        { type: '기사', category: '정치', title: '평택을 재선거 야권 분열', url: '평택을 재선거 야권 분열.html', keywords: '평택을 재선거 야권 분열 선거 정치' },
        { type: '기사', category: '정치', title: '[기획] 제1야당 간판 달고 고작 15.76%', url: '[기획] 제1야당 간판 달고 고작 15.76%.html', keywords: '제1야당 득표율 15.76% 기획 선거 정치' },
        { type: '기사', category: '정치', title: '부산 지선 기획', url: '부산 지선 기획.html', keywords: '부산 지선 지방선거 기획 정치' },
        { type: '기사', category: '문화', title: '[단독] 서브컬처 제국 , 효빈-개인기 압승 부산 손잡았다', url: '[단독] 서브컬처 제국 , 효빈-개인기 압승 부산 손잡았다.html', keywords: '서브컬처 제국 효빈 부산 협력 단독 문화' },
        { type: '기사', category: '정치', title: '[단독] 회식 대신 쇠질… 박효빈·김상욱 헬스장 회동', url: '[단독] 회식 대신 쇠질… 박효빈·김상욱 헬스장 회동.html', keywords: '박효빈 김상욱 헬스장 쇠질 회동 단독 정치' }];    // ==========================================
    
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