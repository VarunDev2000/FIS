import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_STAFFINFO,
    ADD_STAFFINFO,
    EDIT_STAFFINFO,
    DELETE_STAFFINFO,
    GET_STAFFINFO_BY_ID
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

export const getStaffinfobyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/staffinfo/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_STAFFINFO_BY_ID,
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


//EDIT STAFF INFO
export const editStaffinfo = (staffinfo,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/staffinfo/'+ id +'/',staffinfo,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_STAFFINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF INFO
export const deleteStaffinfo = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/staffinfo/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_STAFFINFO,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}

