import React from 'react';
import BookGrid from './bookgrid.js';
import PropTypes from 'prop-types';

const shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <BookGrid books={props.books} handleSelection={props.handleSelection}/>
    </div>
  </div>
  )

shelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default shelf;
