import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <br />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App
