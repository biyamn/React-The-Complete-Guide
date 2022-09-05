# 0905 - State 사용 이유 이해하기(2)

어제에 이어 State를 왜 쓰는지 알아보도록 하자. 

쓰는 이유는 값이 변했을 때 화면에 반영되게 하려고! 일반 변수는 변경되어도 화면이 변하지 않음

강의를 쭉 들어보다가 다 듣고 이해한 후에 블로그를 쓰면서 더 깊게 이해해보도록 하자.

# State와 함께 일하기

- useState는 함수 안에서 직접적으로 선언되어야 한다. 예를 들면 ExpenseItem.js가 있다면 const ExpenseItem = (props) ⇒ {여기에 있어야 한다.
    
    이 안의 함수 안에 있을 수는 없다. (예외가 있다고 하지만 나중에 알려준다고 하심)
    
- **useState를 사용해서 상태를 등록하면(예: useState(props.title)) 항상 두 개의 값을 얻는데(예: [a, setA]) 이는 현재 상태값과 업데이트하는 함수이다. (중요!!!!!)**
    
    그리고 state가 변할 때마다 업데이트 함수를 호출한다!!
    
    JSX코드에서 그것을 출력하기 위해 { title }처럼 상태값을 사용하고 싶을 때마다 **첫번째 요소**를 사용한다. 
    
    상태가 변할 때마다 컴포넌트형 함수를 다시 실행하고 JSX코드를 다시 평가한다. (번역투여서 무슨 말인지 모르겠음)
    
    (응용프로그램에게 반응성을 추가하는 것이 state이다. state가 없다면 사용자 인터페이스는 절대 바뀌지 않을 것이다)
    
- 예시
    
    ```jsx
    const ExpenseItem = (props) => {
      const [title, setTitle] = useState(props.title);
    }
    ```
    
    - title의 초기값은 props.title이 된다
    - 왜 const로 선언하는가?
    - 첫번째 요소 title은 관리되고 있는 값을 가리킨다(무슨 말이냐) - 현재 상태값
    - 두번째 요소 setTitle은 나중에 새로운 title을 설정하기 위해 호출할 수 있는 함수이다.(무슨 말이냐2) - 그것을 업데이트하는 함수
    
    아래처럼 코드를 작성하면 `Change title` 버튼을 클릭했을 때 각 title이 변하는 것을 확인할 수 있다. 
    
    ```jsx
    import React, { useState } from 'react';
    
    import ExpenseDate from './ExpenseDate';
    import Card from '../UI/Card';
    import './ExpenseItem.css';
    
    const ExpenseItem = (props) => {
      const [title, setTitle] = useState(props.title);
    
      // function clickHandler1() {
      //   title='Updated!';
      // };
    
      const clickHandler = () => {
        // 왜 새로운 값을 할당하는 대신 state를 업데이트하는 함수를 사용하는 걸까?
        setTitle('Updated!');
        console.log('Updated!');
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
    
    1. Change title 버튼을 누르면 onClick 이벤트로 clickHandler 함수가 실행된다.
    2. clickHandler 함수에 가보면 setTitle(’Updated!’)로 기존의 title을 ‘Updated!’로 변경한다. 
    
    → 이는 일반 변수만을 선언하고 변경했을 때와는 다른 결과인데, 일반 변수가 변경되었을 때는 화면이 재렌더되지 않지만 선언된 state가 변경되면 화면이 재렌더되기 때문이다. 
    

# ****State는 여러 가지 방법으로 업데이트될 수 있다!****

- 지금까지는 유저 이벤트(클릭과 같은) 발생 시 상태를 업그레이드했다. 이는 일반적이지만, 상태 업데이트에 꼭 필요한 것은 아니다.
- 어떤 이유로든 상태를 업데이트할 수 있다!
    - 예) 타이머가 만료됐을 때 상태를 업데이트할 수 있다(`setTimeout()`)