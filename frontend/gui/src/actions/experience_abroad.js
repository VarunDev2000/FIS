import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EXPERIENCE_ABROAD,
    ADD_EXPERIENCE_ABROAD
}from './types';

//GET STAFF'S ABROAD EXPERIENCE
export const getExp = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/experience_abroad/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EXPERIENCE_ABROAD,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF ABROAD EXPERIENCE
export const addExp = exp => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/experience_abroad/',exp,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_EXPERIENCE_ABROAD,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}