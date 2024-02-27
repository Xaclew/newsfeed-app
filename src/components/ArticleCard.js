import React from 'react';
import defaultImage from '../default.jpg'; // Replace with your actual path
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import Image from 'react-bootstrap/Image';



function ArticleCard({ article, handleShow }) {

  const {selectArticle} = useContext(ArticleContext);
  // ... other code remains the same ...
  function handleClick() {
    selectArticle(article);
    handleShow();
  }
  const imageUrl = article.multimedia?.[0]?.url; // Use default image if no article image found
  const imageOnError = (event) => {
    event.currentTarget.src = defaultImage;
    event.currentTarget.className = "error";
  }

  return (
    <div className="article-card">
      <h2>{article?.title}</h2>
      <p>{article?.snippet}</p>
      <Image src={`http://www.nytimes.com/${imageUrl}`} alt={article.headline.main} onError={imageOnError} fluid/>
      <Button variant="primary" onClick={handleClick}>
      Read More
    </Button>
    </div>
  );
}

export default ArticleCard;

