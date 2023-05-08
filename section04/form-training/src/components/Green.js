import React, { useState } from 'react';

const Green = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeAge = e => setAge(e.target.value);
  const handleChangeDate = e => setDate(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    
    const data = {
      name: name,
      age: age,
      date: date,
    }


    setName('');
    setAge('');
    setDate('');

    props.dataFromGreen(data);
  }

  return (
    <form onSubmit={handleSubmit} className='container-green'>
      <input type='text' value={name} onChange={handleChangeName} placeholder='이름을 입력하세요'></input>
      <input type='number' value={age} onChange={handleChangeAge} placeholder='나이를 입력하세요'></input>
      <input type='date' value={date} onChange={handleChangeDate}></input>
      <button type='submit'>전송</button>
    </form>
  );
};

export default Green;