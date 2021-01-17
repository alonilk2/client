import React, {Component, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/HomePage.css'
import Category from '../Components/Category';
import Axios from 'axios';

class HomePageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {categories:[]};
    }
    async componentWillMount() {
        this.categoryList = this.categoryList.bind(this);
        try {
            var catsToList = await Axios.get("https://techstar12.herokuapp.com/fetch_categories"); 
            console.log(catsToList);
            if(catsToList.data.success){
                this.setState({categories: catsToList.data.result});
                console.log(this.state.categories);
            } else {
                console.log("Error: could not fetch category list from server.");
            }
        } catch (error) {
            console.log(error);
        }
    }
    categoryList = () => {
        if(this.state.categories) {    
            const list = this.state.categories.map((category) =>
            <Category key={category.Name} title={category.Name} imagePath={category.imagePath}/>)
            return (list);
        }
    }
    render(){
        return (
            <div className="HomePagecontainer">
                {this.categoryList()}
            </div>
        );
    }

}
export default HomePageComponent;