import { useState, useEffect } from "react";
import "./App.css";

function App() {
  console.log('App()이 리렌더링됩니다.')
  const [text, setText] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);

  const textChangeHandler = (event) => {
    setText(event.target.value);
    // useEffect를 이 부분에 넣으면 안됨: https://legacy.reactjs.org/docs/hooks-rules.html
  };

  // 마지막 입력값에서 500ms보다 더 오래 아무 입력도 없으면 입력값 검사를 할 거임
  useEffect(() => {
    console.log(`텍스트가 바뀌었어요! ${text}`)
    //
    const timer = setTimeout(() => {
      // text가 아니라 event.target.value를 써야 하는 이유: event.target.value는 바로 바뀌는데 text는 App이 재렌더링되기 전까지 바뀌지 않아서(비동기라서)
      console.log("10글자 이상인지 검사합니다");
      setInputIsValid(text.trim().length > 9);
    }, 500);

    // return 부분은 useEffect가 반환하는 값임. useEffect의 기능과 별개로! clearTimeout을 쓰기 위해 useEffect를 쓴 것
    return () => {
      console.log('텍스트가 바뀌어서 새 useEffect가 실행될 거래요! cleanup!')
      clearTimeout(timer)
    }
    // [text]가 있는 이유: useEffect 안에 있는 함수가 원래 textChangeHandler 안에 있던 거임. textChangeHandler는 text가 바뀔 때 실행되는 거니까 [text]가 있는 게 맞음
  }, [text]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={textChangeHandler}
        placeholder="10글자 이상 입력해주세요"
      />
      <button type="submit" disabled={!inputIsValid}>
        전송
      </button>
    </form>
  );
}

export default App;
