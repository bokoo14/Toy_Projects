# My_Blog
Toy project using React 

## Required Features
- 글 목록 보기 기능 (리스트 형태)
- 글 보기 기능
- 댓글 보기 기능
- 글 작성 기능
- 댓글 작성 기능

## Tutorial
§ npx create-react-app mini-blog  
$ cd mini-blog  
$ npmstart  

## Required Package
$ npm install --save react-router-dom styled-components  
save option: 설치하는 패키지들을 package.json파일이 관리하는 의존성 목록에 저장하겠다  
의존성을 추가하면 나중에 다른 사람이 해당 프로젝트를 살행하려고 할 때, 일일이 확인하여 설치할 필요 없이, npm install 명령어만 실행하면 된다.  

## Project Structure
src  
ㄴ component  
 ㄴ list: 리스트와 관련돤 컴포넌트들을 모아놓은 폴더  
  ㄴ PostListItem  
  ㄴ PostList  
  ㄴ CommentListItem  
  ㄴ CommentList  
 ㄴ page: 페이지 컴포넌트들을 모아놓은 폴더  
  ㄴ MainPage  
  ㄴ PostWritePage  
  ㄴ PostViewPage  
 ㄴ ui: UI컴포넌트들을 모아놓은 폴더  
  ㄴ Button  
  ㄴ TextInput  
     
 ## Data
 실제 백엔드를 대신할 가짜 데이터 이용  
 data.json파일을 사용하여 mock data사용  
