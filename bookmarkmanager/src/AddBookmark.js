import React, { Component } from 'react';
import uuid from 'uuid';

class AddBookmark extends Component {
    constructor() {
        super();
        this.state = {};
    }


    
    handleSubmit = (e) => {

        let title = this.refs.title.value;
        let url = this.refs.url.value;
        let desc = this.refs.desc.value;
       
       
        this.setState({
            newBookmark: {
                id: uuid.v4(),
                title: title,
                url: url,
                description: desc
            }
        },function(){
            this.props.addBookmark(this.state.newBookmark);
        });

     
       e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" ref="title"></input>

                    <label htmlFor="url">Url:</label>
                    <input id="url" ref="url"></input>

                    <label htmlFor="desc">Description:</label>
                    <input type="text" id="desc" ref="desc"></input>

                    <br />
                    <input type="submit" value="Submit Here!" />
                </form>
            </div>);
    }
}

export default AddBookmark;