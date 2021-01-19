
import React, {Component} from 'react';
import '../css/stylessign.css'
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import SignUp from '../Components/SignupComponent';
class Signup extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SignUp />
			</div>
		)
	}
}

export default Signup;