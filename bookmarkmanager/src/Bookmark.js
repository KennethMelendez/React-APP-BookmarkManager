import React, {Component} from 'react';

class Bookmark extends Component {
    render () { return (
        <div>
            <div className="bookmark">
                <a href={this.props.url} target="_blank"> {this.props.title}  </a>  :   {this.props.description}
            </div>
        </div>)
    }
}

export default Bookmark;