import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Home.css'

function Home() {
  const { isLoggedIn, username } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home">
      <div className="header">
        <h1>Welcome to your News Feed App!</h1>
        {isLoggedIn ? (
          <p>Logged in as: {username}</p>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>
      <p>This is the home page of your application. You can use this space to:</p>
      <ul>
        <li key="home-news">
          <Link to="/news">Browse the latest news articles.</Link>
        </li>
        <li key="home-about">
          <Link to="/about">Learn more about this application.</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
