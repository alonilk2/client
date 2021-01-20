import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/ProfileMain.css';
import Pdf from '../images/FinalTask.pdf';

function ProfileComponent(props) 
{
    
    return (   
        <div>
            <div id="main-section">
                <h1> My Profile </h1>
                <div className="content-section">
                    <div className="row">
                        <p className="col subtitle"> First name: </p>
                        <p className="col subtitle"> Phone: </p>
                        <p className="col subtitle"> Country: </p>
                    </div>
                    <div className="row">
                        <p className="col subtitle"> </p>
                        <p className="col subtitle"> </p>
                        <p className="col subtitle"> </p>
                    </div>
                    <div className="row">
                        <p className="col subtitle"> Last name: </p>
                        <p className="col subtitle"> Email: </p>
                        <p className="col subtitle"> City: </p>
                    </div>
                    <div className="row">
                        <p className="col subtitle"> </p>
                        <p className="col subtitle"> </p>
                        <p className="col subtitle"> </p>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default ProfileComponent;