import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EAO_PROGRAMME,
    ADD_EAO_PROGRAMME,
    EDIT_EAO_PROGRAMME,
    DELETE_EAO_PROGRAMME,
    GET_EAO_PROGRAMME_BY_ID,
}from './types';

//GET STAFF'S EAO PROGRAMME
export const getEAO = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/eao_programme/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EAO_PROGRAMME,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

export const getEAObyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/eao_programme/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_EAO_PROGRAMME_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}



//ADD STAFF'S EAO PROGRAMME
export const addEAO = eao => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/eao_programme/',eao,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_EAO_PROGRAMME,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}

//EDIT STAFF'S EAO PROGRAMME
export const editEAO = (eao,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/eao_programme/'+ id +'/',eao,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_EAO_PROGRAMME,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}


//DELETE STAFF'S EAO PROGRAMME
export const deleteEAO = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/eao_programme/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_EAO_PROGRAMME,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}