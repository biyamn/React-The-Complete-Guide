import React from 'react';

const AuthContext = React.createContext({
  // 여기 있는 것 defaultValue임.
  // defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.
  // By default, the values they receive will be the default values you have specified when creating the contexts. However, by itself this isn’t useful because the default values never change. Context is useful because you can provide other, dynamic values from your components:
  isLoggedIn: false,
  onLogout: () => {}
});

export default AuthContext;