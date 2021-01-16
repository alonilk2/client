import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import SignIn from '../Components/SignInComponent';

class SignInView extends Component
{
    render() {
        return (
            <div>
                <NavBar />
				<SignIn />
			</div>
		)
	}
}
export default SignInView;