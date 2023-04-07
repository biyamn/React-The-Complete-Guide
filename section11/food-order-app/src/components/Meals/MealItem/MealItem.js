import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  // 앞에 '$'를 붙여서 2자리까지 출력
  const price = `$${props.price.toFixed(2)}`

  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
  );
};

export default MealItem;