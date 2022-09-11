// 기술적으로는 필요없으나 앞으로 수많은 리액트 프로젝트에서 보게 될 것이고,
// JSX가 이 리액트 라이브러리를 사용하고 있다는 것을 분명히 하고 싶다  
import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData)
  } 
  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
  </div>
};

export default NewExpense;