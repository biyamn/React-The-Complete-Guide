import React from 'react';
import Green from './Green';

const Purple = (props) => {

  const dataFromGreen = (parameter) => {
    const data = parameter;
    props.dataFromPurple(data);
  }

  return (
    <div className='container-purple'>
      <h1>개인정보 입력 폼</h1>
      <Green dataFromGreen={dataFromGreen} />
    </div>
  );
};

export default Purple;