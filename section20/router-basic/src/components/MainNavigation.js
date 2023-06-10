import React from 'react';
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;