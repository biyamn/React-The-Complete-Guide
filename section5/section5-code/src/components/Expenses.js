import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const saveYearHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onSaveYearHandler={saveYearHandler} />
        {props.items.map((expense) => (
          <ExpenseItem 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;