import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_QUALIFICATION,
    ADD_QUALIFICATION,
    EDIT_QUALIFICATION,
    DELETE_QUALIFICATION,
    GET_QUALIFICATION_BY_ID
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


export const getQualificationbyID = (id) => (dispatch,getState) => {
    axios.get(`http://127.0.0.1:8000/api/qualification/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_QUALIFICATION_BY_ID,
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


//EDIT STAFF QUALIFICATION
export const editQualification = (qualification,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/qualification/'+ id +'/',qualification,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_QUALIFICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF QUALIFICATION
export const deleteQualification = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/qualification/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_QUALIFICATION,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}
