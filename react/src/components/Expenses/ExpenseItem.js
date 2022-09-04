import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log(props.title);
  let title = props.title;

  function clickHandler1() {
    title='Updated!';
    console.log(title);
  };
  const clickHandler2 = () => {
    console.log('Clicked2!!!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler1}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
