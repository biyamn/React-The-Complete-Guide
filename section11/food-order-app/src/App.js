import React, { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContext from './store/cart-context';

function App() {
  // Cart가 여기 있기 때문에 여기에 state를 만든다
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartContext>
      {/* 나는 Cart를 Modal 안의 Overlay 안에 넣었는데 강의에서는 Cart를 App 안의 Header 위에 넣었음. 
      즉 Cart(장바구니) 자체가 모달임. 'Your Cart'를 눌렀을 때 장바구니 구매 목록 모달이 나오므로 */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
