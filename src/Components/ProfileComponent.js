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
    const user = JSON.parse(userInstance);
    const [oldpass, setOldpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const [newpass1, setNewpass1] = useState('');
    const [first_name, setfirst_name] = useState(user.data.user.first_name);
    const [last_name, setlast_name] = useState(user.data.user.last_name);
    const [phonenumber, setphonenumber] = useState(user.data.user.phonenumber);
    const [email, setemail] = useState(user.data.user.email);
    const [country, setcountry] = useState(user.data.user.country);
    const [city, setcity] = useState(user.data.user.city);
    const dispatch = useDispatch();
    if(userInstance){
        const onClickUpdate = () => {
            if(newpass === newpass1)
                dispatch(updatePass(user.data.user.email, oldpass, newpass))
            else alert("Both passwords should be identical.");
        }
        const onClickUp = () => {
            dispatch(updateDet(user.data.user.email, first_name, last_name, phonenumber, country, city))
        }
        return (   
            <div>
                <div id="main-section">
                    <h1>My Profile</h1>
                    <div className="content-section">
                        <div className="row">
                            <div className="col input-column">
                                <p className="subtitle"> First name: </p>
                                <input id="first_name" type="text" onChange={(e) => setfirst_name(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.first_name}></input>
                            </div>
                            <div className="col input-column">
                                <p className="input-column"> Phone: </p>
                                <input id="phonenumber" type="text" onChange={(e) => setphonenumber(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.phonenumber ? user.data.user.phonenumber : "-------"}></input>
                            </div>
                            <div className="col input-column">
                                <p className="input-column"> Country: </p>
                                <input id="country" type="text" onChange={(e) => setcountry(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.country ? user.data.user.country : "-------"}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col input-column">
                                <p className="input-column"> Last name: </p>
                                <input id="last_name" type="text" onChange={(e) => setlast_name(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.last_name}></input>
                            </div>
                            <div className="col input-column">
                                <p className="input-column"> Email: </p>
                                <input id="email1" type="text" onChange={(e) => setemail(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.email}></input>
                            </div>
                            <div className="col input-column">
                                <p className="input-column"> City: </p>
                                <input id="city" type="text" onChange={(e) => setcity(e.target.value)} className="form-control fix-rounded-right" required placeholder={user.data.user.city ? user.data.user.city : "-------"}></input>
                            </div>
                        </div>
                    <button type="submit" onClick={onClickUp}>Update Detailes</button>
                    </div>
					<h2>Update Password</h2>
                    <div>
                        <div className="updatepass-section">
                            <div className="col pass-col">
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
                            <div className="col pass-col">
                                <p>* Both Password must match</p>
                                <p>* The password must contain at least one number</p>
                                <p>* The password must contain at least 6 characters</p>
                            </div>
                        </div>	
                        <div className="row">
                            <button type="submit" onClick={onClickUpdate}>Update Password</button>
                        </div>
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
                    <h2> Please log-in ! </h2>
                </div>
            </div> 
        )
    }
}
export default ProfileComponent;