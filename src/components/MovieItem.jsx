import React, {Component} from 'react'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props){
        super(props);
    }

    clickSelectMovie(movie){
        console.log(movie.original_title)
        this.props.history.push('/moviedata');
        localStorage.setItem('movie', JSON.stringify(movie));
    }
    render(){
        return(
            <div key={this.props.item.id}>
            <p>{this.props.item.original_title}</p>
            <img className = 'imageMovie' onClick={this.clickSelectMovie}
            src ={'https://image.tmdb.org/t/p/w500' + this.props.item.poster_path} alt=""></img>
            </div>
        )
    }
}

export default MovieItem;