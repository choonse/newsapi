<h1>newsapi(https://newsapi.org) 뉴스 API 서비스 구현</h1>

<h3>스택<br/>React, Redux, Typescript, Styled-components, Saga, React Hook</h3>

<h3>기능</h3>
- 검색기능<br/>
- 로그인기능<br/>
- 북마크기능<br/>

<h3>상세</h3>
<b>1.검색기능</b><br/>
- 기사 클릭 시 새로운 탭으로 페이지 이동<br/>
- 기사리스트 내 제목,내용,이미지,작성자,날짜,출처 표시<br/>
- 최신순을 우선으로 정렬 표시<br/>
<br/><br/>
<b>2.로그인기능</b><br/>
- 아이디와 비밀번호를 사용한 로그인 기능(.env의 정보와 비교)<br/>
- 재접속시 로그인 상태 유지(local Storage 사용)<br/>
- 로그아웃 클릭 시 정보 삭제(local Storage 내 접속 정보 삭제)<br/>
- 로그인 상태에서만 북마크 및 북마크 편집 기능 사용<br/>
<br/>
<b>3.북마크기능</b><br/>
- 북마크 추가,삭제,수정 기능<br/>
- 재접속시 내용 유지(local Storage 사용, 로그아웃해도 북마크 데이터는 유지)<br/>

![이미지 0](https://user-images.githubusercontent.com/86334732/156778236-64aa56b2-957d-4e0f-97d6-a2e8bacad50f.png)
![이미지 1](https://user-images.githubusercontent.com/86334732/156778245-24ec4d04-0e30-4fa9-90d2-10c918129424.png)
![이미지 2](https://user-images.githubusercontent.com/86334732/156778248-315ff272-e312-44e4-b43f-ed01cd9cee72.png)
![이미지 3](https://user-images.githubusercontent.com/86334732/156778255-2ddc5e9b-0c1a-4657-83d6-7334fd512c58.png)
