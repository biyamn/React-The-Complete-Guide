import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Cart from '../Cart/Cart';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const Overlay = props => {
  const onSetCartIsShown = props => {
    props.onSetCartIsShown(props.cartIsShown)
  }

  return <Cart className={classes.modal} cartIsShown={props.cartIsShown} setCartIsShown={props.setCartIsShown} onSetCartIsShown={onSetCartIsShown} />
}

const Modal = props => {
  

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={() => props.setCartIsShown(false)} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay-root"))}
    </>
  );
};

export default Modal;