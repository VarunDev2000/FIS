import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EMPLOYMENT,
    ADD_EMPLOYMENT
}from './types';

//GET STAFF EMPLOYMENT DETAILS
export const getEmployment = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/employment/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EMPLOYMENT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF EMPLOYMENT DETAILS
export const addEmployment = employment => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/employment/',employment,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_EMPLOYMENT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}