import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import AddNewExpenseForm from './AddNewExpenseForm';

const NewExpense = (props) => {
  const [isAddNewExpense, setIsAddNewExpense] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      { isAddNewExpense ? 
      <AddNewExpenseForm isAddNewExpense={isAddNewExpense} setIsAddNewExpense={setIsAddNewExpense} />
      : <ExpenseForm isAddNewExpense={isAddNewExpense} setIsAddNewExpense={setIsAddNewExpense} onSaveExpenseData={saveExpenseDataHandler} /> 
      }
    </div>
  )
};

export default NewExpense;