import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_INVITED_LECTURES,
    ADD_INVITED_LECTURES
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