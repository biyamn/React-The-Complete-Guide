import { useState } from 'react';
import './TodoInput.css';
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
    <form onSubmit={submitHandler}><input className={!isValid ? 'invalid' : ''} type='text' value={enteredGoal} onChange={goalChangeHandler} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Input;