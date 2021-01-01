
import React, { useEffect, useState} from 'react';
import history from '../history';
import { useDispatch, useSelector } from 'react-redux';
import '../css/signup.css'

//import { signin} from '../../actions/authActions';
//import NavBar from '../../navbar';

function UpdatePasswordComponent(props) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
					  <button className="Signup-btn" type="submit" onClick="onClickUpdate()">Update Password</button>
	  				</div>
				</form>
		  	</div>
	  		</div>
          </div>
          </div>
        </div> 
  );
}
export default UpdatePasswordComponent;
