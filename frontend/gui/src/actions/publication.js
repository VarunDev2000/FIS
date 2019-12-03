import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_PUBLICATION,
    ADD_PUBLICATION,
    EDIT_PUBLICATION,
    DELETE_PUBLICATION,
    GET_PUBLICATION_BY_ID
}from './types';

//GET STAFF PUBLICATIONS
export const getPublication = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/publication/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_PUBLICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

export const getPublicationbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/publication/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_PUBLICATION_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF PUBLICATION
export const addPublication = publication => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/publication/',publication,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_PUBLICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}



//EDIT STAFF PUBLICATION
export const editPublication = (publication,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/publication/'+ id +'/',publication,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_PUBLICATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF PUBLICATION
export const deletePublication = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/publication/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_PUBLICATION,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}