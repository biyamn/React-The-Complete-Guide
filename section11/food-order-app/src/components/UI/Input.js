import React, { forwardRef } from 'react';
import classes from './Input.module.css';

// forwardRef를 하면 ref를 얻을 수 있고 이를 컴포넌트 함수 내에서 사용할 수 있다
const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      {/* props.input이 가지는 모든 속성 키,값 쌍을 가져옴 */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;