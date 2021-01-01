import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import '../css/signup.css'
import ReCAPTCHA from "react-google-recaptcha";


//import { signin} from '../../actions/authActions';
//import NavBar from '../../navbar';

function SignupComponent(props) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();
  function onSubmit() {
  const recaptchaValue = recaptchaRef.current.getValue();
  this.props.onSubmit(recaptchaValue);
  //dispatch(SignUp(Email, password));
}
function onChange(value) {
  console.log("Captcha value:", value);
}
  //const userInstance = useSelector(state => state.user);
  //const { data, error} = userInstance;
  /*const dispatch = useDispatch();
  const login = (event) => {
    event.preventDefault();
    dispatch(signin(Email, password));
    if(error) {
      console.log("error");
    }

  }
  //useEffect triggers when side effects occur
  useEffect(() => {
    if(data) {
      history.push('/');
    }
    return () => {
    };
  }, [data]);*/
  return (   
    <div>
	  <div id="container">
		<div className= "row justify-content-center">
          <div id="myform">
			<div className="col-6 login-left">
				<form className="login-form" action="#" method="post" autocomplete="off">
				  <p id="title">Sign Up</p>
					<input id="Firstname" type="text" className="form-control fix-rounded-right" required placeholder="Enter Firstname" aria-label="Fullname" aria-describedby="basic-addon1"></input>
					<div className="invalid-feedback">
					  Please choose a Firstname.
					</div>
					<input id="Lastname" type="text" className="form-control fix-rounded-right" required placeholder="Enter Lastname" aria-label="Lastname" aria-describedby="basic-addon1"></input>
					<div className="invalid-feedback">
					  Please choose a username.
					</div>
					<input id="email" type="text" className="form-control fix-rounded-right" required placeholder="Enter Email" aria-label="user name or email" aria-describedby="basic-addon1"></input>
					<div className="invalid-feedback">
					  Please choose a username.
					</div>
					<input id="email1" type="text" className="form-control fix-rounded-right" required placeholder="Re-Enter Email" aria-label="Re-Enter Email" aria-describedby="basic-addon1"></input>
					<div className="invalid-feedback">
					  Please choose a username.
					</div>
					<input id="password" type="password" className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
					<div className="invalid-feedback">
					  Please enter your password.
					</div>
					<input id="password1" type="password" className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
					<div className="invalid-feedback">
					  Please enter your password.
					</div>
	  				<div className="row">
					  <a id="forgot" href="heeps://www.google.come">Forgot password?</a>
	  				</div>
					<div className="row">
					  <button className="Signup-btn" type="submit" onClick="onClickSignIn()">Signup</button>
	  				</div>
					<div className="row">
						 <div className="need-acc-txt"> Have an account? <a href="/signin">Sign-In</a> </div>
	  				</div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B"
                        onChange={onChange}
                      />
				</form>
		  	</div>
			<div className="col-6 login-right">
				<div className="row">
	  				<p className="alternate-login">Or login using:</p>
	  			</div>
				<div className="row">
				  <button className="login-btn facebook-login-btn" type="submit" onClick="onClickSignIn()">Facebook</button>
				</div>
				<div className="row">
				  <button className="login-btn instagram-login-btn" type="submit" onClick="onClickSignIn()">Instagram</button>
				</div>
				<div className="row">
				  <button className="login-btn google-login-btn" type="submit" onClick="onClickSignIn()">Google</button>
				</div>
	  		</div>
          </div>
          </div>
        </div>
    </div> 
  );
}
export default SignupComponent;
