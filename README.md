# 1. 강의 `React The Complete Guide` 수강
#### 유데미에서 강의 `React The Complete Guide`를 학습하고 기록합니다.

<br>

# 2. 폴더 소개
## 👉 code
강의를 듣고 실습한 리액트 코드가 있는 폴더
## 👉 제목 + training
강의에서 배운 개념을 이용하여 추가적인 실습을 한 코드가 있는 폴더

<br>

# 3. 학습 결과
## ✨ 섹션 2
### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/2-413929a621a04370a9ddf8847c6bda59'>화살표 함수</a>
2. <a href='https://faceted-dash-136.notion.site/2-Exports-Imports-c493db56eb7f453bb6564a14c14ebc7c'>Exports/Imports</a>
3. <a href='https://faceted-dash-136.notion.site/2-Class-b66527d9811e45c38367d413d834e5f4'>클래스</a>
4. <a href='https://faceted-dash-136.notion.site/2-53e46aa158b44297afc9490785746dc1'>스프레드/레스트 연산자</a>
5. <a href='https://faceted-dash-136.notion.site/2-f8278c8b1c5a4ec4b2a4ffc74a0bba55'>구조분해할당</a>
6. <a href='https://faceted-dash-136.notion.site/2-1c5766fe6183479dadebb0b5ca771d64'>참조값/원시값</a>

<br>

## ✨ 섹션 3
### 컴포넌트 분리
아래와 같이 컴포넌트를 나누었습니다. Expenses, ExpenseItem, ExpenseDate 컴포넌트를 생성하였고 합성 컴포넌트 Card를 생성하여 Expenses, ExpenseItem에 적용하였습니다.

<img src='https://user-images.githubusercontent.com/101965666/214746208-02063c4a-abc9-41c5-b5ad-f49455f30441.png' width='600'>

### 변경 사항
전반적인 색상을 검정->분홍으로 변경하였고, 날짜/제목/가격을 영어->한국어로 변경하였습니다.

<img src='https://user-images.githubusercontent.com/101965666/214744533-1b4f93d1-01c0-4850-a5ab-d29a1a3d9626.PNG' width='600'>

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/3-38ff238c91a14ea4890a4e5206bcb919'>컴포넌트 개념, 선언적 방식</a>
2. <a href='https://faceted-dash-136.notion.site/3-JSX-4f35b84ef3454616b567cfff09a43c5c'>JSX 소개, 리액트 작동 방식</a>
3. <a href='https://faceted-dash-136.notion.site/3-className-CSS-386cbb67ee7a4d13a9045646f245e342'>컴포넌트 생성, className 작성, CSS 추가</a>
4. <a href='https://faceted-dash-136.notion.site/3-JSX-177e75d38e4f472f8c5ad37939c8344c'>JSX에서 동적 데이터 출력 및 표현식 작업</a>
5. <a href='https://faceted-dash-136.notion.site/3-props-86c4e2f627d247449e11d97e028f03e1'>props로 데이터 전달</a>
6. <a href='https://faceted-dash-136.notion.site/3-toLocaleString-76544d8452354558b68f1524be5372e3'>toLocaleString(), 컴포넌트 분리</a>
7. <a href='https://faceted-dash-136.notion.site/3-children-prop-9e14192d466d43a6b1771252d0da3ac1'>합성 컴포넌트, children prop</a>

<br>

## ✨ 섹션 4
### 입력 폼 생성
form 태그를 이용하여 제목, 가격, 날짜를 입력받고 이를 전송하는 컴포넌트를 생성하였습니다. 그리고 하위 컴포넌트에 있는 데이터를 상위 컴포넌트로 끌어올리는 작업을 하였습니다.

