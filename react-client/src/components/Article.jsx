import React from 'react';

import Favorites from './Favorites.jsx';

const Article = ({ article }) => (
  <div className='article'>
    <a href={article.url} target="_blank">
      <img src={article.urlToImage} alt={article.title} />
    </a>
    <div className='article-text'>
      <h6>{article.title}</h6>
      <p>{article.description}</p>
    </div>
  </div>
);

export default Article;