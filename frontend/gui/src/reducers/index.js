import { combineReducers } from 'redux';
import auth from './auth';
import generalinfo from './generalinfo';
import qualification from './qualification';
import specialization from './specialization';

export default combineReducers({
    auth,
    generalinfo,
    qualification,
    specialization,
});