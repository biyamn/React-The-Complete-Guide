import React, { useContext } from 'react';
import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const authCxt = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!authCxt.isLoggedIn && <Login />}
        {authCxt.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
