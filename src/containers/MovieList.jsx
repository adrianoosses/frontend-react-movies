import React, { Component, Fragment } from 'react'
import axios from 'axios'
import MovieItem from '../components/MovieItem'
import './MovieList.css'

class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = { 
            movies: [],
            page: 1
         }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US&page=1`)
        .then((api) =>{
            this.setState({movies: api.data.results })
            console.log("movies: ",api.data.results[0]);
        })
        
        .catch( (err) => console.log(err) ) ;
    }
    /*
    componentDidUpdate(){
        axios.get('https://rickandmortyapi.com/api/character',{ params: { page: this.state.page } })
        .then((api) =>{
            this.setState({movies: api.data.results })
        }  )
        
        .catch( (err) => console.log(err) ) ;
    }
    */


    onNextPage = () =>{
        this.setState( prevState => ({ page:  ++prevState.page }) )
        //console.log(this.state.page);
    }

    onBeforePage = () =>{
        this.setState( prevState => ({ page:  --prevState.page }) )
        //console.log(this.state.page);
    }
    render(){
        return (
            <Fragment>
                <div>
                    <button onClick={this.onBeforePage}> Back </button>
                    <button onClick={this.onNextPage}> Next </button>
                </div> 
                <div className = "divGeneral">
                    {
                        this.state.movies.map(item => <MovieItem item={item}/>
                        )
                    }
                </div>
            </Fragment>
            
        )
    }
}

export default MovieList;