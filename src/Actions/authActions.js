import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_ATTEMPT, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILED,
        USER_SIGNUP_ATTEMPT, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED,
        USER_SIGNOUT_SUCCESS} from '../Constants/userConst';

const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_ATTEMPT, payload: {}});
    try{
        const user = await Axios.post("https://techstar12.herokuapp.com/signin",{
            "email": email,
            "password": password
        });
        dispatch({type: USER_SIGNIN_SUCCESS, payload: user});
        const usert = user.data;
        console.log(usert);
        Cookie.set('userInstance', JSON.stringify(usert));
    }
    catch (err) {
        dispatch({type: USER_SIGNIN_FAILED, payload: err});
    }
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
        dispatch({type: USER_SIGNUP_SUCCESS, payload: user});
        const usert = user.data;
        Cookie.set('userInstance', JSON.stringify(usert));
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