import React, { useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Constraction.css'

function ConstractionComponent(props) 
{
    return (   
        <div>
            <div id="ConstractionContainer">
                <div id="Constractionform">
                    <div className="col login-left-Constraction">
                        <form className="login-form-Constraction" action="#" method="post" autocomplete="off">
                            <p id="title">This page under constraction. </p>
                            <div className="constract"> 
                                Return to <a href="/">Dashboard</a> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default ConstractionComponent; 