import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import FilterBar from './FilterBar';
import ArticleModal from './ArticleModal';
import '../styles/NewsFeed.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BASE_API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

function NewsFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedArticle, setSelectedArticle] = useState(null); // State for selected article
  const filteredSearchParams = `fq=${selectedCategory}&q=${searchTerm}`;
  const searchParams = `q=${searchTerm}`;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    if (!searchTerm) {
      return; // Prevent empty search
    }

    setIsLoading(true);
    try {
      
      console.log(selectedCategory, searchTerm);

      const response = await fetch(`${BASE_API_URL}?${(selectedCategory)?filteredSearchParams:searchParams}&api-key=dYPWJfcUGz7jzoqT3m4NJ73IJiZd36RQ`);
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

  const handleFilterChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };
  
  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setShowModal(false); // Close the modal
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
        <FilterBar selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
      </div>
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        news.length > 0 ? (
          <div className="article-grid" >
            {news.map((article) => (
              <ArticleCard key={article.id} article={article} handleShow={handleShow} />
            ))}
          </div>
        ) : (
          <p>No news found.</p>
        )
      )}
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Do not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default NewsFeed;




