import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Window from './components/window';

import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch, Link, BrowserRouter, Redirect, hashHistory } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        {/*<Route exact path="/" component={App} />*/}
        <App/>
        <Route exact path="/modalWindow" component={Window} />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
