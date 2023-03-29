import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('App이 맨 처음 렌더링될 때 이게 보임');
  }, []);

  useEffect(() => {
    console.log('App이 렌더링될 때마다 이게 보임');
  });

  useEffect(() => {
    console.log('count가 변경될 때마다 이게 보임');
  }, [count]);

  useEffect(() => {
    console.log('text가 변경될 때마다 이게 보임');
  }, [text]);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <br />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App
