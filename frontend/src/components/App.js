import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

import  {Provider} from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';


//Alert Options
const alertOptios = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptios}>
                <Fragment>
                    <Header/>
                    <Alerts/>
                    <div className="container">
                        <Dashboard/>
                    </div>
                </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
    
}

ReactDOM.render(<App />, document.getElementById('app'));