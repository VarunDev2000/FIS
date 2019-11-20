import React from 'react'
import { Route } from 'react-router-dom';
import Generalinfo from './containers/Generalinfo';
import Add from './containers/Add';
import Edit from './containers/Edit';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';

const BaseRouter = () => (
    <div>
        <Route exact path ='' component = {Generalinfo}/>
        <Route exact path ='/edit' component = {Edit}/>
        <Route exact path ='/add' component = {Add}/>

    </div>
);

export default BaseRouter;