import React, { useState } from 'react';

const Green = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');

  const setNameHandler = (e) => setName(e.target.value);
  const setAgeHandler = (e) => setAge(e.target.value);
  const setDateHandler = (e) => setDate(e.target.value);

  return (
    <div className='container-green'>
      <input type='text' value={name} onChange={setNameHandler} placeholder='이름을 입력하세요'></input>
      <input type='number' value={age} onChange={setAgeHandler} placeholder='나이를 입력하세요'></input>
      <input type='date' value={date} onChange={setDateHandler}></input>
      <button type='submit'>전송</button>
    </div>
  );
};

export default Green;