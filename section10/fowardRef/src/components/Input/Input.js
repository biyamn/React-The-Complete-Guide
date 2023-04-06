import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // 이렇게 하면 무조건 뒤에 있는 password에 포커스가 감
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [])

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;