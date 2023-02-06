import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '세탁비',
    amount: 1000,
    date: new Date(2023, 1, 21),
  },
  {
    id: 'e2',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 6, 28),
  },
  {
    id: 'e3',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 5, 12),
  },
  { 
    id: 'e4', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 5, 1) },
  {
    id: 'e5',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 8, 28),
  },
  {
    id: 'e6',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 8, 12),
  },
  { 
    id: 'e7', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 8, 1) },
  {
    id: 'e8',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 12, 28),
  },
  {
    id: 'e9',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 3, 12),
  },
  { 
    id: 'e10', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 4, 1) },
  {
    id: 'e11',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 3, 28),
  },
  {
    id: 'e12',
    title: '세탁비',
    amount: 1000,
    date: new Date(2023, 7, 21),
  },
  { 
    id: 'e13', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 6, 1) },
  {
    id: 'e14',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 4, 28),
  },
  {
    id: 'e15',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 4, 12),
  },
  { 
    id: 'e16', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 3, 1) },
  {
    id: 'e17',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 10, 28),
  },
  {
    id: 'e18',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 12, 12),
  },
  {
    id: 'e19',
    title: '세탁비',
    amount: 1000,
    date: new Date(2023, 11, 21),
  },
  { 
    id: 'e20', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 12, 1) },
  {
    id: 'e21',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 9, 12),
  },
  { 
    id: 'e22', 
    title: '중고 아이패드', 
    amount: 300000, 
    date: new Date(2023, 1, 1) },
  {
    id: 'e23',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 7, 12),
  },
  {
    id: 'e24',
    title: '세탁비',
    amount: 1000,
    date: new Date(2023, 8, 21),
  },
  {
    id: 'e25',
    title: '쌀',
    amount: 25000,
    date: new Date(2023, 11, 28),
  },
  {
    id: 'e26',
    title: '볼펜',
    amount: 4500,
    date: new Date(2022, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
