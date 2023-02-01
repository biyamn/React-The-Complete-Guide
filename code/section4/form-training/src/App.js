import './App.css';
import Purple from './components/Purple';
import Blue from './components/Blue';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const dataFromPurple = (parameter) => {
    setData(parameter);
  }

  return (
    <div className='container-red'>
      <Purple dataFromPurple={dataFromPurple}/>
      <Blue data={data} />
    </div>
  );
}

export default App;
