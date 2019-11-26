import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_PROJECT,
    ADD_PROJECT
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
