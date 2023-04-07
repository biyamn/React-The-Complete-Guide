import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>
        {props.meal.name}
      </h3>
      <div className={classes.description}>
        {props.meal.description}
      </div>
      <div className={classes.price}>
        {props.meal.price}
      </div>
    </div>
  );
};

export default MealItem;