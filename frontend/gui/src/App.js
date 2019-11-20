import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'; 
import PrivateRoute from './components/common/PrivateRoute';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
import Generalinfo from './components/staffinfo/Generalinfo';
import Add from './components/staffinfo/Add';
import Edit from './components/staffinfo/Edit';
//--------------------------------
import Qualification_view from './components/qualification/Qualification_View';
import QualiAdd from './components/qualification/Add';
import QualiEdit from './components/qualification/Edit';
//--------------------------------
import Specialization_view from './components/area_of_spec/Spec_Mem_view';
import SpecAdd from './components/area_of_spec/Add';
import SpecEdit from './components/area_of_spec/Edit';
//--------------------------------
import { LoadUser } from './actions/auth';


class App extends Component {
  componentDidMount(){
    store.dispatch(LoadUser());
  };  
  render(){
  return (
    <div className="App">
      <Provider store = {store}>
        <Router>
        <Switch>
        <Route exact path ='/register' component = {Register}/>
        <Route exact path ='/login' component = {Login}/>

        <PrivateRoute exact path ='/' component = {Generalinfo}/>
        <PrivateRoute exact path ='/edit' component = {Edit}/>
        <PrivateRoute exact path ='/add' component = {Add}/>

        <PrivateRoute exact path ='/qualification' component = {Qualification_view}/>
        <PrivateRoute exact path ='/qualification/edit' component = {QualiEdit}/>
        <PrivateRoute exact path ='/qualification/add' component = {QualiAdd}/>

        <PrivateRoute exact path ='/specialization' component = {Specialization_view}/>
        <PrivateRoute exact path ='/specialization/edit' component = {SpecEdit}/>
        <PrivateRoute exact path ='/specialization/add' component = {SpecAdd}/>
        </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}

export default App;
