// state를 저장하는 하나의 중앙 저장소
import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  // 여기 있는 것 defaultValue임.
  // defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.
  // By default, the values they receive will be the default values you have specified when creating the contexts. However, by itself this isn’t useful because the default values never change. Context is useful because you can provide other, dynamic values from your components:
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  return (
  <AuthContext.Provider 
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
  }}
  >
    {props.children}</AuthContext.Provider>
  )
}
export default AuthContext;