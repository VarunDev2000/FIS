import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EXPERIENCE_ABROAD,
    ADD_EXPERIENCE_ABROAD,
    EDIT_EXPERIENCE_ABROAD,
    DELETE_EXPERIENCE_ABROAD,
    GET_EXPERIENCE_ABROAD_BY_ID,
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

export const getExpbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/experience_abroad/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EXPERIENCE_ABROAD_BY_ID,
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

//EDIT STAFF ABROAD EXPERIENCE
export const editExp = (exp,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/experience_abroad/'+ id +'/',exp,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_EXPERIENCE_ABROAD,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}


//DELETE STAFF ABROAD EXPERIENCE
export const deleteExp = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/experience_abroad/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_EXPERIENCE_ABROAD,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}