import React, { Component } from 'react';
import { Router,Route,Switch } from 'react-router-dom'; 
import PrivateRoute from './components/common/PrivateRoute';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/accounts/Login';
import history from './components/common/history'

import Dashboard from './components/Dashboard/Dashboard';
//--------------------------------
import changePassword from './components/accounts/change_password'
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
import AdDetails from './components/publication/additional_details';
//--------------------------------
import CSW_view from './components/csw/CSW_view';
import CSWAdd from './components/csw/Add';
import CSWEdit from './components/csw/Edit';
import AdDetails_CSW from './components/csw/additional_details';
//--------------------------------
import Project_view from './components/project/Project_view';
import ProAdd from './components/project/Add';
import ProEdit from './components/project/Edit';
import ProAdDetails from './components/project/additional_details';
//--------------------------------
import Lecture_view from './components/invited_lectures/Lecture_view';
import LecAdd from './components/invited_lectures/Add';
import LecEdit from './components/invited_lectures/Edit';
//--------------------------------
import Exp_view from './components/experience_abroad/EA_view';
import ExpAdd from './components/experience_abroad/Add';
import ExpEdit from './components/experience_abroad/Edit';
//--------------------------------
import Book_view from './components/book_published/Book_view';
import BookPubliAdd from './components/book_published/Add';
import BookPubliEdit from './components/book_published/Edit';
//--------------------------------
import EAO_view from './components/eao_programme/EAO_view';
import EAOAdd from './components/eao_programme/Add';
import EAOEdit from './components/eao_programme/Edit';
//--------------------------------
import Ach_view from './components/achievements/Ach_view';
import AchAdd from './components/achievements/Add';
import AchEdit from './components/achievements/Edit';
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
        
        <PrivateRoute exact path ='/' component = {Dashboard}/>

        <PrivateRoute exact path ='/change-password' component = {changePassword}/>

        <PrivateRoute exact path ='/generalinfo' component = {Generalinfo}/>
        <PrivateRoute exact path ='/generalinfo/edit/:id' component = {Edit}/>
        <PrivateRoute exact path ='/generalinfo/add' component = {Add}/>

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
        <PrivateRoute exact path ='/publication/ad_details/:id' component = {AdDetails}/>

        <PrivateRoute exact path ='/csw' component = {CSW_view}/>
        <PrivateRoute exact path ='/csw/edit/:id' component = {CSWEdit}/>
        <PrivateRoute exact path ='/csw/add' component = {CSWAdd}/>
        <PrivateRoute exact path ='/csw/ad_details/:id' component = {AdDetails_CSW}/>


        <PrivateRoute exact path ='/project' component = {Project_view}/>
        <PrivateRoute exact path ='/project/edit/:id' component = {ProEdit}/>
        <PrivateRoute exact path ='/project/add' component = {ProAdd}/>
        <PrivateRoute exact path ='/project/ad_details/:id' component = {ProAdDetails}/>

        <PrivateRoute exact path ='/invited_lectures' component = {Lecture_view}/>
        <PrivateRoute exact path ='/invited_lectures/edit/:id' component = {LecEdit}/>
        <PrivateRoute exact path ='/invited_lectures/add' component = {LecAdd}/>
        
        <PrivateRoute exact path ='/experience_abroad' component = {Exp_view}/>
        <PrivateRoute exact path ='/experience_abroad/edit/:id' component = {ExpEdit}/>
        <PrivateRoute exact path ='/experience_abroad/add' component = {ExpAdd}/>

        <PrivateRoute exact path ='/book_published' component = {Book_view}/>
        <PrivateRoute exact path ='/book_published/edit/:id' component = {BookPubliEdit}/>
        <PrivateRoute exact path ='/book_published/add' component = {BookPubliAdd}/>

        <PrivateRoute exact path ='/eao_programme' component = {EAO_view}/>
        <PrivateRoute exact path ='/eao_programme/edit/:id' component = {EAOEdit}/>
        <PrivateRoute exact path ='/eao_programme/add' component = {EAOAdd}/>

        <PrivateRoute exact path ='/achievements' component = {Ach_view}/>
        <PrivateRoute exact path ='/achievements/edit/:id' component = {AchEdit}/>
        <PrivateRoute exact path ='/achievements/add' component = {AchAdd}/>
        
        </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}

export default App;
