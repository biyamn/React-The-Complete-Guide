import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

// Modal 안에 Cart가 있는 게 아니라 Cart 안에 Modal이 있는 거였음.
// 그니까 Cart에 장바구니 한 목록들이 있고 거기서 Modal을 띄우면 장바구니 목록을 모달에 보여주는 거임
const Cart = (props) => {
  const cartItems = (
  <ul className={classes['cart-items']}>
      {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => 
        <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;