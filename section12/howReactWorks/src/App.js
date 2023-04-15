import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // useCallback을 사용하지 않았을 때
  // const toggleParagraphHandler = () => {
  //   // 왜 이렇게 하는 것보다 prev를 하는 게 좋은지 이해 못함...
  //   // setShowParagraph(!showParagraph);
  //   setShowParagraph(prevShowParagraph => !prevShowParagraph);
  // };

  // useCallback을 사용했을 때
  // React.memo(Button)이 정상적으로 동작하게 함
  // 근데 allowToggle도 상수로 저장하여 allowToggle 값이 바뀌더라도 useCallback 안에서는 바뀌지 않음
  // 변수가 저장된 시점의 값을 사용하기 때문
  // 그래서 [] 안에 allowToggle를 넣어준다. 그럼 allowToggle가 바뀌었을 때만 함수가 재생성됨
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* show={false}이면 DemoOutput 컴포넌트가 계속 리렌더링 될 필요가 없음 
       그래서 매번 리렌더링 될 필요가 없으므로 React.memo를 쓴다 */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
