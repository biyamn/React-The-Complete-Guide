import React from 'react';
import classes from './Cart.module.css';

// 장바구니 컴포넌트. 상단의 'Your Cart' 버튼을 클릭하면 모달로 이 장바구니를 렌더링 할 거임
const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    {id: 'c1', name: 'Sushi', amount: 2, price: 12.99}
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <div className={props.className}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;