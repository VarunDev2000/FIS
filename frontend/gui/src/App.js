import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'; 
import BaseRouter from './routes';
import PrivateRoute from './components/common/PrivateRoute';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store'
import Generalinfo from './containers/Generalinfo';
import Add from './containers/Add';
import Edit from './containers/Edit';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
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
        </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}

export default App;
