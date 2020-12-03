import React, { Component, Fragment } from 'react';

import Loader from '../Loader/Loader';

class PageWithLoader extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }

    render() {
        return (
            <>
                {
                    this.props.condiction 
                    ? <Loader /> 
                    : this.props.children
                }
            </>
        )
    }
}

export default PageWithLoader;