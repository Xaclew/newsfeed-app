import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul >
        <li key='home'>
          <Link to="/" >Home</Link>
        </li>
        <li key='about'>
          <Link to="/about" >About</Link>
        </li>
        <li key='news-feed'>
          <Link to="/news" >News Feed</Link>
        </li>
        <li key='login'>
          <Link to="/login" >Login</Link>
        </li>
        <li key='register'>
          <Link to="/register" >Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
