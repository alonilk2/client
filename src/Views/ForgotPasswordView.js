import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import ForgotPasswordComponent from '../Components/ForgotPasswordComponent';

class ForgotPasswordView extends Component 
{
    render() {
		return (
			<div>
				<NavBar />
				<ForgotPasswordComponent />
			</div>
		);
	}
}
export default ForgotPasswordView;