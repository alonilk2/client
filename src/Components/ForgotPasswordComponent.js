
import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import '../css/signup.css';
import ReCAPTCHA from "react-google-recaptcha";
//import { signin} from '../../actions/authActions';
//import NavBar from '../../navbar';

function ForgotPasswordComponent(props) {
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
      
			<div className="col login-left">
				<form className="login-form" action="#" method="post" autocomplete="off">
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
