import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import ConstractionComponent from '../Components/ConstractionComponent';
import '../css/Constraction.css'

class ConstractionView extends Component {
    render() {
		return (
			<div>
				<NavBar />
				<ConstractionComponent />
			</div>
		)
	}
}

export default ConstractionView;