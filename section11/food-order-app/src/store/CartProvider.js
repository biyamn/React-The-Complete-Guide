import React, { useReducer } from 'react';
import CartContext from './cart-context';

// 음식 기준으로 수량을 관리하되 장바구니 항목의 가격을 모두 더한 것도 관리한다
const defaultCartState = {
  items: [],
  totalAmount: 0
}

// 컴포넌트가 재랜더링될 때 cartReducer는 다시 평가되지 않음
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

  }

  return defaultCartState;
}

const CartProvider = props => {

  const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = id => {
  dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
};

export default CartProvider;