import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../Actions/authActions';
import '../css/SignIn.css';
import ReCAPTCHA from "react-google-recaptcha";

function SignInComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const recaptchaRef = React.createRef();
    
    function onSubmit() 
    {
        dispatch(signin(Email, password));
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    
    return (   
        <div>
            <div id="SignIncontainer">
                <div className= "row justify-content-center">
                    <div id="SignIn">
                        <form className="SignInForm" autocomplete="off">
                            <p id="title">Sign In To Your Account</p>
                            <div className="email-field">
                                <input id="email" type="text" className="form-control fix-rounded-right" required 
                                    onChange = 
                                    {
                                        (e) => setEmail(e.target.value)
                                    }
                                    placeholder="user name or email" aria-label="user name or email" aria-describedby="basic-addon1">
                                </input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className="password-field">
                                <input id="password" type="password" className="form-control fix-rounded-right"     required placeholder="password:" aria-label="password:" onChange={(e) => setPassword(e.target.value)} aria-describedby="basic-addon2"></input>
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                            </div>
                            <div className="row">
                                <a id="forgot" href="/ResetPass">Forgot password?</a>
                            </div>
                            <div className="row">
                                <button className="SignInButton" type="submit" onClick={onSubmit}>Login</button>
                            </div>
                            <div className="row">
                                <div className="need-acc-txt"> 
                                    Need an account? <a href="/Signup">Sign-Up</a> </div>
                                </div>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B"
                                onChange={onChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignInComponent;