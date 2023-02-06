import { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [month, setmonth] = useState('1');

  const savemonthHandler = (selectedmonth) => {
    setmonth(selectedmonth);
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
          onSavemonthHandler={savemonthHandler} 
        />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  )
}

export default Expenses;