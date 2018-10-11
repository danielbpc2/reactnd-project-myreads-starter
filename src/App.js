import React from 'react'
import './App.css'
import BookShelf from './bookshelf.js'
import OpenSearch from './opensearch.js'
import { Route } from 'react-router-dom'
import SearchPage from './searchpage.js'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
    state = {
      books: []
    }

  componentDidMount() {
    BooksAPI.getAll().then((data) => this.setState({
      books: data
    }))
  }

  filterBook(array, removeThisBook) {
    return array.filter(book => book['id'] !== removeThisBook['id'])
  }

  handleSelection = (changedBook, shelf ) => {
    changedBook['shelf'] = shelf
    this.setState((prevState) => ( {
      books: [...this.filterBook(prevState.books, changedBook), changedBook]
    } ) )

    BooksAPI.update(changedBook, shelf)
  }

  render() {
    return (
      <div className="app">
        {/* Search Page components*/}
        <Route path='/search' render={() => (
          <SearchPage handleSelection={this.handleSelection}/>
          )}/>

        {/* Root Page components*/}
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {/* BookShelf reveive as props all the books, a function to filter a book out from all the books, and a function to change book from shelf */}
            <BookShelf books={this.state.books} filterBook={this.filterBook} handleSelection={this.handleSelection}/>
            {/* OpenSearch is the Link to the searchpage that is sticked to the homepage */}
            <OpenSearch/>
          </div>

        )}/>
      </div>
    )
  }
}

export default BooksApp
