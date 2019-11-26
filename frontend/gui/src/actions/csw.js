import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_CSW,
    ADD_CSW
}from './types';

//GET STAFF CSW
export const getCSW = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/csw/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_CSW,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF CSW
export const addCSW = csw => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/csw/',csw,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_CSW,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}