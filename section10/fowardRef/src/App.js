import React, { useContext } from 'react';

import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

// 컨텍스트 설명 잘 된 블로그: https://velog.io/@velopert/react-context-tutorial
// 공식 문서: https://react.dev/reference/react/createContext
function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
