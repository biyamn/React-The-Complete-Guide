import React from 'react';

const Blue = (props) => {
  console.log(props.data);
  return (
    <div className='container-blue'>
      <h1>기입한 정보가 정확한지 확인하세요</h1>
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
      <p>{props.data.date}</p>
    </div>
  );
};

export default Blue;