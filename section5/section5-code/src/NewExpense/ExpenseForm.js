import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // 여러 개의 state를 사용하는 방법
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }
  
  // 한 개의 state를 사용하는 방법
  // const [userInput, setUserInput]= useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // 한 개의 state를 사용하는 방법 - 항상 최신의 상태를 유지하는 좋은 방법
  // const titleChangeHandler = (e) => {
  //   setEnteredTitle((prevState) => {
  //     return { ...prevState, enteredTitle: e.target.value};
  //   )};
  // }

  // 한 개의 state를 사용하는 방법 - 특정 상황에서 문제가 될 수 있는 방법
  // const amountChangehandler = (e) => {
  //   setEnteredAmount({
  //     ...userInput,
  //     enteredAmount: e.target.value
  // });
  // }

  // const dateChangehandler = (e) => {
  //   setEnteredDate({
  //     ...userInput,
  //     enteredDate: e.target.value
  //   });
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>품목</label>
          <input type='text' value={enteredTitle || ''} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>가격</label>
          <input type='number' value={enteredAmount || ''} min='1' step='1' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>날짜</label>
          <input type='date' value={enteredDate || ''} min='2023-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>등록하기</button>
      </div>
    </form>
  )
}

export default ExpenseForm;