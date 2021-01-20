import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Constraction.css'

function ConstComp(props) 
{
    return (   
        <div>
            <div id="ConstractionContainer">
                <div id="Constractionform">
                    <div className="col login-left-Constraction">
                        <form className="login-form-Constraction" action="#" method="post" autocomplete="off">
                            <p id="title">404 page</p>
                            <div className="constract"> 
                                Return to <a href="/">Home Page</a> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default ConstComp; 