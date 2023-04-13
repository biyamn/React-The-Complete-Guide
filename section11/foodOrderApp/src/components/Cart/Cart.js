import React, { useContext } from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

// Modal 안에 Cart가 있는 게 아니라 Cart 안에 Modal이 있는 거였음.
// 그니까 Cart에 장바구니 한 목록들이 있고 거기서 Modal을 띄우면 장바구니 목록을 모달에 보여주는 거임
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
  <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          // bind()가 뭔지 찾아봐도 모르겠음. 나중에 문제가 생기면 여길 봐보자
          // 오 이거 Cart 안에서 -, + 누를 때 오류가 발생함.
          // Cannot read properties of undefined (reading 'toFixed')
          onRemove={cartItemRemoveHandler.bind(null, item.id)} 
          onAdd={cartItemAddHandler.bind(null, item)} 
          // remove={cartItemRemoveHandler} 
          // onAdd={cartItemAddHandler} 
        />
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;