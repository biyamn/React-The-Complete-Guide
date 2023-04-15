import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    // 이렇게 하면 마지막 setCount만 적용되어 30씩 증가함
    setCount(count + 1); 
    setCount(count + 2);
    setCount(count + 3);

    // 이렇게 하면 모든 setCount가 적용되어 1+2+30, 총 33씩 증가함
    // setCount(count => count + 1); 
    // setCount(count => count + 2);
    // setCount(count => count + 3); 
  }

  const minusHandler = () => {
    setCount(count - 1); 
    setCount(count - 2); 
    setCount(count - 3); 

    // setCount(count => count - 1); 
    // setCount(count => count - 2); 
    // setCount(count => count - 3); 
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <div>
        <button className='plus' onClick={plusHandler}>+</button>
        <button className='minus' onClick={minusHandler}>-</button>
      </div>
    </div>
  )
}

export default App;