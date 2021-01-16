import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route} from 'react-router-dom';
import history from './history';
import {Provider} from 'react-redux';
import store from './store';
import SignIn from './Views/SignInView';
import SignUp from './Views/SignUpView';
import UpdatePassView from './Views/UpdatePassView';
import ForgotPasswordView from './Views/ForgotPasswordView';
import AboutView from './Views/AboutView';
import ConstractionView from './Views/ConstractionView';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>      
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/Signin" component={SignIn}></Route>
                    <Route path="/SignUp" component={SignUp}></Route>
                    <Route path="/UpdatePass" component={UpdatePassView}></Route> 
                    <Route path="/ForgotPass" component={ForgotPasswordView}></Route>
                    <Route path="/About" component={AboutView}></Route>
                    <Route path="/Constraction" component={ConstractionView}></Route>
                </div>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();