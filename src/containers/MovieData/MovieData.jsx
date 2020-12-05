import React, { Component, Fragment } from 'react'
import './MovieData.css'
import axios from 'axios'
class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = { 
            movie: [],
            days: 0
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

    rentMovie = async (days) =>{
        console.log("Rent a movie now!");
        const email = localStorage.getItem('email');
        //console.log("email", email);
        let reqUser = await axios.get(`https://backend-movie-service.herokuapp.com/user/profile?email=${email}`);
        let idUser = await reqUser.data._id;
        //console.log(reqUser.data._id)
        const order = {
            "userId": idUser,
            "movieId": this.state.movie.id,
            "daysToRent": days
        }
        //console.log("order: ", order);
        let reqOrder = await axios.post(`https://backend-movie-service.herokuapp.com/order/`, order);
        console.log("reqorder: ", await reqOrder);
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
                        <p>RENT:</p>
                        <button onClick={() => this.rentMovie(7)}>7 days</button>
                        <button onClick={() => this.rentMovie(14)}>14 days</button>
                        <button onClick={() => this.rentMovie(21)}>21 days</button>
                        <button onClick={() => this.rentMovie(30)}>1 month</button>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default MovieList;