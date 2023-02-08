import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
import { useState } from 'react';

const Expenses = (props) => {
  const [month, setMonth] = useState('1');

  const saveMonthHandler = (selectedMonth) => {
    setMonth(selectedMonth);
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
        <ExpensesChart month={month} expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  )
}

export default Expenses;