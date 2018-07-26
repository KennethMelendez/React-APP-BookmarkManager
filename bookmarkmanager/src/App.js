import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import AddBookmark from './AddBookmark';
import Bookmarks from './Bookmarks';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = { bookmarks: [{ title: '', url: '', description: '' }] };
  }

  componentWillMount() {
    this.setState({
      bookmarks: [
        {
          id: uuid.v4(),
          title: 'Google',
          url: 'www.google.com',
          description: 'A place to search for things'
        },
        {
          id: uuid.v4(),
          title: 'Facebook',
          url: 'www.facebook.com',
          description: 'social media site'
        }
      ]
    })
  }

  handleAddBookmark(bookmark) {
    let currentBookmarks = this.state.bookmarks;
    currentBookmarks.push(bookmark);
    this.setState({ bookmarks: currentBookmarks }, function () {
      console.log(this.state);
    });
  }

  handleDeleteBookmark(idToRemove) {
    let currentBookmarks = this.state.bookmarks;
    let index = currentBookmarks.findIndex((bookmark) => {
      return bookmark.id === idToRemove;
    });

    currentBookmarks.splice(index, 1);
    this.setState({ bookmarks: currentBookmarks });
  }

  render() {
    return (
      <div className="text-center">
        <Header />
        <br />
        <AddBookmark addBookmark={this.handleAddBookmark.bind(this)} />

        <div>
          <Bookmarks bookmarks={this.state.bookmarks} onDelete={this.handleDeleteBookmark.bind(this)} />
        </div>

      </div>);
  }
}

export default App;
