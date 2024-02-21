import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function NavigationBar() {
  const { isLoggedIn, username, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="navigation-bar">
      <ul>
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        <li key="about">
          <Link to="/about">About</Link>
        </li>
        <li key="news-feed">
          <Link to="/news">News Feed</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li key="profile">
              <Link to="/profile">Profile</Link>
            </li>
            <li key="settings">
              <Link to="/settings">Settings</Link>
            </li>
            <li key="logout">
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li key="login">
              <Link to="/login">Login</Link>
            </li>
            <li key="register">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
