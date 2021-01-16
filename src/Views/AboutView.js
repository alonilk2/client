import React, {Component} from 'react';
import '../css/About.css'
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import AboutComponent from '../Components/AboutComponent';

class AboutView extends Component 
{
    render() {
        return (
			<div>
				<NavBar />
				<AboutComponent />
			</div>
		)
	}
}

export default AboutView;