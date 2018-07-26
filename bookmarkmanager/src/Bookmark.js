import React, {Component} from 'react';

class Bookmark extends Component {

    deleteBookmark(id){
        this.props.onDelete(id);
    }

    render () { return (
        <div>
            <div className="bookmark">
                <a href={this.props.url} target="_blank"> {this.props.title}  </a>  :   {this.props.description} <button onClick={this.deleteBookmark.bind(this,this.props.bookmarkId)}>x</button>
            </div>
        </div>)
    }
}

export default Bookmark;