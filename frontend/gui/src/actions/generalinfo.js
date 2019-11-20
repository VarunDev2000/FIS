import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_STAFFINFO,
    ADD_STAFFINFO
}from './types';

//GET STAFF INFO
export const getStaffinfo = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/staffinfo/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_STAFFINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF INFO
export const addStaffinfo = staffinfo => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/staffinfo/',staffinfo,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_STAFFINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding information..");
    });
}