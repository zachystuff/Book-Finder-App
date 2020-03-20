import React from 'react';

const Search = (props) => (
  <form onSubmit={props.handleSubmitSearch}>
    <label>
      Name:
          <input
            type="text"
            onChange={props.handleChangeSearch}
            value={props.search_value}
          />
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default Search;