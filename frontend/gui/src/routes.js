import React from 'react'
import { Route } from 'react-router-dom';
import Generalinfo from './components/staffinfo/Generalinfo';
import Add from './components/staffinfo/Add';
import Edit from './components/staffinfo/Edit';
import Qualification_View from './components/qualification/Qualification_View';
import QualiAdd from './components/qualification/Add';
import QualiEdit from './components/qualification/Edit';

const BaseRouter = () => (
    <div>
        <Route exact path ='' component = {Generalinfo}/>
        <Route exact path ='/edit' component = {Edit}/>
        <Route exact path ='/add' component = {Add}/>
        <Route exact path ='qualification' component = {Qualification_View}/>
        <Route exact path ='qualification/edit' component = {QualiAdd}/>
        <Route exact path ='qualification/add' component = {QualiEdit}/>
    </div>
);

export default BaseRouter;