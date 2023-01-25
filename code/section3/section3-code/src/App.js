import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: '세탁비',
      amount: 1000,
      date: new Date(2023, 0, 21),
    },
    { 
      id: 'e2', 
      title: '중고 아이패드', 
      amount: 300000, 
      date: new Date(2023, 0, 1) },
    {
      id: 'e3',
      title: '쌀',
      amount: 25000,
      date: new Date(2023, 0, 28),
    },
    {
      id: 'e4',
      title: '볼펜',
      amount: 4500,
      date: new Date(2023, 0, 12),
    },
  ];
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
