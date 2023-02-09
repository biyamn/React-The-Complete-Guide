import { useState } from 'react';
import './Input.css';
const Input = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (e) => {
    setEnteredGoal(e.target.value);
    setIsValid(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredGoal === '') {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onSaveGoal(enteredGoal)
    setEnteredGoal('');
  }

  return (
    <form onSubmit={submitHandler}>
      <label className={!isValid ? 'invalid' : ''}>수업 목표</label>
      <input className={!isValid ? 'invalid' : ''} type='text' value={enteredGoal} onChange={goalChangeHandler} />
      <button type='submit'>목표 추가하기</button>
    </form>
  );
};

export default Input;