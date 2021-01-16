import React, {Component} from 'react';
import '../css/HomePage.css'
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import HomePageComp from '../Components/HomePageComponent';

class HomePageView extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<HomePageComp />
			</div>
		)
	}
}
export default HomePageView;