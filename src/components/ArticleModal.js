import React from 'react';

function ArticleModal({ article, onClose }) {
  return (
    <div className="articles-modal">
      <div className="modal-overlay" onClick={onClose} /> {/* Overlay to disable underlying content */}
      {/* ... modal content from NewsFeed.js will be rendered here ... */}
    </div>
  );
}

export default ArticleModal;
