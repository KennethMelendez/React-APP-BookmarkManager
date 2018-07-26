import React, { Component } from 'react';
import Bookmark from './Bookmark';

class Bookmarks extends Component {
    // constructor() {
    //     super();
    // }

    deleteBookmark(id){
        this.props.onDelete(id);
    }

    render() {
        let bookmarks;

        bookmarks = this.props.bookmarks.map(bookmark =>{
            return (<Bookmark bookmarkId={bookmark.id} key={bookmark.id} title={bookmark.title} url={bookmark.url} description={bookmark.description} onDelete={this.deleteBookmark.bind(this)} />);
        });
         
        return (<div> {bookmarks} </div>);
    }
}

    export default Bookmarks;