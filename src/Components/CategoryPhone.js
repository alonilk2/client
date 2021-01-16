import React, { useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../css/Category.css'
import Card from 'react-bootstrap/Card'

function CategoryPhone(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (  
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>phone</Card.Title>
                    <Card.Text>
                        Click here to see more Phones.
                    </Card.Text>
                    <Button variant="primary" onClick={(e) => 
                    {
                        e.preventDefault();
                        window.location.href='/Constraction';
                    }}>Buy</Button>
                    </Card.Body>
            </Card>
        </div>
    );
}
export default CategoryPhone;