import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import SignUp from '../Components/SignupComponent';

class SignUpView extends Component 
{
    render() 
    {
		return (
			<div>
                <NavBar />
				<SignUp />
			</div>
		)
	}
}
export default SignUpView;