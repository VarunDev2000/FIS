import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EMPLOYMENT,
    ADD_EMPLOYMENT,
    EDIT_EMPLOYMENT,
    DELETE_EMPLOYMENT,
    GET_EMPLOYMENT_BY_ID
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


export const getEmploymentbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/employment/${id}`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EMPLOYMENT_BY_ID,
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



//EDIT STAFF EMPLOYMENT DETAILS
export const editEmployment = (employment,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/employment/'+ id +'/',employment,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_EMPLOYMENT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF EMPLOYMENT DETAILS
export const deleteEmployment = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/employment/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_EMPLOYMENT,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}
