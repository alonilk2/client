import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import ConstComp from '../Components/ConstComp';
import '../css/Constraction.css'

class fourView extends Component 
{
    render() {
		return (
			<div>
				<NavBar />
				<ConstComp />
			</div>
		)
	}
}

export default fourView;