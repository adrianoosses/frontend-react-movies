import React, { Component } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

import './Profile.scss';
export default class Profile extends Component {
    constructor(){
        super();
        this.state = { 
            userArr: [],
            movie: []
         }
    }

    async getUser(){
        try {
            console.log("get profile");
            let email = localStorage.getItem('email');
            let reqUser = await axios.get(`https://backend-movie-service.herokuapp.com/user/profile?email=${email}`);
            
            this.setState({userArr: await reqUser.data})
            //history.push('/');
        } catch (error) {
            console.error(error)
        }
    }

    getMovie = async () =>{
        console.log("Showing movies!...");
        const email = localStorage.getItem('email');
        console.log("email", email);     
        let reqOrder = await axios.get(`https://backend-movie-service.herokuapp.com/order/myOrders?email=${email}`);
        console.log("order: ", await reqOrder.data);
        const movieId = await reqOrder.data.content[0].movieId
        console.log("movieId: ", await reqOrder.data.content[0].movieId);
        let reqMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US`);
        console.log("movie: ", await reqMovie);
        this.setState({movie: await reqMovie.data})
    }

    componentDidMount(){
        this.getUser();
        this.getMovie();
    }

    render() {
        let userObj = this.state.userArr;
        console.log("movie path", this.state.movie.poster_path)
        return (
            <div>
                <h2>Profile</h2>
                <div className="containerProfile">
                    <div className="containerLogin">
                        <p>Name: {userObj.name} </p>
                        <p>Email: {userObj.email} </p>
                    </div>
                    <div className="containerMovie">
                        <div>{this.state.movie.original_title}</div>
                        <img className="moviePhoto" src={'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path} alt=""></img>
                    </div>
                </div>
                
            </div>
        )
    }
}
