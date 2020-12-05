import React from 'react'
import {NavLink} from 'react-router-dom'
import './Buttons.css';
import Header from '../Header/Header';

const Buttons = (props) => {
    return (
        <>
            
            <div className="buttonContainer">
                {props.user ?
                    <>
                        <span class="logoutText">Hi, {localStorage.getItem('email')}</span>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                    </> :
                    <>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/register">Sign Up</NavLink>
                    </>
                }
            </div>
            <NavLink to="/"><Header /></NavLink>
        </>
    )
}
export default Buttons;