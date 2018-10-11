import React from 'react'
import BookGrid from './bookgrid.js'
import PropTypes from 'prop-types';

const searchResults = (props) => (
    <div className="search-books-results">
      <BookGrid books={props.booksFound} handleSelection={props.handleSelection}/>
    </div>
  )


searchResults.propTypes = {
  booksFound: PropTypes.array,
  handleSelection: PropTypes.func
}

export default searchResults
