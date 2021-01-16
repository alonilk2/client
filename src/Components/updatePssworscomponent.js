import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Update.css'

function UpdatePasswordComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	
    function onClickUpdate() 
    {
        let pass = document.getElementById("password").value;
        let conf = document.getElementById("password1").value;
        
        checkPwd(pass);
		
        if (conf == pass) 
        {
            return (true)
        }
		alert("The passwords do not match");
		return (false)
    }
	
    function checkPwd(str) 
    {
	   if (str.length < 6)
		  alert("Too short");
	   else if (str.search(/\d/) == -1) 
           alert("No num");
	   else if (str.search(/[a-zA-Z]/) == -1) 
           alert("no chars");

	return ("ok");
	}
	
    return (   
        <div>
            <div id="UpdatePasswordcontainer">
                <div className= "row justify-content-center">
                    <div id="UpdatePassword">
                        <form className="UpdatePasswordForm" action="#" method="post" autocomplete="off">
                            <p id="title">Update Password</p>
                            <input id="password" type="password" className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <input id="password1" type="password" className="form-control fix-rounded-right" required placeholder="Re-enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <div className="row">
                                <button className="Signup-btn" type="submit" onClick={onClickUpdate}>Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default UpdatePasswordComponent;