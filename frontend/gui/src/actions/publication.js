import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_PUBLICATION,
    ADD_PUBLICATION
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