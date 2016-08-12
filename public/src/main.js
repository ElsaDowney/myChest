import React from "react";
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import {render} from "react-dom";
import App from "./components/App";
import Home from './components/Home'
import AllMatches from './components/AllMatches'
import ClothesList from './components/ClothesList'
import AddList from  './components/AddList'
import LoginAndRegister from  './components/LoginAndRegister'


render(
    <Router  history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Home}/>
            <Route path="Home" component={Home}/>
            <Route path="LoginAndRegister" component={LoginAndRegister}/>
            <Route path="AllMatches" component={AllMatches}/>
            <Route path="ClothesList" component={ClothesList}/>
            <Route path="AddList" component={AddList}/>
        </Route>
    </Router>,
    document.getElementById("app")
);