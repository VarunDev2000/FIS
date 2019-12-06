import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_CSW,
    ADD_CSW,
    EDIT_CSW,
    DELETE_CSW,
    GET_CSW_BY_ID
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

export const getCSWbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/csw/${id}`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_CSW_BY_ID,
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



//EDIT STAFF CSW
export const editCSW = (csw,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/csw/'+ id +'/',csw,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_CSW,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF CSW
export const deleteCSW = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/csw/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_CSW,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}