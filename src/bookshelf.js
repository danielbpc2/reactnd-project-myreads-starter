import React from 'react';
import Shelf from './shelf.js'
import PropTypes from 'prop-types';

const bookShelf = ( { books, handleSelection } ) => (
  <div className="list-books-content">
    <div>
      <Shelf name={"Currently Reading"} books={books.filter(book => book['shelf'] === "currentlyReading")} handleSelection={handleSelection}/>
      <Shelf name={"Want to Read"} books={books.filter(book => book['shelf'] === "wantToRead")} handleSelection={handleSelection}/>
      <Shelf name={"Read"} books={books.filter(book => book['shelf'] === "read")} handleSelection={handleSelection}/>
    </div>
  </div>
)

bookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  filterBook: PropTypes.func.isRequired,
  handleSelection: PropTypes.func.isRequired
};

  export default bookShelf;
