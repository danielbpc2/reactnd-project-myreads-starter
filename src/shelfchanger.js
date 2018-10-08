import React from 'react';
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends React.Component {

  state = {
    shelf: ''
  }

  mounted = false;

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    this.mounted = false
  }

  loadData = () => {
    BooksAPI.get(this.props.book['id'])
    .then((data) => {
      if ( this.mounted ) {
        this.setState({
          shelf: data['shelf']
        });
      }
    });
  }

  render(){
    return(
      <div className="book-shelf-changer">
        <select value={this.props.book['shelf'] || this.state.shelf} onChange={(event) => this.props.handleSelection(this.props.book, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger;
