import { useState } from 'react';

const Form = ({ onSaveData }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const data = {
    username: enteredUsername,
    age: enteredAge
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    onSaveData(data);
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type='text' value={enteredUsername} onChange={usernameChangeHandler} />
      </div>
      <div>
        <label>Age(Years)</label>
        <input type='text' value={enteredAge} onChange={ageChangeHandler} />
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
};

export default Form;