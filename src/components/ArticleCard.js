import React from 'react';
import yourImage from '../logo512.png';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article?.title}</h2>
      <p>{article?.snippet}</p>
      <img src={yourImage}/>
      <a href={article?.url} target="_blank" rel="noreferrer">
        Read more
      </a>
    </div>
  );
}

export default ArticleCard;
