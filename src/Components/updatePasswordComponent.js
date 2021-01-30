import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Update.css'
import {updatePassForgot} from '../Actions/authActions';
function UpdatePasswordComponent(props) 
{
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const dispatch = useDispatch();

    function onClickUpdate() 
    {
        if(checkPwd(password)) {
            if(password === password1)
                dispatch(updatePassForgot(props.userid, props.token, password))
            else alert("The passwords do not match");
        }
    }
	
    function checkPwd(str) 
    {
	   if (str.length < 6)
		  alert("Too short");
	   else if (str.search(/\d/) == -1) 
           alert("No num");
	   else if (str.search(/[a-zA-Z]/) == -1) 
           alert("no chars");
	    return true;
	}
	
    return (   
        <div>
            <div id="UpdatePasswordcontainer">
                <div className= "row justify-content-center">
                    <div id="UpdatePassword">
                        <div>
                            <p id="title">Update Password</p>
                            <input id="pass1" type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <input id="pass2" type="password" onChange={(e)=>setPassword1(e.target.value)} className="form-control fix-rounded-right" required placeholder="Re-enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <div className="row">
                                <button className="Signup-btn" onClick={onClickUpdate}>Update Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default UpdatePasswordComponent;