import React from 'react'
import { Route } from 'react-router-dom';
import Generalinfo from './components/staffinfo/Generalinfo';
import Add from './components/staffinfo/Add';
import Edit from './components/staffinfo/Edit';
import Qualification_View from './components/qualification/Qualification_View';
import QualiAdd from './components/qualification/Add';
import QualiEdit from './components/qualification/Edit';
import Specialization_view from './components/area_of_spec/Spec_Mem_view';
import SpecAdd from './components/area_of_spec/Add';
import SpecEdit from './components/area_of_spec/Edit';
import Employment_view from './components/employment/Employment_View';
import EmpAdd from './components/employment/Add';
import EmpEdit from './components/employment/Edit';
import Publication_view from './components/publication/Publication_View';
import PubliAdd from './components/publication/Add';
import PubliEdit from './components/publication/Edit';
import CSW_view from './components/csw/CSW_view';
import CSWAdd from './components/csw/Add';
import CSWEdit from './components/csw/Edit';
import Project_view from './components/project/Project_view';
import ProAdd from './components/project/Add';
import ProEdit from './components/project/Edit';
import LecAdd from './components/invited_lectures/Add';
import ExpAdd from './components/experience_abroad/Add';
import BookPubliAdd from './components/book_published/Add';
import EAOAdd from './components/eao_programme/Add';



const BaseRouter = () => (
    <div>
        <Route exact path ='' component = {Generalinfo}/>
        <Route exact path ='/edit' component = {Edit}/>
        <Route exact path ='/add' component = {Add}/>

        <Route exact path ='qualification' component = {Qualification_View}/>
        <Route exact path ='qualification/edit' component = {QualiAdd}/>
        <Route exact path ='qualification/add' component = {QualiEdit}/>

        <Route exact path ='specialization' component = {Specialization_view}/>
        <Route exact path ='specialization/edit' component = {SpecAdd}/>
        <Route exact path ='specialization/add' component = {SpecEdit}/>

        <Route exact path ='/employment' component = {Employment_view}/>
        <Route exact path ='/employment/edit' component = {EmpEdit}/>
        <Route exact path ='/employment/add' component = {EmpAdd}/>

        <Route exact path ='/publication' component = {Publication_view}/>
        <Route exact path ='/publication/edit' component = {PubliEdit}/>
        <Route exact path ='/publication/add' component = {PubliAdd}/>

        <Route exact path ='/csw' component = {CSW_view}/>
        <Route exact path ='/csw/edit' component = {CSWEdit}/>
        <Route exact path ='/csw/add' component = {CSWAdd}/>

        <Route exact path ='/project' component = {Project_view}/>
        <Route exact path ='/project/edit' component = {ProEdit}/>
        <Route exact path ='/project/add' component = {ProAdd}/>

        <Route exact path ='/invited_lectures/add' component = {LecAdd}/>

        <Route exact path ='/experience_abroad/add' component = {ExpAdd}/>

        <Route exact path ='/book_published/add' component = {BookPubliAdd}/>

        <Route exact path ='/eao_programme/add' component = {EAOAdd}/>
    </div>
);

export default BaseRouter;