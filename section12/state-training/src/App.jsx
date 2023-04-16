import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  // const plusHandler = () => {
  //   // 이렇게 하면 콘솔에 최신의 값이 찍힘
  //   setCount(prev => {
  //     console.log(prev)
  //     return prev + 1
  //   });
  //   setCount(prev => {
  //     console.log(prev)
  //     return prev + 2
  //   });
  //   setCount(prev => {
  //     console.log(prev)
  //     return prev + 3
  //   });

    // 이렇게 하면 마지막 setCount만 적용되어 3씩 증가함
    // setCount(count + 1); 
    // console.log(count);
    // setCount(count + 2);
    // console.log(count);
    // setCount(count + 3);
    // console.log(count);

    // 이렇게 하면 모든 setCount가 적용되어 1+2+3, 총 6씩 증가함
    // setCount(count => count + 1); 
    // console.log(count);
    // setCount(count => count + 2);
    // console.log(count);
    // setCount(count => count + 3); 
    // console.log(count);
  // }

   // 메모 - 아래 두 개는 같은 뜻
    // setCount(prev => prev + 1);
    // setCount(function(prev) {
    //   return prev + 1
    // })

  const plusHandler = () => {
    setCount(prev => {
      console.log('첫번째 prev: ', prev) // 0 
      return prev + 1
    });
    console.log('첫번째 setCount 뒤에 있는 count: ', count); // 0
    setCount(prev => {
      console.log('두번째 prev: ', prev) // 1 
      return prev + 2
    });
    console.log('두번째 setCount 뒤에 있는 count: ', count); // 0
    setCount(prev => {
      console.log('세번째 prev: ', prev) // 3 
      return prev + 3
    });
    console.log('세번째 setCount 뒤에 있는 count: ', count); // 0 
  }

  const minusHandler = () => {

    // 이렇게 하면 콘솔에 최신의 값이 찍힘
    setCount(prev => {
      console.log(prev)
      return prev - 1
    });
    setCount(prev => {
      console.log(prev)
      return prev - 2
    });
    setCount(prev => {
      console.log(prev)
      return prev - 3
    });

    // setCount(count - 1); 
    // console.log(count);
    // setCount(count - 2);
    // console.log(count); 
    // setCount(count - 3); 
    // console.log(count);

    // setCount(count => count - 1); 
    // console.log(count);
    // setCount(count => count - 2); 
    // console.log(count);
    // setCount(count => count - 3); 
    // console.log(count);
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <div>
        <button className='plus' onClick={plusHandler}>+</button>
        <button className='minus' onClick={minusHandler}>-</button>
      </div>
      <div>
        <button onClick={() => {
          console.log(value); // 0 200 400
          setValue(prevValue => {
            console.log(prevValue); // 0 200 400
            return prevValue + 100
          });
          console.log(value); // 0 200 400
          setValue(prevValue => {
            console.log(prevValue); // 0 200 400
            return prevValue + 100
          });
          console.log(value); // 100 300 500

          // console.log(value); // 0 100 200
          // setValue(value + 100);
          // console.log(value); // 0 100 200
          // setValue(value + 100);
          // console.log(value); // 0 100 200

          }}>setValue(100)</button>
      </div>
    </div>
  )
}

export default App;