import './App.css';
import Profile from './components/Profiles';
import Card from './components/Card';
import Hamster from './components/Hamster';

function App() {
  return (
    <div>
      <Card className='profiles'>
        <Profile />
      </Card>
      <Hamster>
        <h1>hamham</h1>
        <p>zikzik</p>
      </Hamster>
    </div>
  );
}

export default App;
