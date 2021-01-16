import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Profile.css'
import avatar from  '../images/avatar.png';
import cookie from 'js-cookie';
import { signout } from '../Actions/authActions';
import Dropdown from 'react-bootstrap/Dropdown'
function ProfileNavComp(props) 
{
    const userInstance = cookie.get('userInstance');
    const dispatch = useDispatch();
    if(userInstance) {
        const user = JSON.parse(userInstance);
        console.log(user);
        return (   
            <Dropdown className="user-instance">
                <img className="avatar" src={avatar} alt="profile picture"></img>
                <Dropdown.Toggle id="dropdown-basic">
                    Hello {user.first_name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                    <Dropdown.Item href="/" onClick={()=>{dispatch(signout());}}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        );
    }
    else {
        return (
        <form className="form-inline my-2 my-lg-0">
            <a href="/Signin" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Login</a>
            <a href="/Signup" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Sign Up</a>
        </form>
    );}
}
export default ProfileNavComp;