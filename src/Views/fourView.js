import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import fourComponent from '../Components/fourComponent';
import '../css/Constraction.css'

class fourView extends Component 
{
    render() {
		return (
			<div>
				<NavBar />
				<fourComponent/>
			</div>
		)
	}
}

export default fourView;