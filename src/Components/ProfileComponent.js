import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/ProfileMain.css';
import cookie from 'js-cookie';
import {updatePass} from '../Actions/authActions'
import {updateDet} from '../Actions/authActions'

function ProfileComponent(props) 
{
    const userInstance = cookie.get('userInstance');  
    const [oldpass, setOldpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const [newpass1, setNewpass1] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [email, setemail] = useState('');
    const [country, setcountry] = useState('');
    const [city, setcity] = useState('');
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    if(userInstance){
        const user = JSON.parse(userInstance)
        const onClickUpdate = () => {
            if(newpass === newpass1)
                dispatch(updatePass(user.data.user.email, oldpass, newpass))
            else alert("Both passwords should be identical.");
        }
        
        const onClickUp = () => {
            dispatch2(updateDet(user.data.user.email, first_name, last_name, phonenumber, country, city))
        }
        
        return (   
            <div>
                <div id="main-section">
                    <h1>My Profile</h1>
                    <div className="content-section">
                        <div className="row">
                            <p className="col subtitle"> First name: </p>
                            <p className="col subtitle"> Phone: </p>
                            <p className="col subtitle"> Country: </p>
                        </div>
                        <div className="row">
                            <input id="first_name" type="text" onChange={(e) => setfirst_name(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.first_name}></input>
                            <input id="phonenumber" type="text" onChange={(e) => setphonenumber(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.phonenumber ? user.data.user.phonenumber : "-------"}></input>
                            <input id="country" type="text" onChange={(e) => setcountry(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.country ? user.data.user.country : "-------"}></input>
                        </div>
                        <div className="row">
                            <p className="col subtitle"> Last name: </p>
                            <p className="col subtitle"> Email: </p>
                            <p className="col subtitle"> City: </p>
                        </div>
                        <div className="row">
                            <input id="last_name" type="text" onChange={(e) => setlast_name(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.last_name}></input>
                            <input id="email1" type="text" onChange={(e) => setemail(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.email}></input>
                            <input id="city" type="text" onChange={(e) => setcity(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.city ? user.data.user.city : "-------"}></input>
                        </div>
                    <button type="submit" onClick={onClickUp}>Edit yous details</button>
                    </div>
					<h2>Update Password</h2>
                    <div className="updatepass-section">
                        <div className="col">
							<input id="password0" type="password" onChange={(e) => setOldpass(e.target.value)} className="form-control fix-rounded-right" required placeholder="Enter Old Password" aria-label="password:" aria-describedby="basic-addon2"></input>
							<div className="invalid-feedback">
								Please enter your password.
							</div>
							<input id="password" type="password" onChange={(e) => setNewpass(e.target.value)} className="form-control fix-rounded-right" required placeholder="Enter New Password" aria-label="password:" aria-describedby="basic-addon2"></input>
							<div className="invalid-feedback">
								Please enter your password.
							</div>
                            <input id="password1" type="password" onChange={(e) => setNewpass1(e.target.value)} className="form-control fix-rounded-right" required placeholder="Re-enter New Password" aria-label="password:" aria-describedby="basic-addon2"></input>
							<div className="invalid-feedback">
								Please enter your password.
							</div>
						</div>
						<div className="col">
                            <p>* Both Password must match</p>
                            <p>* The password must contain at least one number</p>
                            <p>* The password must contain at least 6 characters</p>
						</div>
					</div>	
                    <div className="row">
    				    <button type="submit">Update Password</button>
                    </div>
                </div>
            </div> 
        );
    }
    else {
        return (
            <div>
                <div id="main-section">
                    <h1> My Profile </h1>
                </div>
            </div> 
        )
    }
}
export default ProfileComponent;