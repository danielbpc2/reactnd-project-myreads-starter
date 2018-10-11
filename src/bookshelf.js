import React from 'react';
import Shelf from './shelf.js'
import PropTypes from 'prop-types';

class BookShelf extends React.Component {
  render(){
    return(
      <div className="list-books-content">
        <div>
          <Shelf name={"Currently Reading"} books={this.props.books.filter(book => book['shelf'] === "currentlyReading")} handleSelection={this.props.handleSelection}/>
          <Shelf name={"Want to Read"} books={this.props.books.filter(book => book['shelf'] === "wantToRead")} handleSelection={this.props.handleSelection}/>
          <Shelf name={"Read"} books={this.props.books.filter(book => book['shelf'] === "read")} handleSelection={this.props.handleSelection}/>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  filterBook: PropTypes.func.isRequired,
  handleSelection: PropTypes.func.isRequired
};

  export default BookShelf;
