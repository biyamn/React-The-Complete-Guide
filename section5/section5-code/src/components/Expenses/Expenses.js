import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from 'react';

const Expenses = (props) => {
  const [month, setmonth] = useState('1');

  const saveMonthHandler = (selectedMonth) => {
    setmonth(selectedMonth);
  }

  const filtered = props.items.filter((expense) => {
    return (
      (expense.date.getMonth() + 1).toString() === month
    )
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={month} 
          onSaveMonthHandler={saveMonthHandler} 
        />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  )
}

export default Expenses;