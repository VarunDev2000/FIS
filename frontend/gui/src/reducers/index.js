import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import generalinfo from './generalinfo';
import qualification from './qualification';
import specialization from './specialization';
import employment from './employment';
import publication from './publication';
import csw from './csw';
import project from './project';
import invited_lectures from './invited_lectures';
import experience_abroad from './experience_abroad';
import book_published from './book_published';
import eao_programme from './eao_programme';
import achievements from './achievements';
import research_table from './research_table';
import research from './research';


export default combineReducers({
    form: formReducer,
    
    auth,
    generalinfo,
    qualification,
    specialization,
    employment,
    publication,
    csw,
    project,
    invited_lectures,
    experience_abroad,
    book_published,
    eao_programme,
    achievements,
    research_table,
    research,
});