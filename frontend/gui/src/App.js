import React, { Component } from 'react';
import { Router,Route,Switch } from 'react-router-dom'; 
import PrivateRoute from './components/common/PrivateRoute';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/accounts/Login';
import history from './components/common/history'

//--------------------------------
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
import SpecEditbyID from './components/area_of_spec/EditbyID';
//--------------------------------
import Employment_view from './components/employment/Employment_View';
import EmpAdd from './components/employment/Add';
import EmpEdit from './components/employment/Edit';
//--------------------------------
import Publication_view from './components/publication/Publication_View';
import PubliAdd from './components/publication/Add';
import PubliEdit from './components/publication/Edit';
//--------------------------------
import CSW_view from './components/csw/CSW_view';
import CSWAdd from './components/csw/Add';
import CSWEdit from './components/csw/Edit';
//--------------------------------
import Project_view from './components/project/Project_view';
import ProAdd from './components/project/Add';
import ProEdit from './components/project/Edit';
//--------------------------------
import LecAdd from './components/invited_lectures/Add';
//--------------------------------
import ExpAdd from './components/experience_abroad/Add';
//--------------------------------
import BookPubliAdd from './components/book_published/Add';
//--------------------------------
import EAOAdd from './components/eao_programme/Add';
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
        <Router history = {history}>
        <Switch>
        <Route exact path ='/login' component = {Login}/>

        <PrivateRoute exact path ='/' component = {Generalinfo}/>
        <PrivateRoute exact path ='/edit/:id' component = {Edit}/>
        <PrivateRoute exact path ='/add' component = {Add}/>

        <PrivateRoute exact path ='/qualification' component = {Qualification_view}/>
        <PrivateRoute exact path ='/qualification/edit/:id' component = {QualiEdit}/>
        <PrivateRoute exact path ='/qualification/add' component = {QualiAdd}/>

        <PrivateRoute exact path ='/specialization' component = {Specialization_view}/>
        <PrivateRoute exact path ='/specialization/edit' component = {SpecEdit}/>
        <PrivateRoute exact path ='/specialization/add' component = {SpecAdd}/>
        <PrivateRoute exact path ='/specialization/edit/:id' component = {SpecEditbyID}/>

        <PrivateRoute exact path ='/employment' component = {Employment_view}/>
        <PrivateRoute exact path ='/employment/edit/:id' component = {EmpEdit}/>
        <PrivateRoute exact path ='/employment/add' component = {EmpAdd}/>

        <PrivateRoute exact path ='/publication' component = {Publication_view}/>
        <PrivateRoute exact path ='/publication/edit/:id' component = {PubliEdit}/>
        <PrivateRoute exact path ='/publication/add' component = {PubliAdd}/>

        <PrivateRoute exact path ='/csw' component = {CSW_view}/>
        <PrivateRoute exact path ='/csw/edit/:id' component = {CSWEdit}/>
        <PrivateRoute exact path ='/csw/add' component = {CSWAdd}/>

        <PrivateRoute exact path ='/project' component = {Project_view}/>
        <PrivateRoute exact path ='/project/edit/:id' component = {ProEdit}/>
        <PrivateRoute exact path ='/project/add' component = {ProAdd}/>

        <PrivateRoute exact path ='/invited_lectures/add' component = {LecAdd}/>
        
        <PrivateRoute exact path ='/experience_abroad/add' component = {ExpAdd}/>

        <PrivateRoute exact path ='/book_published/add' component = {BookPubliAdd}/>

        <PrivateRoute exact path ='/eao_programme/add' component = {EAOAdd}/>
        
        </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}

export default App;
