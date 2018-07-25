import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    constructor() {
        super();
        this.state = { time: ''};
    }

    componentWillMount(){
        this.setState({time: new Date().toLocaleString()});
    }

    componentDidMount(){
      this.intervalID = setInterval(() =>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick(){
        this.setState({time: new Date().toLocaleString()});
    }

    render() {
        return (
            <div className="text-center">
                <h1> Welcome to the Bookmark Manager </h1>
                <h2> {this.state.time} </h2>
            </div>);
    }
}

export default Header;