![캡처](https://user-images.githubusercontent.com/101965666/216322672-d3944bcd-d3da-4cd4-92b7-f59ca9192ee9.PNG)


### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/4-9175a80cb1d74656bf6343b8aee30ea5'>이벤트 핸들러</a>
2. <a href='https://faceted-dash-136.notion.site/4-State-f3a121897c5c4ad59558f1fc96211f07'>State</a>
3. <a href='https://faceted-dash-136.notion.site/4-Form-dda8aaed817f4e35983c3d8eec50f709'>Form</a>
4. <a href='https://faceted-dash-136.notion.site/4-65e1c40513f24609b5b42db64f3294bd'>하드트레이닝</a>

<br>

## ✨ 섹션 5
### 차트 생성 및 '새롭게 추가하기', '취소하기' 버튼 생성
일별로 지출한 금액을 시각화하는 차트를 생성하였습니다. 또한, 입력을 원하지 않을 때에는 입력폼 대신 '새롭게 추가하기' 버튼만 보이도록 했고, 입력을 취소할 수 있는 '취소하기' 버튼을 생성하였습니다.
![chrome_yrrtW1yQil](https://user-images.githubusercontent.com/101965666/217468269-3d72349e-6f73-46b4-b18f-775d8396d743.gif)

### 변경 사항
강의에서는 아래와 같이 연도별로 필터링을 하고, 차트에는 해당 연도의 월별로 지출한 금액을 표시하고 있습니다.
![chrome_bTl3Zirtk5](https://user-images.githubusercontent.com/101965666/217470211-873df087-4cd6-4a88-ac84-2a7ffa0784b4.png)

하지만 사용하는 입장에서 월별 지출보다 일별 지출을 확인하는 것이 더 유용할 것 같아, 아래와 같이 달별로 필터링을 하고 차트에는 해당 달의 일별로 지출한 금액을 표시하도록 변경해보았습니다. 그리고 1, 3, 5, 7, 8, 10, 12월에는 31일까지, 2월에는 28일까지, 4, 6, 9, 11월에는 30일까지 표시되도록 하였습니다.
![chrome_7CETD6CXFv](https://user-images.githubusercontent.com/101965666/217469698-fe72eda6-9db3-48b6-b414-a580224d3daf.gif)

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/5-map-keys-filter-04461b1c04f44baba244c343a76067f7'>map(), keys, filter()</a>
2. <a href='https://faceted-dash-136.notion.site/5-eb54a484098b4a688aa876f93d218efb'>조건부 내용</a>

<br>

## ✨ 섹션 6
리액트 컴포넌트를 스타일링하는 방법으로 Styled Components, CSS Module 등에 관해 알아보았습니다. 
### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/6-4f2051b38aaa4aba8ddb9899e4d829ef'>리액트 컴포넌트 스타일링</a>

<br>

## ✨ 섹션 8
### 입력폼, 모달창 생성
이전 섹션까지 하던 가계부 만들기를 마치고 입력폼과 모달창을 만들어보았습니다. 
입력폼에서 입력받은 이름과 나이를 화면에 보여주고, 유효하지 않은 값(빈 값, 0 이하의 나이)을 입력하면 에러를 표시하는 모달창을 띄우는 기능이 있습니다.  

강의를 듣기 전 react-modal 라이브러리로 모달창을 만들어보았고, 강의를 들으며 라이브러리 없이 모달창을 만들어보았습니다. 
![chrome_wbhQheVcNC](https://user-images.githubusercontent.com/101965666/223939665-43d34f23-a993-4147-b6ee-d0fa6f8cd952.gif)

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/8-Modal-react-modal-29118b77c15644e2a9a3f7488e63fcad'>Modal(react-modal 라이브러리, 커스텀)</a>

<br>

## ✨ 섹션 9
### Portal 사용하여 모달창 만들기
섹션 8에서 만들었던 모달창을 Portal을 사용해서 만들어보았습니다.
그리고 input태그 안의 값을 가져올 때 state가 아닌 ref를 사용해보았습니다.

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/9-Portal-Modal-011b1b73ca7d4ed4b30152fc56f09c03'>Portal로 Modal 만들기</a>
2. <a href='https://faceted-dash-136.notion.site/9-useRef-91e83b642069493fa2acdbeb16ba0142'>useRef</a>


<br>

## ✨ 섹션 10
### local storage, useEffect, useReducer, useContext, useRef 사용해보기
- 로컬 스토리지를 사용하여 페이지 새로고침시에도 로그인 정보가 유지되게 했습니다.
- useEffect를 사용하여 로그인 상태 확인 부분의 무한루프를  해결했습니다.
- 입력값의 유효성을 검사하는 부분에서 디바운싱(마지막으로 발생한 이벤트를 기준으로 특정 시간이 지난 후 하나의 이벤트만 실행하는 것)을 적용하기 위해 useEffect를 사용했습니다.
- useReducer를 사용하여 email과 password 각각에 존재하는 여러 액션들을 두 군데에서(emailReducer, passwordReducer) 관리했습니다.
- useContext를 사용하여 여러 state를 하나의 파일에서 관리했습니다.
- 함수형 컴포넌트에 ref를 전달하기 위해 forwardRef를 사용하였고, 추가적으로 useImperativeHandle도 사용해보았습니다.

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/10-useEffect-c77037b2077f4ba7b5b95d91fba26b9b'>useEffect</a>

<br>

## ✨ 섹션 11
### 음식 주문앱 만들기
지금까지 배운 내용을 활용하여 장바구니 기능이 있는 음식 주문앱을 만들었습니다.
![chrome_1hoBXhewPE](https://user-images.githubusercontent.com/101965666/232278037-65e2da18-be67-480c-a9ca-25cc4d5bfef9.gif)
### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/11-3aaa23098e164b0c8b5ad1d6d5f1fb23'>useReducer</a>

### 개인적으로 만든 주문앱
- <a href='https://github.com/biyamn/GreekYogurt-Order-App'>깃허브</a> 

- <a href='https://velog.io/@hamham/series/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88'>블로그 후기</a>

<br>

## ✨ 섹션 12
### React.memo, useMemo, useCallback 사용해보기
- 리액트가 작동하는 방식을 공부하며 컴포넌트가 실행될 때 가상의 DOM과 비교하여 변경된 부분만 실제 DOM에 반영되는 것을 확인했습니다.
- React.memo, useMemo, useCallback등 리액트에서 최적화하는 방법을 알아보았습니다.

### 학습 내용 정리
1. <a href='https://faceted-dash-136.notion.site/12-React-memo-useCallback-useState-914f1a6113b34c26a20adf3a3dc4ebb4'>React.memo, useCallback, useState(콜백함수)</a>


<br>

## ✨ 섹션 14
### HTTP 요청 보내기
- Star Wars 영화 시리즈의 정보를 API 형태로 제공하는 웹 서비스(https://swapi.dev/) 이용하여 HTTP GET 요청을 보내고 영화 목록 정보를 가져올 수 있습니다.
- 로딩 및 HTTP 오류 발생시 화면에 로딩 혹은 오류를 안내하는 화면을 렌더링했습니다.
- Firebase를 이용하여 HTTP POST 요청을 보내고, 응답으로 데이터를 받아올 수 있었습니다.
