import React, { Component } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
export default class Profile extends Component {
    constructor(){
        super();
        this.state = { 
            user: []
         }
    }

    async getUser(){
        try {
            console.log("get profile");
            let email = localStorage.getItem('email');
            console.log("email get user: ", email);
            let reqUser = await axios.get(`https://movie-service-2.herokuapp.com/user/profile?email=${email}`);
            this.setState({
                user: reqUser
            })
            //localStorage.setItem('tokenUsr', msgReceived.data.tokenSend);
            //localStorage.setItem('email', email);
            //console.log("user: ", user);
            //history.push('/');
        } catch (error) {
            console.error(error)
        }
    }
    componentDidMount(){
        this.getUser();
    }

    render() {
        let userObj = this.state.user;
        console.log("userObj", userObj);
        //let userObj = JSON.parse(this.state.user);
        //userObj.map( item => console.log(item.name));
        //console.log("userObj: ", userObj.data.email);
        //user.data.map( item => console.log(item.name))

        //console.log("user.data[0]: ", user.data[0]);
        //console.log("user.data.name: ", user.data.name);
        //console.log("type of user: ", typeof user); 
        return (
            <div>
                <h2>Profile</h2>
                {/*user.map( item => console.log(item.name))*/}
                <p>Name:  </p>
            </div>
        )
    }
}
