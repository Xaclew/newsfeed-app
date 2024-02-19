import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keywords, setKeywords] = useState('tennis'); // Initial search keywords

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Simulate API response with dummy data
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: 'Dummy Article Title 1',
          snippet: 'This is a dummy article snippet for testing purposes.',
          url: 'https://example.com/dummy-article-1',
        },
        {
          id: 2,
          title: 'Dummy Article Title 2',
          snippet: 'This is another dummy article snippet for testing purposes.',
          url: 'https://example.com/dummy-article-2',
        },
      ]);
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  }, [keywords]);

  const handleSearch = async () => {
    // Simulate search functionality (optional)
    console.log('Search triggered with keywords:', keywords);
  };

  const handleInputChange = (event) => {
    setKeywords(event.target.value);
  };

  return (
    <div className="news-feed">
      <input
        type="text"
        placeholder="Search news..."
        value={keywords}
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
              <ArticleCard key={article.id} article={article} />
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
