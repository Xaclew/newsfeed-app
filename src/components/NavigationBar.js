import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/NavigationBar.css';

function NavigationBar() {
  const { isLoggedIn, username, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="navigation-bar">
      <ul className="navigation-links">
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        <li key="about">
          <Link to="/about">About</Link>
        </li>
        <li key="news-feed">
          <Link to="/news">News Feed</Link>
        </li>
        {isLoggedIn && (
          <li key="profile">
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {isLoggedIn && (
          <li key="settings">
            <Link to="/settings">Settings</Link>
          </li>
        )}
        {isLoggedIn && (
          <li key="logout" className="logout-button">
            <button onClick={handleLogoutClick}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
