import React from "react";
import { Router, Route, hashHistory } from 'react-router';
const Login = require('./components/Login');
import {render} from "react-dom";
import App from "./components/App";


render(
    <Router  history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="Login" component={Login}/>
        </Route>
    </Router>,
    document.getElementById("app")
);