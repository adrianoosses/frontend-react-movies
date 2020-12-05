import React, { Component } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

import './Profile.scss';
export default class Profile extends Component {
    constructor(){
        super();
        this.state = { 
            userArr: [],
            order: [],
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

    getEmail = () =>{
        return localStorage.getItem('email');
    }

    setOrderInState = async (email) =>{
        let reqOrder = await axios.get(`https://backend-movie-service.herokuapp.com/order/myOrders?email=${email}`);
        console.log("order2: ", await reqOrder.data.content[0]);
        this.setState({order: await reqOrder.data.content[0]})
        return (await reqOrder.data.content[0]);
    }

    getMovie = async () =>{
        console.log("Showing movies!...");
        const email = this.getEmail();
        if(!email){
            console.log("Log In first")
            return false;
        }

        //console.log("email", email);     

        const reqOrder = await this.setOrderInState(email)
        if(!reqOrder){
            console.log("No order found");
            return false;
        }

        //console.log("reqOrder: ", reqOrder);
        const movieId = await reqOrder.movieId
        //console.log("movieId: ", movieId);
        let reqMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US`);
        //console.log("movie: ", await reqMovie);
        this.setState({movie: await reqMovie.data})
    }

    componentDidMount(){
        this.getUser();
        this.getMovie();
    }

    render() {
        let userObj = this.state.userArr;
        let orderObj = this.state.order;
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
                        {console.log("refunDate:", orderObj)}
                        <div>Give back at: {(orderObj)?orderObj.refundDate:"No order already"}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
