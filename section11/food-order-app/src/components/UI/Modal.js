import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Cart from '../Cart/Cart';

const Backdrop = () => {
  return <div className={classes.backdrop} />
}

const Overlay = (props) => {
  return <Cart className={classes.modal} />
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay-root"))}
    </>
  );
};

export default Modal;