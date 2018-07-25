import React, { Component } from 'react';
import Bookmark from './Bookmark';

class Bookmarks extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        let bookmarks;

        bookmarks = this.props.bookmarks.map(bookmark =>{
            return (<Bookmark key ={bookmark.id} title={bookmark.title} url={bookmark.url} description={bookmark.description} />);
        });
         
        return (<div> {bookmarks} </div>);
    }
}

    export default Bookmarks;