import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_QUALIFICATION,
    ADD_QUALIFICATION
}from './types';

//GET STAFF QUALIFICATION
export const getQualification = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/qualification/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_QUALIFICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF QUALIFICATION
export const addQualification = qualification => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/qualification/',qualification,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_QUALIFICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}