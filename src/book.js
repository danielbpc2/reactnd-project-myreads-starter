import React from 'react';
import ShelfChanger from './shelfchanger.js';
import PropTypes from 'prop-types';

const book = ({bookInfo, handleSelection}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ bookInfo['imageLinks'] == null ? '' : bookInfo['imageLinks']['thumbnail'] } )` } }></div>
      <ShelfChanger book={bookInfo} handleSelection={handleSelection}/>
    </div>

    <div className="book-title">{bookInfo['title']}</div>

    <div className="book-authors">{bookInfo['authors'] == null ? "Unknown Authors" : bookInfo['authors'].join(', ')}</div>
  </div>
  )

book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default book;
