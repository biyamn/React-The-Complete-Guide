import './App.css';
import Input from './components/Input/Input';
import Goals from './components/Goals/Goals';
import { useState } from 'react';

function App() {
  const [displayInputs, setDisplayInputs] = useState([]);

  const onSaveGoal = (goal) => {
    setDisplayInputs([...displayInputs, goal]);
  }
  
  return (
    <div className="App">
      <Input onSaveGoal={onSaveGoal}/>
      <Goals input={displayInputs}/>
    </div>
  );
}

export default App;
