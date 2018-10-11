import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render(){
    return(
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={(event) => this.props.onChangeOfQuery(event.target.value)}/>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onChangeOfQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default SearchBar
