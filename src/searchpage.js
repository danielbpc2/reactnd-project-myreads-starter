import React from 'react'
import SearchBar from './searchbar.js'
import SearchResults from './searchresults.js'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
  state = {
    query: '',
    booksFound: []
  }

  onChangeOfQuery = (userInput) => {
    this.setState({
      query: userInput
    })
    if (userInput == null || userInput === '') {
      this.setState({booksFound: []})
    } else {
      BooksAPI.search(userInput)
        .then((data) => Array.isArray(data) ? this.setState({booksFound: [...data]}) : this.setState({booksFound: []}) )
    }
  }

  render() {
    return (
      <div className="search-books">

          <SearchBar onChangeOfQuery={this.onChangeOfQuery} query={this.state.query}/>
          <SearchResults booksFound={this.state.booksFound} handleSelection={this.props.handleSelection}/>

        </div>
    )
  }
}

SearchPage.propTypes = {
  handleSelection: PropTypes.func.isRequired
};

  export default SearchPage
