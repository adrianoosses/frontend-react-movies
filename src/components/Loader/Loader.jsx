import React, { Component} from 'react';

import './Loader.css'

class Loader extends Component {
    constructor(props){
        super(props);

        this.state = { };
    }

    render() {
        return (
                <div class="loading">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
        )
    }
}

export default Loader;