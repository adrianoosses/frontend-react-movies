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
        axios.get(`https://api.themoviedb.org/3/movie/`+
        `popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US&page=${this.state.page}`)
        .then((api) =>{
            this.setState({movies: api.data.results })
        })
        .catch( (err) => console.log(err) ) ;
    }
    
    componentDidUpdate(){
        axios.get(`https://api.themoviedb.org/3/movie/`+
        `popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US&page=${this.state.page}`)
        .then((api) =>{
            this.setState({movies: api.data.results })
        }  )
        
        .catch( (err) => console.log(err) ) ;
    }
    
    onNextPage = () =>{
        this.setState( prevState => ({ page:  ++prevState.page }) )
        console.log("this.props",this.props);
        console.log("this.props.history",this.props.history);
    }

    onBeforePage = () =>{
        this.setState( prevState => ({ page:  --prevState.page }) )
    }
    render(){
        return (
            <Fragment>
                <div>
                    <button onClick={this.onBeforePage}> Back </button>
                    <button onClick={this.onNextPage}> Next </button>
                    <p>Page: {this.state.page}</p>
                </div> 
                <div className = "divGeneral">
                    {
                        this.state.movies.map(item => <MovieItem item={item} history={this.props.history}/>
                        )
                    }
                </div>
            </Fragment>
            
        )
    }
    /*
    componentWillUnmount() {
        mydatastore.unsubscribe(this);
    }
    */
}

export default MovieList;