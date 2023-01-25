## 폴더 설명
섹션 3 - 43. 컴포지션"의 개념("children prop")을 듣고 개인적으로 합성 컴포넌트(Card.js)를 만드는 실습을 하기 위해 만든 폴더입니다. 

<br>

## 코드 설명
합성 컴포넌트로 만들 Card.js에는 아래와 같은 속성이 있다. 테두리를 둥글게 하는 속성/그림자 속성/마진 속성을 공통으로 갖는 부분에 이 Card 컴포넌트를 쓸 것이다. 

```jsx
// Card.css

.card {
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  margin: 10px;
}
```

```jsx
// Card.js

import './Card.css';

function Card(props) {
  return (
    <div className=card>
    </div>
  )
}

export default Card;
```

App.js에 이렇게 적어줬다.

```jsx
import './App.css';
import Profile from './components/Profiles';
import Card from './components/Card';

function App() {
  return (
    <Card className='profiles'>
      <Profile />
    </Card>
  );
}

export default App;
```

App.js 안에 있는 Profile 컴포넌트 안에는 다음과 같이 적어줬다.

```jsx
import Card from "./Card";

function Profile({data}) {

  return (
      <Card className='profile'>
        <h2>profile</h2>
        <div>이름: {data.name}</div>
        <div>나이: {data.age}</div>
        <div>mbti: {data.mbti}</div>
      </Card>
  )
}

export default Profile;
```

이렇게만 하면 화면에 아무것도 보이지 않는다. 왜냐하면 Card 컴포넌트는 단독 컴포넌트가 아닌 다른 컴포넌트를 감싸는 래퍼 컴포넌트이기 때문이다.

리액트에서 래퍼 컴포넌트는 안에 작성된 요소들이 children이라는 props로 컴포넌트에 전달되는데, **래퍼 컴포넌트에서는 반드시 이 `children`을 리턴하는 코드를 포함시켜야 화면에 노출된다.**

그래서 `{props.children}`을 써줬다. 하지만 이래도 완벽하지 않다. 왜냐하면, className을 넘겨주지 않았기 때문이다. 

사용자 정의 컴포넌트는 지원하라고 지시한 것만 지원한다. 따라서 Card 컴포넌트에 className이 설정되길 원한다면 코드를 수정해야 한다. 아래에서는 `classes`라는 변수를 만들어서 props.className으로 각 컴포넌트의 이름을 받아 className에 ‘card’와 함께 합쳐줬다. 이렇게 하면 card와 각 className 모두를 className에 포함시켜 이전과 다르게 이에 해당하는 모든 css를 적용시킬 수 있다.

```jsx
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card;
```

<br>

## 최종 화면
![d](https://user-images.githubusercontent.com/101965666/214580032-f1e8cf61-c0b6-40cb-be87-d271c79128f6.PNG)
