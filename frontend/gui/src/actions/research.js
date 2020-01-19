import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_RESEARCH,
    ADD_RESEARCH,
    EDIT_RESEARCH,
    DELETE_RESEARCH,
    GET_RESEARCH_BY_ID
}from './types';

//GET STAFF RESEARCH
export const getResearch = () => (dispatch,getState) => {
    axios.get('http://127.0.0.1:8000/api/research/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_RESEARCH,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


export const getResearchbyID = (id) => (dispatch,getState) => {
    axios.get(`http://127.0.0.1:8000/api/research/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_RESEARCH_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

//ADD STAFF RESEARCH
export const addResearch = research => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/research/',research,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_RESEARCH,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT STAFF RESEARCH
export const editResearch = (research,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/research/'+ id +'/',research,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_RESEARCH,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE RESEARCH
export const deleteResearch = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/research/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_RESEARCH,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}
