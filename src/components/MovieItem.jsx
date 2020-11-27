import React, {Component} from 'react'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props){
        super(props);
    }

    clickElementoSeleccionado(movie){
        console.log(movie.original_title)
    }
    render(){
        return(
            <div >
            <p>{this.props.item.original_title}</p>
            <img className = 'imageMovie' 
            src ={'https://image.tmdb.org/t/p/w500' + this.props.item.poster_path} alt=""></img>
            </div>
        )
    }
}

export default MovieItem;