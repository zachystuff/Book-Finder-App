import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import SearchOptions from './SearchOptions.jsx';
import SearchResults from './SearchResults.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: '',
      checkedItems: new Map(),
      articles: [],
      selected: false
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChangeCheck(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;

    if (!this.state.selected) {
      this.setState(prevState => ({
        checkedItems: prevState.checkedItems.set(item, isChecked),
        selected: !prevState.selected
      }));
    } else if (this.state.checkedItems.get(item)) {
      this.setState(prevState => ({
        checkedItems: prevState.checkedItems.set(item, isChecked),
        selected: !prevState.selected
      }));
    } else {
      return;
    }
  }

  handleChangeSearch(e) {
    this.setState({ search_value: e.target.value });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    let checkedItemsObj = this.state.checkedItems.entries();
    let country;
    for (let i of checkedItemsObj) {
      if (i[1] === true) {
        country = i[0]
      }
    }

    axios.get('http://localhost:3000/api', {
      params: {
        q: this.state.search_value,
        country
      }
    })
      .then((response) => {
        const articles = response.data.articles;
        this.setState({ articles });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { search_value, checkedItems, articles } = this.state;
    return (
      <div className="main-container">
        <div className="content-container">
          <h1> News.ly </h1>
          <Search
            handleChangeSearch={this.handleChangeSearch}
            handleSubmitSearch={this.handleSubmitSearch}
            search_value={search_value}
          />
          <SearchOptions
            checkedItems={checkedItems}
            handleChangeCheck={this.handleChangeCheck}
          />
          <SearchResults articles={articles} />
        </div>
      </div>
    )
  }
};

export default App;