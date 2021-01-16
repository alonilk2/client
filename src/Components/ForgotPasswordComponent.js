import React, { useEffect, useState} from 'react';
import history from '../history';
import { seDispatch, useSelector} from 'react-redux';
import '../css/Forgot.css';
import ReCAPTCHA from "react-google-recaptcha";

function ForgotPasswordComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const recaptchaRef = React.createRef();
    
    function onSubmit() 
    {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
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
                            <form className="ForgotForm" action="#" method="post" autocomplete="off">
                                <p id="title">Reset Password</p>
                                <input id="email" type="text" className="form-control fix-rounded-right" required placeholder="Enter Email Address" aria-label="email Address" aria-describedby="basic-addon1"></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                                <div className="row">
                                    <button className="Signup-btn" type="submit" onClick="onClickReset()">Reset Password</button>
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
        </div> 
    );
}
export default ForgotPasswordComponent;