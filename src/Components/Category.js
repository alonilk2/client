
import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/Category.css'
import Card from 'react-bootstrap/Card'



function Category(props) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (  
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </div>
  );
}
export default Category;
