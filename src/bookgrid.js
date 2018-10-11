import React from 'react'
import Book from './book.js'
import PropTypes from 'prop-types';

const bookGrid = (props) => (
  <ol className="books-grid">
    {props.books.map(book =>
    <li key={book.id}>
      <Book bookInfo={book} handleSelection={props.handleSelection}/>
    </li>)
    }
  </ol>
)

bookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default bookGrid
