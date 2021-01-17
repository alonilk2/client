import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/HomePage.css'
import Category from '../Components/Category';
import Axios from 'axios';

function HomePageComponent(props) 
{
    const [categories, setCategories] = useState();
    useEffect(() => {
        return () => {
            Axios.get("https://techstar12.herokuapp.com/fetch-categories")
            .then(function(response) { 
                if(response.data.success){
                    setCategories(response.data.categories);
                    console.log(categories);
                }
                else console.log("Error: could not fetch category list from server.");
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    })
    return (   
        <div className="HomePagecontainer">
            <Category title="Phones" imagePath="" />
            <Category title="Computer" imagePath="" />
            <Category title="Tablet" imagePath="" />
        </div>
    );
}
export default HomePageComponent;