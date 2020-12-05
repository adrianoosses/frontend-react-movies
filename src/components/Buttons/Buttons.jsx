import React from 'react'
import {NavLink} from 'react-router-dom'
import './Buttons.css';

const Buttons = (props) => {
    return (
        <div className="buttonContainer">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {props.user ?
                <>
                    <span class="logoutText">Hi, {localStorage.getItem('email')}</span>
                    <NavLink to="/logout">Logout</NavLink>
                </> :
                <>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/register">Sign Up</NavLink>
                </>
            }
        </div>
    )
}
export default Buttons;