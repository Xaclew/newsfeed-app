import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import FilterBar from './FilterBar';
import '../styles/NewsFeed.css';

const BASE_API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

function NewsFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filterCategories = ['Technology', 'War', 'Entertainment'];

  useEffect(() => {
    const fetchInitialNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_API_URL}?q=top-stories&api-key=dYPWJfcUGz7jzoqT3m4NJ73IJiZd36RQ`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.response.docs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialNews();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm && !selectedCategory) {
      return; // Prevent empty search
    }

    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) {
        params.append('q', searchTerm);
      }
      if (selectedCategory) {
        params.append('fq', selectedCategory); // Use 'fq' for filter query
      }

      const response = await fetch(`${BASE_API_URL}?${params.toString()}&api-key=dYPWJfcUGz7jzoqT3m4NJ73IJiZd36RQ`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setNews(data.response.docs);
      console.log(news);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    handleSearch();
  };

  return (
    <div className="news-feed">
      <div className="search-and-filter">
        <input
          id="searchbar"
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        <FilterBar
          filterCategories={filterCategories}
          onFilterChange={handleFilterChange}
        />
      </div>
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        news.length > 0 ? (
          <div className="article-grid" >
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
