import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.errorHandler} />
}

const Overlay = (props) => {
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
      {ReactDOM.createPortal(<Backdrop errorHandler={props.errorHandler} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} errorHandler={props.errorHandler}/>, document.getElementById("overlay-root"))}
    </>
  );
};

export default ErrorModal;