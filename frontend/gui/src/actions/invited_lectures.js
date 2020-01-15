import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_INVITED_LECTURES,
    ADD_INVITED_LECTURES,
    GET_INVITED_LECTURE_BY_ID,
    EDIT_INVITED_LECTURES,
    DELETE_INVITED_LECTURES,
}from './types';

//GET STAFF'S INVITED LECTURES
export const getLecture = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/invited_lectures/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_INVITED_LECTURES,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

export const getLecturebyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/invited_lectures/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_INVITED_LECTURE_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF INVITED LECTURES
export const addLecture = lecture => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/invited_lectures/',lecture,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_INVITED_LECTURES,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT STAFF INVITED LECTURES
export const editLecture = (lecture,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/invited_lectures/'+ id +'/',lecture,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_INVITED_LECTURES,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}


//DELETE STAFF INVITED LECTURE
export const deleteLecture = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/invited_lectures/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_INVITED_LECTURES,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}