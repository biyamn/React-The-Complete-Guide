# 0904 - State 사용 이유 이해하기(1)

# State 사용 이유 이해하기(1)

리액트 강의를 듣다가 ‘컴포넌트 기능이 실행되는 방법’부터 이해가 안가기 시작했다.. 여기서 state를 사용하는 이유를 설명했는데, 그걸 이해하지 못해서 그런 것 같다. 

그리고 강의에 제공되는 번역투의 자막은 정말 이해하기가 힘들다.. 

그래서! 강의가 아니라 일단 검색을 통해 알아보기로 했다. 

(오늘 진짜 state 이해한다……!!!!)

---

### State란?

- 자료를 잠깐 저장할 때 씀(변수처럼)
    
    [https://codingapple.com/unit/react-3-state-usestate-hook/](https://codingapple.com/unit/react-3-state-usestate-hook/)
    
- 리액트에서 앱의 유동적인 데이터를 다루기 위해 있는 객체
- 일반적으로 리액트에서는 유동적인 데이터는 변수에 담아서 사용하지 않고 useState()라는 리액트 함수를 사용하여 state라는 저장공간에 담아 사용한다.

### State를 사용하는 이유는?

- State는 변경되면 자동으로 재렌더링된다.
- 변수는 변경되어도 자동 재렌더링이 안됨!

→ 자주 변경될 것 같은 html 부분은 state로 만들어 놓자!

### State의 동작 원리는?

- React 라이브러리에 있는 useState()함수를 통해 state를 사용할 수 있다.
- useState()를 실행시키면 초기값으로 설정해 놓은 state를 기억하고 있다.
- 이벤트에 의해 setState를 통해 state의 값이 변경되면 변경된 state 값에 맞춰 재렌더링하게 된다.
- state가 변경되어 재렌더링 하는 과정에서 Virtual DOM이 생성되는데 리액트에서 이전의 Virtual DOM과 다른 부분을 찾아내어 메모리에서 먼저 구현한 후 실제 DOM 부분만 업데이트한다.
    - 이때 Virtual DOM이란?
        
        DOM 조작이 많이 발생할 경우, 이는 상당히 비효율적이다. Virtual DOM은 이런 상황을 해결하기 위해 탄생했다. 
        
        Virtual DOM은 하나의 가상 레이어이다. Virtual DOM에 적용하는 변경사항은 DOM에 바로 반영되지 않고 **변경 사항들을 모아뒀다가 한번에 DOM에 보낸다**. → DOM은 업데이트를 한 번만 하면 되고 렌더도 한 번만 하면 된다. 따라서 DOM 조작이 아주 빈번할 경우 Virtual DOM은 DOM을 조작하는 것에 비해 효율적으로 동작한다.
        
        [https://velog.io/@woohm402/virtual-dom-and-react](https://velog.io/@woohm402/virtual-dom-and-react)
        

```jsx
import {useState} from 'react';

let [state, setState] = useState('State'); // ES6 destructuring
```

### State 사용 방법은?

1. import { useState }
2. useState(보관할 자료)
3. let[작명, 작명]

```jsx
let [a, b] = useState('남자 코트 추천');
```

여기서 a는 state에 보관했던 자료 . (구조분해할당)

보통 아래처럼 쓰는 것 같다.([이름, set이름] 이렇게)

```jsx
let [title, setTitle] = useState('남자 코트 추천');
```

### 예시)

근데 분명히 변수는 변경되어도 자동 재렌더링이 안된다고 했는데 변경이 된다…!

그러니까 post인 ‘강남 우동 맛집’ 값을 변경하고 글제목인 ‘남자 코트 추천’ 값을 변경했는데 둘 다 변경된 값으로 정상적으로 출력된다! 뭐지… 뭐…지… 

이거랑 관련해서 ‘리액트 완벽가이드’ 강의에서 설명해준 것 같아서 강의를 찾아보기로 했다. 

```jsx
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState('남자 코트 추천');

  return (
    <div>
      <h4>{ post }</h4>
      <h4>{ 글제목 }</h4>
    </div>
  );
}

export default App;
```

---

### ‘리액트 완벽가이드’ 강의 코드

여기서 ‘Change title’이라는 버튼을 누르면 onClick으로 이벤트를 발생시키는데, clickHandler를 실행시킨다.

clickHandler가 뭔지 보려고 위쪽으로 갔더니 title을 ‘Updated!!!’로 변경시키는 코드였다. 

이전에 title은 ‘Toilet Paper’, ‘New TV’, ‘Car Insurance’, ‘New Desk(Wooden)’ 등이었다. 

```jsx
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  let title = props.title;

  // function clickHandler1() {
  //   title='Updated!';
  // };

  const clickHandler = () => {
    title = 'Updated!!!!!';
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
```

**그런데!!!** 버튼을 아무리 눌러도 title이 변경되지 않는다!!!왜지??

이전에 리액트에서 변수는 변경되어도 자동 재렌더링이 안된다고 했는데 그 현상일까?? 

일단 clickHandler 함수 자체가 작동하지 않는게 아닌지 알아보기 위해 onClick되어 clickHandler함수가 실행되면 

`console.log('Updated!');`를 하게 했다.

→ 버튼을  클릭하면 **Updated!가 정상적으로 출력된다**! 하지만 title은 여전히 바뀌지 않은 채로!

강의를 조금 더 들어보자.

→ 무슨 말인지 모르겠다.. 진짜 뭐라고 하는지..

다른 강의 `‘한입 크기로 잘라 먹는 리액트’`에서 State 부분을 들어보자….

- state(상태)만으로도 리액트가 거의 모두 설명된다고 해도 과언이 아니라고 한다.
- State란?
    - 계속해서 변화하는 특정 상태
    - 상태에 따라 각각 다른 동작을 함
- 예) 웹사이트 다크모드

State를 설명할 때 카운터 예시를 많이 쓴다고 한다.

나도 테스트용으로 카운터 예시를 만들어봤다.

아래처럼 치면 +버튼을 눌렀을 때 숫자가 증가하고 -버튼을 눌렀을 때 숫자가 감소한다.

```jsx
import './Counter.css';
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  )
}

export default Counter;
```

- state가 변할 때마다 화면이 재렌더된다.
- 한 컴포넌트 안에 여러 개의 state가 존재할 수 있다.

그럼 state를 쓰지 않고 그냥 변수로 만들면 어떻게 될까? count가 화면에서 변하지 않는다! console.log로 찍어보면 count는 정상적으로 증가/감소하는데, 화면에서는 초기값인 0에서 변하지 않는다. 

```jsx
import './Counter.css';

const Counter = () => {
  let count = 0;
  const plus = () => {
    count = count + 1
    console.log(count); // 제대로 증가함
  }
  const minus = () => {
    count = count - 1
    console.log(count); // 제대로 감소함
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2> // 근데 출력된 count는 0에서 변하지 않음
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  )
}

export default Counter;
```

그냥 변수랑 state를 사용했을 때랑 대체 뭐가 다른 걸까???

---

## State에 대한 질문과 답변

이 현상에 대해 디코에 질문을 올리고 답변을 받았다.

질문:

```jsx
리액트 State에 관한 질문입니다! 

아래의 사진처럼 + 버튼을 누르면 숫자가 증가하고 - 버튼을 누르면 숫자가 감소하는 
Counter 예제를 만들어보았는데요.

아래의 코드처럼 State를 쓰면 화면에서 count가 증가/감소하며 변화하는데
import './Counter.css';
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  )
}

export default Counter;

아래의 코드처럼 State를 안쓰고 그냥 변수를 사용하면 아무리 + 버튼이나 - 버튼을 눌러도 
count가 변하지 않습니다...

import './Counter.css';

const Counter = () => {
  let count = 0;
  const plus = () => {
    count = count + 1
    console.log(count); // 제대로 증가함
  }
  const minus = () => {
    count = count - 1
    console.log(count); // 제대로 감소함
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  )
}

export default Counter;

근데 console.log로 찍어서 확인해보면 count는 변화하거든요?? 
근데 화면에는 변화한 값이 출력되지 않더라고요...!!!

왜 이런지 궁금합니다 ,, 
리액트에서 State를 쓰는 이유가 이거랑 연관되어 있을 것 같은데 잘 모르겠어요...!
```

답: 

```markdown
연관된 게 맞아요
리액트를 비롯해서
리액티브한 프런트엔드에서 상태는
단순히 변수가 아니고
이 값이 변했을 때 화면에 반영되도록
연결되어 있는 걸 상태라 합니다
그래서 상태가 아닌 그냥 변수는 바꿔도 화면이 변하지 않고
더 신기한 거는
setCount 아래에 console.log를 찍으면
값이 변하지 않았을 겁니다
그 이유는
setCount는 비동기이기 때문인데
값을 직접 바꾸는 게 아니라
리액트에게 상태를 바꾸고 함수를 다시 실행해서 렌더링을 해달라는
요청을 보내는 거라
setCount를 호출하면
아직 요청을 보내기만(dispatch)한 상태라
이벤트 핸들러가 끝나고
리액트가 상태를 바꾸고 화면을 다시 그리기를 기다려야 합니다.
인간에게는 찰나의 시간이지만요
어쨌든 그래서 그냥 변수가 아니라 useState를 써야 하는 것이지요. (설명 끝)
```

(동기/비동기 설명: [https://velog.io/@slobber/동기와-비동기의-차이](https://velog.io/@slobber/%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%9D%98-%EC%B0%A8%EC%9D%B4))

질문: 다시 내 질문

```markdown
그럼 그냥 변수를 쓰는데 변수가 변할 때마다 화면이 재렌더되는 코드를 짠다면 
그게 useState의 기능이랑 동일한 건가요? 
그냥 변수랑 useState가 다른 점이 화면을 다시 그린다는 것밖에 없는 건가요?
```

답: 다시 이에 대한 답변

```markdown
그게 뭐 사실은 리액트 내부 구조는 매우 복잡하긴 한데
순수 자바스크립트로 리액트 비슷하게 만들 때
말씀하신 것 같은 구독 반응형 상태 같은 걸 만들어요
생각보다 쉽게 만들 수 있어요. 16줄 이내로?
입사할 때 과제로도 많이 낸답니다
```

질문: 이것도 구독 반응형 상태를 만든 건가요...?(해석: 리액트처럼 되기 위해 자바스크립트가 구독 반응형 상태를 만든 것이냐)

```html
<html>
<head>
</head>
<body>
  <h2 id="title">클릭 이벤트를 붙여보자</h2>
  <article id="mission">
    <p>JS를 이용해서 숫자증가버튼을 클릭했을때 span의 숫자가 1씩 올라가게 해주세요.</p>
  </article>
  <div id="container">
    <button id="plus">숫자증가</button>
		<button id="minus">숫자감소</button>
		<button id="reset">초기화</button>
    <span>0</span>
  </div>
</body>
</html>
```

```jsx
let container = document.querySelector('#container');
const plusBtn = container.querySelector('#plus');
const minusBtn = container.querySelector('#minus');
const number = container.querySelector('span');
const reset = container.querySelector('#reset');

plusBtn.addEventListener('click',function(){
   let count = Number(number.textContent)
    count = count + 1;
    number.textContent = count;
});
minusBtn.addEventListener('click',function(){
   let count = Number(number.textContent)
    count = count - 1;
    number.textContent = count;
});
reset.addEventListener('click',function(){
   let count = Number(number.textContent)
    count = 0;
    number.textContent = count;
});
```

답: 

```html
아뇨
이거는 명령형의 전형적인 예시인데
보면 count 값을 바꿀 때마다
수동으로 textContent의 값을
count랑 같게 동기화 시켜주고 있지요.
그러면
어떻게 하면 되느냐
```

```jsx
let container = document.querySelector('#container');
const plusBtn = container.querySelector('#plus');
const minusBtn = container.querySelector('#minus');
const number = container.querySelector('span');
const reset = container.querySelector('#reset');

let count = 0;
function setCount(newValue){
   count = newValue;
   number.textContent = count;
} 

plusBtn.addEventListener('click',function(){
    setCount(count + 1);
});
minusBtn.addEventListener('click',function(){
    setCount(count - 1);
});
reset.addEventListener('click',function(){
   setCount(0);
});
```

```jsx
이러면
리액티브입니다.
setCount라는 함수로 count를 변경하면
화면에 바꾸는 일도 알아서 해주고
count 변수의 값이랑 화면이 동기화 되지요.
(여기서 더 나아가면 observable이라고 구독할 수 있는 것도 만들고 하는데. 일단 생략...)
```

질문: 

```jsx
앗 조금 이해안가는 부분이 있는데, setCount라는 함수로 count를 변경하면
 화면에 바꾸는 일을 알아서 해준다고 하셨는데 그건 어떻게 알 수 있나요???"
```

답: 

```jsx
저 number.textContent = count
하는 부분이
HTML에 있는 span의 textContent를
count 값으로 바꿔주는 건데
명령형에서는 그걸 매번 해주지만
반응형에서는 상태를 바꿀 때 항상 같이 일어나게 해요
그래서 setCount를 쓰면
상태 값도 바뀌고 그 값에 맞게 화면도 바뀌는 거죠
```

### 내일은 위의 질문&답변에 대해 공부해보고 블로그에 포스팅을 할 것이다!