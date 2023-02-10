import './App.css';
import Todo from './components/Todo/Todo/Todo';
import Goal from './components/Goal/Goal/Goal';

const App = () => {
  return (
    <div className="App">
      <div className="box">
        <Goal />
        <Todo />
      </div>
    </div>
  );
}

export default App;
