import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import UpdatePasswordComponent from '../Components/updatePssworscomponent';

class UpdatePassView extends Component 
{
    render() {
		return (
			<div>
				<NavBar />
				<UpdatePasswordComponent />
			</div>
		)
	}
}
export default UpdatePassView;