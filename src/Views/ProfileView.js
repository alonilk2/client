import React, {Component} from 'react';
import '../css/About.css'
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import ProfileComponent from '../Components/ProfileComponent';

class ProfileView extends Component 
{
    render() {
        return (
			<div>
				<NavBar />
				<ProfileComponent />
			</div>
		)
	}
}

export default ProfileView;