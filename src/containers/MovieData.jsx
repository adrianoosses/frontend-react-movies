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
        let cMovie = JSON.parse(localStorage.getItem('movie'));
        //console.log('cMovieeeeee', cMovie);
        //console.log('type of cMovieeeeee', typeof(cMovie));
        //console.log('cMovieeeeee parse', JSON.parse(cMovie));
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
                <div>
                <p>{this.state.movie.original_title}</p>
                </div>
            </Fragment>
            
        )
    }
}

export default MovieList;