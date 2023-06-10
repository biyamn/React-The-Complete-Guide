import React from 'react';
import { Outlet } from "react-router-dom";
import MainNavigation from '../components/MainNavigation';

// Outlet은 child routes를 렌더링하기 위해 필요하다고 함
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;