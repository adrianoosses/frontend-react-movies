import React, { Component } from 'react'
import axios from 'axios'

import './ProfileList.css';
class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = { 
            users: [],
            movies: [],
            orders: [],
            page: 1,
            text: '',
         }
    }
    
    getUsers = async () => {
        try {
            let token =  localStorage.getItem('tokenUsr')
            console.log("token", token);
            console.log("get profile");
            // check if admin
            let reqUser = await axios.get(`https://movie-service-2.herokuapp.com/user/`);
            //{ headers: {authorization: token} });
            this.setState({users: await reqUser.data})
            //history.push('/');
        } catch (error) {
            console.error(error)
        }
    }

    getOrderByEmail = async (email) =>{
        let reqOrder = await axios.get(`https://backend-movie-service.herokuapp.com/order/myOrders?email=${email}`);
        return await reqOrder.data.content[0];
    }

    getMovieById = async (movieId) =>{
        let reqMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-US`);
        return reqMovie;
    }

    setAllMovies = async() =>{
        let movies = [];
        let orders = [];
        this.state.users.map(async (item) =>{
            let order = await this.getOrderByEmail(item.email);
            orders.push(order);
            this.setState({orders: orders});
            let movie = (order)?await this.getMovieById(order.movieId):"";
            movies.push( (movie)?movie.data:"");
            this.setState({movies: movies});
        })
    }

    componentDidMount = async () =>{
        await this.getUsers();
        await this.setAllMovies();
    }
    render(){
        const {movies, users, orders } = this.state;
        console.log("movies", movies)
        console.log("users", users)
        console.log("orders", orders)
        return (
            <div className="tableStyle">  
                <div className="col">
                    <div className="rowH">User</div>
                    {this.state.users.map((item) =><div className="rowI">{item.email}</div> )}
                </div>
                <div className="col">
                    <div className="rowH">Movies</div>
                    {movies.map((item) => <div className="rowI">{(item)?item.original_title:"None"}</div> )}
                </div>
            </div>
        )
    }

}

export default MovieList;