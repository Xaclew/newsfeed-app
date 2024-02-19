import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to your News Feed App!</h1>
      <p>This is the home page of your application. You can use this space to:</p>
      <ul>
        <li>
          <Link to="/news">Browse the latest news articles.</Link>
        </li>
        <li>
          <Link to="/about">Learn more about this application.</Link>
        </li>
        {/* Add additional links based on your app's features */}
      </ul>
    </div>
  );
}

export default Home;
