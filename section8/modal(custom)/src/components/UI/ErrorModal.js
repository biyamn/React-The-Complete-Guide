import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.errorHandler} />;
}

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.errorHandler}>Okay</Button>
      </footer>
    </Card>
    )
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop errorhandler={props.errorhandler} />, document.getElementById('backdrop-root'))}
    </>
  );
};

export default ErrorModal;