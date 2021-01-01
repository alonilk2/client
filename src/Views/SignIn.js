
import React, {Component} from 'react';
import '../css/stylessign.css'
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Login from '../Components/Login';
import Category from '../Components/Category';
class SignIn extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Login />
				<Category />
			</div>
		)
	}
}

export default SignIn;