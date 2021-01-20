import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/ProfileMain.css';
import cookie from 'js-cookie';
import {updatePass} from '../Actions/authActions'
function ProfileComponent(props) 
{
    const userInstance = cookie.get('userInstance');  
    const [oldpass, setOldpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const [newpass1, setNewpass1] = useState('');
    const dispatch = useDispatch();

    if(userInstance){
        const user = JSON.parse(userInstance)
        const onClickUpdate = () => {
            if(newpass === newpass1)
                dispatch(updatePass(user.data.user.email, oldpass, newpass))
            else alert("Both passwords should be identical.");
        }
        return (   
            <div>
                <div id="main-section">
                    <h1> My Profile </h1>
                    <div className="content-section">
                        <div className="row">
                            <p className="col subtitle"> First name: </p>
                            <p className="col subtitle"> Phone: </p>
                            <p className="col subtitle"> Country: </p>
                        </div>
                        <div className="row">
                            <p className="col subtitle"> {user.data.user.first_name} </p>
                            <p className="col subtitle"> {user.data.user.phonenumber ? user.data.user.phonenumber : "-------"}</p>
                            <p className="col subtitle"> {user.data.user.country ? user.data.user.country : "-------"}</p>
                        </div>
                        <div className="row">
                            <p className="col subtitle"> Last name: </p>
                            <p className="col subtitle"> Email: </p>
                            <p className="col subtitle"> City: </p>
                        </div>
                        <div className="row">
                            <p className="col subtitle"> {user.data.user.last_name}</p>
                            <p className="col subtitle"> {user.data.user.email}</p>
                            <p className="col subtitle"> {user.data.user.city ? user.data.user.city : "-------"}</p>
                        </div>
                    </div>
                    <div className="updatepass-section">
                        <div className="row">
                            <form className="UpdatePasswordForm" onSubmit={onClickUpdate}>
                                <p id="title">Update Password</p>
                                <input id="password" type="password" onChange={(e) => setOldpass(e.target.value)} className="form-control fix-rounded-right" required placeholder="Enter Old Password" aria-label="password:" aria-describedby="basic-addon2"></input>
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
                                <div className="row">
                                    <button className="Signup-btn" type="submit">Update Password</button>
                                </div>
                            </form>
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
                </div>
            </div> 
        )
    }
}
export default ProfileComponent;