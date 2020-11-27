import React, { Component, Fragment } from 'react'
import './MovieList.css'

class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = { 
            movie: []
         }
    }

    componentDidMount(){
        let cMovie = localStorage.getItem('movie');
        console.log('cMovie', cMovie);
        this.setState({movie: cMovie })

    }
    

    onMenu = () =>{
        this.props.history.push('/');
    }

    render(){
        return (
            <Fragment>
                <div>
                    <button onClick={this.onMenu}> Back to Menu </button>
                </div> 
                <div className = "divGeneral">
                    {
                        this.state.movies.map(item => console.log(item)) 
                    }
                </div>
            </Fragment>
            
        )
    }
}

export default MovieList;