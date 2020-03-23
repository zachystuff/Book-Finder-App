import React from 'react';

import Article from './Article.jsx';

const SearchResults = ({ articles }) => {
  return(
    <div
      className="article-container"
      style={articles.length > 0 ? { display: 'block' } : { display: 'none' }}
    >
      <h3>Here are your articles!</h3>
      <div className="article-seperator">
        {
          articles.map((article, i) => {
            return(
              <Article article={article} key={i} />
            )
          })
        }
      </div>
    </div>
  )
};

export default SearchResults;