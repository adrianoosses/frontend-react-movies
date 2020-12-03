import React, { Component, Fragment } from 'react'
import './MovieData.css'

class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = { 
            movie: []
         }
    }

    componentDidMount(){
        let cMovie = JSON.parse(localStorage.getItem('movie'));
        this.setState({movie: cMovie })
        //this.props.subscribe(this);
    }
    

    onMenu = () =>{
        this.props.history.push('/');
    }

    render(){
        return (
            <Fragment>
                <div><button onClick={this.onMenu}> Back to Menu </button></div> 
                <div className='movieDataContainer'>
                    <img className='moviePhoto'
                        src ={'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path} alt="">
                    </img>
                    <div className='movieContent'>
                        <h2>{this.state.movie.original_title}</h2>
                        <p>{this.state.movie.release_date}</p>
                        <p>{this.state.movie.vote_average}</p>
                        <p>{this.state.movie.overview}</p>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default MovieList;