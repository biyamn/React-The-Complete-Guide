import { useState } from 'react';
import styles from './TodoInput.module.css'

const TodoInput = (props) => {
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
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <input className={!isValid ? styles.input_invalid : styles.input} type='text' value={enteredGoal} onChange={goalChangeHandler} />
        <button className={styles.button} type='submit'>추가</button>
      </form>
    </div>
  );
};

export default TodoInput;