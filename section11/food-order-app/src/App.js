import React, { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const onSetCartIsShown = props => {
    setCartIsShown(props.cartIsShown);
  }
  return (
    <>
      <Header cartIsShown={cartIsShown} setCartIsShown={setCartIsShown} onSetCartIsShown={onSetCartIsShown} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
