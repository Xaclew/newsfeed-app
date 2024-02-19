import React, { useState, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import ArticleCard from './ArticleCard';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Check for user login and fetch articles
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch articles for logged-in user (replace with your logic)
        fetchArticles(currentUser.uid) // Assuming article fetching based on user ID
          .then((data) => setArticles(data))
          .catch((error) => console.error('Error fetching articles:', error));
      } else {
        setArticles([]); // Clear articles if user logs out
      }
    });

    return () => unsubscribe(); // Cleanup function to remove listener
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const fetchArticles = async (userId) => {
    // Replace with your actual logic to fetch articles based on user ID
    // This is a placeholder example using fetch
    const response = await fetch(`https://your-api.com/articles/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    return await response.json();
  };

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
          {articles.length > 0 ? (
            <div className="articles">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p>No articles found.</p>
          )}
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Dashboard;
