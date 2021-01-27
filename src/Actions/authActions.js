import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_ATTEMPT, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILED,
         USER_SIGNUP_ATTEMPT, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED,
         USER_SIGNOUT_SUCCESS} from '../Constants/userConst';
import { Redirect, Route } from "react-router";
import { history } from '../history';

function signin(email, password) {
    return dispatch => {
        dispatch({type: USER_SIGNIN_ATTEMPT, payload: {}});
        Axios.post("https://techstar12.herokuapp.com/signin", {
            email: email,
            password: password
        })
        .then(function(response) { 
            if(response.data.success){
                dispatch({type: USER_SIGNIN_SUCCESS, payload: response});
                Cookie.set('userInstance', JSON.stringify(response));
                history.push('/');
            }
            else {
                if(response.data.error === 0)
                    dispatch({type: USER_SIGNIN_FAILED, payload: 0});
                else if(response.data.error === 1)
                    dispatch({type: USER_SIGNIN_FAILED, payload: 1});
            }
        })
        .catch(function(error) {
            dispatch({type: USER_SIGNIN_FAILED, payload: error});
        });
    };

}

const signup = (email, password, firstname, lastname) => async (dispatch) => {
    dispatch({type: USER_SIGNUP_ATTEMPT, payload: {}});
    try{
        const user = await Axios.post("https://techstar12.herokuapp.com/signup",{
            "email": email,
            "password": password,
            "firstname": firstname,
            "lastname": lastname
        });
        if(user.data.success){
            dispatch({type: USER_SIGNUP_SUCCESS, payload: user});
            Cookie.set('userInstance', JSON.stringify(user));
            history.push('/');
        }
        else {
            if(user.data.error === 0)
                dispatch({type: USER_SIGNUP_FAILED, payload: 0});
            else if(user.data.error === 1)
                dispatch({type: USER_SIGNUP_FAILED, payload: 1});
        }
    }
    catch (err) {
        dispatch({type: USER_SIGNUP_FAILED, payload: err});
    }
}

const sendMail = (email, subject, text) => async (dispatch) => {
    try{
        const response = await Axios.post("https://techstar12.herokuapp.com/sendMail",{
            "email": email,
            "subject": subject,
            "text": text
        });
        if(response.data.error){
            console.log(response.data.status);
        }
    }
    catch (err) {
        console.log(err);
    }
}

const updatePass = (email, oldpass, newpass) => async (dispatch) => {
    try{
        const response = await Axios.post("https://techstar12.herokuapp.com/updatePass",{
            "email": email,
            "oldpass": oldpass,
            "newpass": newpass
        });
        if(response.data.success === true){
            dispatch(signout());
            history.push('/');  
            alert("Password has been changed successfully, please re-login.");
        }
        else {
            alert("The old password you have entered is wrong. Password hasn't changed");
        }
    }
    catch (err) {
        console.log(err);
    }
}

const updateDet = (email, first_name, last_name, phonenumber, country, city) => async (dispatch) => {
    try{
        const response = await Axios.post("https://techstar12.herokuapp.com/updateDet",{
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "phonenumber": phonenumber,
            "country": country,
            "city": city
        });
        if(response.data.success == true){
            alert("Detailes updated successfully!");
            //dispatch(signout());
            //history.push('/');  
        }
        else console.log(response.data.status);
    }
    catch (err) {
        console.log(err);
    }
}

const signout = () => (dispatch) => {
    Cookie.remove('userInstance');
    dispatch({type: USER_SIGNOUT_SUCCESS});
}

export {signin, signup, signout, sendMail, updatePass, updateDet};