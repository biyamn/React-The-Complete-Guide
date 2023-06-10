import React from 'react';
import MainNavigation from './../components/MainNavigation';

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>에러 발생!~!!!</h1>
        <p>이 페이지를 찾을 수 없음!!!!!</p>
      </main>
    </>
  );
};

export default Error;