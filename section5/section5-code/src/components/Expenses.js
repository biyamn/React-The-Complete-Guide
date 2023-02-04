import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';

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
        <ExpensesFilter selected={month} onSavemonthHandler={savemonthHandler} />
        {filtered.length === 0 ? (
          <p>지출이 없습니다.</p>
        ) : (
          filtered.map((expense) => (
            <ExpenseItem 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date} 
              key={expense.id}
            />
          ))
        )}
      </Card>
    </div>
  )
}

export default Expenses;