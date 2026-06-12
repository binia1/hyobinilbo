const fs = require('fs/promises');
const path = require('path');

// 검사할 최상위 폴더 (현재 폴더 기준)
const targetDir = './'; 

// 외부 링크(http 등) 무시 필터
const isExternalUrl = (url) => url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:');

// 1. 하위 폴더까지 뒤져서 모든 HTML 파일을 찾는 함수
async function scanHtmlFiles(dir, fileList = []) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        // node_modules, .git 등 검사가 불필요한 폴더는 패스
        if (entry.isDirectory() && !['node_modules', '.git', 'assets'].includes(entry.name)) {
            await scanHtmlFiles(fullPath, fileList);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

async function findMissingImages() {
    try {
        console.log('🔍 HTML 파일들을 스캔하여 누락된 엑스박스 이미지를 찾습니다...\n');
        
        const htmlFiles = await scanHtmlFiles(targetDir);
        let missingCount = 0;
        const missingDetails = {}; // HTML 파일별로 누락된 이미지 정리

        for (const htmlFile of htmlFiles) {
            const content = await fs.readFile(htmlFile, 'utf-8');
            
            // [개선된 부분 1] 정규식 꼬임 방지를 위해 <img ... > 태그 전체를 먼저 뭉텅이로 추출합니다.
            const imgTags = content.match(/<img[^>]+>/gi) || [];
            
            for (const imgTag of imgTags) {
                // [개선된 부분 2] 추출된 img 태그 안에서 진짜 src 속성만 안전하게 추출합니다.
                // onerror="this.src" 같은 가짜 src를 피하기 위해 반드시 앞에 공백(띄어쓰기)이 있는 src만 찾습니다.
                const srcMatch = imgTag.match(/(?:\s)src=["']([^"']+)["']/i);
                
                // src 속성이 없으면 패스
                if (!srcMatch) continue;
                
                let imgSrc = srcMatch[1];

                // 웹 이미지(http)나 Base64 데이터는 검사하지 않음
                if (isExternalUrl(imgSrc)) continue;

                // 브라우저에서 한글 파일명이 %EC%9D%B4... 처럼 인코딩될 수 있으므로 원래 한글로 디코딩
                try {
                    imgSrc = decodeURIComponent(imgSrc);
                } catch (e) {
                    // 디코딩 실패 시 원본 유지
                }

                // HTML 파일의 위치를 기준으로 이미지의 실제 로컬 경로 계산
                const htmlDir = path.dirname(htmlFile);
                const absoluteImgPath = path.resolve(htmlDir, imgSrc);

                // 파일이 디스크에 존재하는지 검사
                try {
                    await fs.access(absoluteImgPath);
                } catch {
                    // fs.access에서 에러가 나면 파일이 없다는 뜻
                    if (!missingDetails[htmlFile]) {
                        missingDetails[htmlFile] = new Set(); // 중복 방지용 Set
                    }
                    missingDetails[htmlFile].add(imgSrc);
                }
            }
        }

        // 2. 결과 출력
        const affectedFiles = Object.keys(missingDetails);
        
        if (affectedFiles.length === 0) {
            console.log('🎉 완벽합니다! 모든 HTML 파일에 적힌 이미지가 실제 폴더에 존재합니다.');
        } else {
            console.log(`🚨 총 ${affectedFiles.length}개의 HTML 문서에서 누락된 이미지를 발견했습니다!\n`);
            
            for (const htmlFile of affectedFiles) {
                console.log(`📄 문서: ${htmlFile}`);
                for (const img of missingDetails[htmlFile]) {
                    console.log(`   ❌ 없음: ${img}`);
                    missingCount++;
                }
                console.log('');
            }
            console.log(`👉 총 ${missingCount}개의 이미지를 만들어서 해당 경로에 넣어주세요.`);
        }

    } catch (error) {
        console.error('❌ 스크립트 실행 중 오류가 발생했습니다:', error);
    }
}

// 스크립트 실행
findMissingImages();