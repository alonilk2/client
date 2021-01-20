import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Forgot.css';
import ReCAPTCHA from "react-google-recaptcha";
import {sendMail} from '../Actions/authActions';
function ForgotPasswordComponent(props) 
{
    const [Email, setEmail] = useState('');
    const recaptchaRef = React.createRef();
    const dispatch = useDispatch(); 
    function handleSubmit() 
    {
        //const recaptchaValue = recaptchaRef.current.getValue();
        //this.props.onSubmit(recaptchaValue);
        dispatch(sendMail(Email, "Reset Password", "Please enter this URL to change password: "));
    }
    
    function onChange(value) 
    {
        console.log("Captcha value:", value);
    }

    return (   
        <div>
            <div id="ForgotContainer">
                <div className= "row justify-content-center">
                    <div id="Forgot">
                        <div className="col login-left">
                            <form onSubmit={handleSubmit}>
                                <p id="title">Reset Password</p>
                                <input id="email" type="text" className="form-control fix-rounded-right" onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter Email Address" aria-label="email Address" aria-describedby="basic-addon1"></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                                <div className="row">
                                    <button className="Signup-btn" type="submit">Reset Password</button>
                                </div>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn"
                                    onChange={onChange}
                                />
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default ForgotPasswordComponent;