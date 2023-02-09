import { useState } from 'react';

const Input = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  

  const goalChangeHandler = (e) => {
    setEnteredGoal(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveGoal(enteredGoal)
    
    setEnteredGoal('');

  }

  return (
    <form onSubmit={submitHandler}>
      <label>수업 목표</label>
      <input type='text' value={enteredGoal} onChange={goalChangeHandler}></input>
      <button type='submit'>목표 추가하기</button>
    </form>
  );
};

export default Input;