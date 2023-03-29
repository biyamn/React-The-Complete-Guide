import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);

  const textChangeHandler = (event) => {
    setText(event.target.value);
    console.log(typeof(text));
    console.log(text);
    console.log(text.trim().length);
    console.log(text.trim().length > 3);
    // text가 아니라 event.target.value를 써야 하는 이유: event.target.value는 바로 바뀌는데 text는 App이 재렌더링되기 전까지 바뀌지 않아서(비동기라서)
    setInputIsValid(event.target.value.trim().length > 9);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={text} onChange={textChangeHandler} placeholder="10글자 이상 입력해주세요" />
      <button type="submit" disabled={!inputIsValid}>전송</button>
    </form>
  )
}

export default App
