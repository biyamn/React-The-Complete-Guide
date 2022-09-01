# 0807 - 컴포넌트 만들기, props 전달해보기

# 첫 번째 사용자 지정 컴포넌트 만들기

- 리액트에서 이름을 만들 때는 대문자로 시작하는 한 단어이고 한 단어 안에 여러 단어를 결합하면 중간에 시작하는 서브 단어는 대문자로 시작해야 한다. Ex) `ExpenseItem.js`
- 리액트에 있는 **컴포넌트**는 단지 **자바스크립트 함수**이며 **html**코드를 반환하는 함수이다.
    
    ```jsx
    function ExpenseItem() {
      return <h2>Expense item!</h2>
    }
    ```
    
- `export default ExpenseItem;`
    - 이렇게 내보내기를 하지 않으면 이 파일 안에서만 함수를 쓸 수 있어 별 쓸모가 없다.
- 파일 이름인 ExpenseItem을 html처럼 사용할 수 있다. 대분자로 시작한다는 점만 html과 다르다.
    - 소문자로 시작하는 요소는 내장된 html기능이기 때문에 내부에서 찾는다
    - 대문자로 시작하는 요소는 누군가에 의해 정의된 요소이다
    
    ```jsx
    <ExpenseItem />
    ```
    

# 더 복잡한 JSX코드 작성

```jsx
function ExpenseItem() {
  return (
    **<div>**
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
      </div>
      <div>$294.67</div>
    **</div>**
  );
}
```

JSX를 작성할 때 return문 안에서 루트 요소는 하나여야 한다. 

(전체 코드를 <div></div>로 묶어줬음)

# 기본 CSS 스타일 추가

```jsx
import './ExpenseItem.css';
```

CSS 파일을 만들고 CSS를 적용할 파일 위에 이렇게 적어줘야 한다. 

# JSX에서 동적 데이터 출력 및 표현식 작업하기

```jsx
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
}
```

여기서 Date(March 28th 2021)과 price($294.67) 등은 하드코딩되어있다. 하지만, 그렇지 않고 동적으로 할당될 때가 많다. 

→ html 코드로 고정해서는 안된다. 대신 어딘가로부터 데이터를 받아서 동적으로 출력한다. (사용자 입력 등)

`{  }` 리액트에서 이러한 중괄호는 자바스크립트를 실행할 수 있게 한다. 예를 들어 { 1 + 1 } 은 화면에 2를 출력한다. 

그렇다면 `const expenseDate= new Date(2021, 2, 28);` (여기서 2는 인덱스 2로 3월을 의미한다) 이렇게 상수에 저장된 값을 출력하려면? 그냥 `{}` 안에 넣어주면 된다!

근데 `Date`라는 객체를 문자열로 출력하려면 `.toISOString()`를 사용한다! (2021-03-27T15:00:00.000Z라고 출력됨) `.toLocaleDateString()` 를 하면 2021. 3. 28.가 출력된다.

날짜를 정해준 Date가 아니라 그냥 `new Date()`라면 2022-08-07T10:10:52.024Z 이렇게 출력된다. 이때 `expenseDate.toLocaleDateString()`를 사용하면 이렇게 된다! (2022. 8. 7.)

# “props”를 통해 데이터 전달하기

### props

- 재사용 가능한 컴포넌트를 만들 수 있게 해준다
- 다른 컴포넌트로 데이터를 전달할 수 있게 해준다

```jsx
function ExpenseItem(**props**) {}
```

- 여기서 props는 한 개이지만 모든 속성을 받게된다. (사용자 지정 요소)

```jsx
// App.js
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper', 
      amount: 94.67, 
      date: new Date(2021, 0, 2)
    },
    {
      id: 'e2',
      title: 'Bycicle', 
      amount: 704.67, 
      date: new Date(2021, 1, 15)
    },
    {
      id: 'e3',
      title: 'Jelly', 
      amount: 29.67, 
      date: new Date(2021, 2, 19)
    },
    {
      id: 'e4',
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2021, 2, 28)
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
```

- App.js에 const expenses로 데이터를 만들어준다. 그리고 <ExpenseItem />에 title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} 이런식으로 넣어준다.

```jsx
// ExpenseItem.js
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
```

- ExpenseItem(props)로 모든 데이터를 받아와준다. 그럼 expense의 각 인덱스에 맞는 데이터를 props.으로 출력해줄 수 있다.
- 여기서 props는 data 등 사용자가 지정할 수 있다.