import { combineReducers } from 'redux';
import auth from './auth';
import generalinfo from './generalinfo';

export default combineReducers({
    generalinfo,
    auth
});