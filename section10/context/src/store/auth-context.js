import React from 'react';

const AuthContext = React.createContext({
  // App.js에서 AuthContext.Provider에 isLoggedIn과 onLogout을 쓸 건데 여기에 왜 중복으로 써주는지 궁금함. 
  // 초기값인가??아닌데 여기에 false라고 하면 절대 안바뀐다고 본 것 같은데
  isLoggedIn: false,
  onLogout: () => {}
});

export default AuthContext;