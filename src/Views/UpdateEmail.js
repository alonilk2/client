import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Axios from 'axios';
import {history} from '../history';

class UpdateEmail extends Component 
{
    constructor(props)
    {
        super(props);
    }
    async componentWillMount() {
		try{
			const response = await Axios.post("https://techstar12.herokuapp.com/approveEmail",{
				"userid": this.props.match.params.userid,
				"token": this.props.match.params.token
			});
			if(response.data.success === true){
				history.push('/');  
				alert("Your email change has been approved.");
			}
			else {
				alert("Sorry, We encountered a problem.");
				history.push('/');  
			}
		}
		catch (err) {
			console.log(err);
		}
    }
    render() 
    {
		return (
			<div>
				<NavBar />
			</div>
		)
	}
}
export default UpdateEmail;