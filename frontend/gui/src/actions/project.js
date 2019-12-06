import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_PROJECT,
    ADD_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    GET_PROJECT_BY_ID
}from './types';

//GET STAFF PROJECTS
export const getProject = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/project/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


export const getProjectbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/project/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_PROJECT_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD PROJECT
export const addProject = project => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/project/',project,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT PROJECT
export const editProject = (project,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/project/'+ id +'/',project,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_PROJECT,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE PROJECT
export const deleteProject = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/project/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_PROJECT,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}