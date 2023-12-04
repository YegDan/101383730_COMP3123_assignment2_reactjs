import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <Link to="HomeScreen.jsx">Home</Link>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="Login.jsx">Login</Link>
          <Link to="Signup.jsx">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
