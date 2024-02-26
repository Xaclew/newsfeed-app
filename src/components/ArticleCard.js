import React from 'react';
import defaultImage from '../default.jpg'; // Replace with your actual path
import Button from 'react-bootstrap/Button';

function ArticleCard({ article, handleShow }) {
  // ... other code remains the same ...

  const imageUrl = article.multimedia?.[0]?.url; // Use default image if no article image found
  const imageOnError = (event) => {
    event.currentTarget.src = defaultImage;
    event.currentTarget.className = "error";
  }

  return (
    <div className="article-card">
      <h2>{article?.title}</h2>
      <p>{article?.snippet}</p>
      <img src={`http://www.nytimes.com/${imageUrl}`} alt={article.headline.main} onError={imageOnError}/>
      <Button variant="primary" onClick={handleShow}>
      Read More
    </Button>
    </div>
  );
}

export default ArticleCard;

