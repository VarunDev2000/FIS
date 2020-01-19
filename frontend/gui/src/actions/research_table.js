import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_RESEARCH_TABLE,
    ADD_RESEARCH_TABLE,
    EDIT_RESEARCH_TABLE,
    DELETE_RESEARCH_TABLE,
    GET_RESEARCH_TABLE_BY_ID
}from './types';

//GET STAFF RESEARCH
export const getResearchTable = () => (dispatch,getState) => {
    axios.get('http://127.0.0.1:8000/api/research_table/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_RESEARCH_TABLE,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


export const getResearchTablebyID = (id) => (dispatch,getState) => {
    axios.get(`http://127.0.0.1:8000/api/research_table/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_RESEARCH_TABLE_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

//ADD STAFF RESEARCH
export const addResearchTable = research_table => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/research_table/',research_table,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_RESEARCH_TABLE,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT STAFF RESEARCH
export const editResearchTable = (research_table,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/research_table/'+ id +'/',research_table,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_RESEARCH_TABLE,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE RESEARCH
export const deleteResearchTable = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/research_table/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_RESEARCH_TABLE,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}
