import React from 'react';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article?.title}</h2>
      <p>{article?.snippet}</p>
      <a href={article?.url} target="_blank" rel="noreferrer">
        Read more
      </a>
    </div>
  );
}

export default ArticleCard;
