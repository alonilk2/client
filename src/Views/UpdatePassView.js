import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import UpdatePasswordComponent from '../Components/updatePasswordComponent';

class UpdatePassView extends Component 
{
    render() 
    {
		return (
			<div>
				<NavBar />
				<UpdatePasswordComponent userid={this.props.match.params.userid} token={this.props.match.params.token} />
			</div>
		)
	}
}
export default UpdatePassView;