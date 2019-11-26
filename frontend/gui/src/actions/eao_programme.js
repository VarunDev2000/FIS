import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_EAO_PROGRAMME,
    ADD_EAO_PROGRAMME
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