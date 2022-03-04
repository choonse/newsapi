newsapi(https://newsapi.org) 뉴스 API 서비스 구현

스택
React, Redux, Typescript, Styled-components, Saga, React Hook

기능
-검색기능
-로그인기능
-북마크기능

상세
1.검색기능
-기사 클릭 시 새로운 탭으로 페이지 이동
-기사리스트 내 제목,내용,이미지,작성자,날짜,출처 표시
-최신순을 우선으로 정렬 표시

2.로그인기능
-아이디와 비밀번호를 사용한 로그인 기능(.env의 정보와 비교)
-재접속시 로그인 상태 유지(local Storage 사용)
-로그아웃 클릭 시 정보 삭제(local Storage 내 접속 정보 삭제)
-로그인 상태에서만 북마크 및 북마크 편집 기능 사용

3.북마크기능
-북마크 추가,삭제,수정 기능
-재접속시 내용 유지(local Storage 사용, 로그아웃해도 북마크 데이터는 유지)

