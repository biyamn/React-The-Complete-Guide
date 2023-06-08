import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>My Home Page</h1>
    <h2>
      Go to <Link to='/products'>Product Page</Link>
    </h2>
    </>
    
  );
};

export default Home;