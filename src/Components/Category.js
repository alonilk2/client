
import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/Category.css'
import Card from 'react-bootstrap/Card'



function Category(props) {
    return (  
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`./`+props.imagePath}/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              Click here to see more {props.title}
              </Card.Text>
              <Button variant="primary">Find out more</Button>
            </Card.Body>
          </Card>
        </div>
    );
  }
export default Category;
