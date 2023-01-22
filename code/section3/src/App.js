import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
