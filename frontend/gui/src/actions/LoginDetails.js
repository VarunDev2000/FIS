import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_LOGIN_DETAILS_BY_ID,
    EDIT_LOGIN_DETAILS,
}from './types';

//GET LOGIN DETAILS

export const getLoginDetailsbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/login_details/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_LOGIN_DETAILS_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//EDIT PROJECT
export const editLoginDetails = (l_details,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/login_details/'+ id +'/',l_details,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_LOGIN_DETAILS,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}
