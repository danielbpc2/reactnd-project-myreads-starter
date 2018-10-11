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
        <Route path='/search' render={() => (
          <SearchPage handleSelection={this.handleSelection}/>
          )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelf books={this.state.books} filterBook={this.filterBook} handleSelection={this.handleSelection}/>
            <OpenSearch/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
