import React, { createContext, useState } from 'react';

const ArticleContext = createContext({
    articleData: null
  });

  const ArticleProvider = ({ children }) => {
    const [articleData, setArticleData] = useState(null);

    const selectArticle = async (articleData) => {
        setArticleData(articleData);
    };

    return (
        <ArticleContext.Provider value={{ articleData, selectArticle }}>
          {children}
        </ArticleContext.Provider>
      );
    };
    
    export { ArticleContext, ArticleProvider };