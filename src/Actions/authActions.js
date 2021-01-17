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
/*const getavatar = (email) => async (dispatch) => {
    try{
        const img = await Axios.post('http://localhost:3001/load-avatar', email);
        return img; 
    } catch(err) {
      console.log(err);
    }
}
*/

const signout = () => (dispatch) => {
    Cookie.remove('userInstance');
    dispatch({type: USER_SIGNOUT_SUCCESS});
}


export {signin, signup, signout};