import { combineReducers } from 'redux';
import auth from './auth';
import generalinfo from './generalinfo';
import qualification from './qualification';

export default combineReducers({
    auth,
    generalinfo,
    qualification,
});