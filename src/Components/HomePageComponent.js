import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/HomePage.css'
import CategoryPhone from '../Components/CategoryPhone';
import CategoryComputer from '../Components/CategoryComputer';
import CategoryTablet from '../Components/CategoryTablet';

function HomePageComponent(props) 
{
    return (   
        <div className="HomePagecontainer">
            <CategoryPhone />
            <CategoryComputer />
            <CategoryTablet />
        </div>
    );
}
export default HomePageComponent;