import React from 'react';

const Search = (props) => (
  <form onSubmit={props.handleSubmitSearch} className="search-bar">
    <label>
      <img src="https://img.icons8.com/dotty/80/000000/x-coordinate.png" />
      <input
        type="text"
        onChange={props.handleChangeSearch}
        value={props.search_value}
        className="btn-input"
        placeholder="search news.ly"/>
    </label>
    <input type="submit" className="btn-submit" />
  </form>

)

export default Search;