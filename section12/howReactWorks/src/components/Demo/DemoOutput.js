import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  // console.log('매번 같은 props를 받는 DemoOutput에 React.memo를 적용함');

  return (
    <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
  );
};

export default React.memo(DemoOutput);
// export default DemoOutput;