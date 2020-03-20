import React, { Component } from 'react';

import Search from './Search.jsx';
import SearchOptions from './SearchOptions.jsx';
import Favorites from './Favorites.jsx';
import SearchResults from './SearchResults.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: '',
      checkedItems: new Map(),
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChangeCheck(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleChangeSearch(e) {
    this.setState({ search_value: e.target.value },
      () => { console.log(this.state) });
  }

  handleSubmitSearch(e) {
    alert('A name was submitted: ' + this.state.search_value);
    event.preventDefault();
  }
  render() {
    const { search_value, checkedItems } = this.state;
    return (
      <div>
        <h1> News Finder </h1>
        <Search
          handleChangeSearch={this.handleChangeSearch}
          handleSubmitSearch={this.handleSubmitSearch}
          search_value={search_value}
         />
        <SearchOptions
          checkedItems={checkedItems}
          handleChangeCheck={this.handleChangeCheck}
        />
        <Favorites />
        <SearchResults />
      </div>
    )
  }
};

export default App;