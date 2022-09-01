# 0805 - JavaScript와 React의 코드 방식

# 가장 기본적인 리액트 프로젝트 분석하기

- src 폴더의 index.js는 가장 처음 실행되는 파일이다.
- import할 때 js파일이면 확장자를 생략한다. 다른 거는 생략하지 않음
- JSX는 코드를 작성하면 자동적으로 브라우저에서 작동하는 코드
    - 브라우저에서 잘 작동함
    - 개발자로서 작성하기 쉽다

# Javascript와 React의 코드 방식

**JavaScript**

```jsx
function App() {
	const para = document.createElement('p');
	para.textContent = "This is also visible!";
	document.getElementById('root').append(para);
}
```

- 명령적 프로그래밍

**React**

```jsx
function App() {
	return (
		<p>This is also visible!</p>
	);
}
```

- 선언적 프로그래밍
- 리액트에서 컴포넌트(App)는 함수(App.js에서 function App(){}으로 정의되어있음)처럼 보이지만 자체 html요소처럼(index.js에서 <App />으로 사용됨) 사용된다.