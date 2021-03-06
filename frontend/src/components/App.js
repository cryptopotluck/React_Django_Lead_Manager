import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

//login & Out
import Login from './accounts/Login'
import Register from './accounts/Register'

import  {Provider} from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';


//Alert Options
const alertOptios = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptios}>
                    <Router>
                <Fragment>
                    <Header/>
                    <Alerts/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Dashboard}/>
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/login' component={Login}/>


                        </Switch>
                    </div>
                </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));