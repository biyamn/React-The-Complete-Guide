import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const authCxt = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {authCxt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCxt.isLoggedIn && (
          <li>
            <button onClick={authCxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
