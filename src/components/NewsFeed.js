import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

const BASE_API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // Base URL

function NewsFeed() {

const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch initial news (e.g., top news)
    const fetchInitialNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_API_URL}?q=top-stories&api-key=dYPWJfcUGz7jzoqT3m4NJ73IJiZd36RQ`); // Replace YOUR_API_KEY with your actual key
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.response.docs); // Update state with fetched news articles
      } catch (error) {
        setError(error.message);
      } finally {console.log(news);
        setIsLoading(false);
        
      }
    };

    fetchInitialNews();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) {
      return; // Prevent empty search
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}?q=${searchTerm}&api-key=dYPWJfcUGz7jzoqT3m4NJ73IJiZd36RQ`); // Replace YOUR_API_KEY with your actual key
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      
      setNews(data.response.docs); // Update state with search results
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="news-feed">
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        news.length > 0 ? (
          <div className="articles">
            {news.map((article) => (
              <ArticleCard key={article.id} article={article}/>
              ))}


          </div>
        ) : (
          <p>No news found.</p>
        )
      )}
    </div>
  );
}


export default NewsFeed;
