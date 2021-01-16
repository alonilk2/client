import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
            <Router>
                <Switch>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route path="/Signup">
                        <SignUp />
                    </Route>
                    <Route path="/Updatepass">
                        <UpdatePassView />
                    </Route>
                    <Route path="/Forgotpass">
                        <ForgotPasswordView />
                    </Route>
                    <Route path="/About">
                        <AboutView />
                    </Route>
                    <Route path="/Constraction">
                        <ConstractionView />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </Router>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();