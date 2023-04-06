import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      {/* 하이픈(-)이 있으므로 .을 사용할 수 없어서 대괄호를 쓴다고 함: https://github.com/facebook/create-react-app/issues/11155*/}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='맛있는 음식으로 가득찬 식탁!' />
      </div>
    </>
  );
};

export default Header;