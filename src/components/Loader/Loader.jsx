import React, { Component} from 'react';

import './Loader.css'

class Loader extends Component {
    constructor(props){
        super(props);

        this.state = { };
    }

    render() {
        return (
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
        )
    }
}

export default Loader;