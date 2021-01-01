import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import '../css/HomePage.css'
import Category from '../Components/Category';



function HomePageComponent(props) {

  return (   
	  <div className="container">
		  <Category />
		  <Category />
		  <Category />
	 
	  </div>
  );
}
export default HomePageComponent;
