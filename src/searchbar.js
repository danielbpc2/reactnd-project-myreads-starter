import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Throttle } from 'react-throttle';


class SearchBar extends React.Component {
  state = {
      query: '',
  }

  handleChange = (userInput) => {
    this.setState({
      query: userInput
    })
    this.props.onChangeOfQuery(userInput)
  }

  render(){
    return(
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <Throttle time="300" handler="onChange">
            <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={(event) => this.handleChange(event.target.value)}/>
          </Throttle>
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
