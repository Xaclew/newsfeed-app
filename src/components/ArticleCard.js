import React from 'react';
import defaultImage from '../default.jpg'; // Replace with your actual path

function ArticleCard({ article }) {
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
      <a href={article?.url} target="_blank" rel="noreferrer">
        Read more
      </a>
    </div>
  );
}

export default ArticleCard;

