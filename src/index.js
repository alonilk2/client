import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import SignIn from './Views/SignInView';
import SignUp from './Views/SignUpView';
import UpdatePassView from './Views/UpdatePassView';
import ForgotPasswordView from './Views/ForgotPasswordView';
import AboutView from './Views/AboutView';
import ConstractionView from './Views/ConstractionView';
import fourView from './Views/fourView';
import ProfileView from './Views/ProfileView';
import {history} from './history';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>  
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />                    
                    <Route path="/UpdatePass" component={UpdatePassView} />
                    <Route path="/ForgotPass" component={ForgotPasswordView} />                    
                    <Route path="/About" component={AboutView} />
                    <Route path="/Constraction" component={ConstractionView} />
                    <Route path="/profile" component={ProfileView} />
					<Route path="/404" component={fourView} />
                    <Redirect from="*" to="/404" />
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