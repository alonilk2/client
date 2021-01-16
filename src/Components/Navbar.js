import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../css/navbar.css';
import logo from '../images/logo.png';
import ProfileNavComp from './ProfileNavComp'

class NavBar extends Component 
{
	render() {
		return (
            <div className="navbar-parent">
                <Navbar expand='lg'>
                    <Navbar.Brand href="#home"><img src={logo} height="" alt="logo" className="d-inline-block align-top logoc"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
 			                <Nav className='mr-auto'>
                                <a href="/">Home</a>
                                <a href='/Signin'>Login</a>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
 			            <ProfileNavComp />
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}
export default NavBar;