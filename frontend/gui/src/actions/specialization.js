import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_SPECIALIZATION,
    ADD_SPECIALIZATION,
    EDIT_SPECIALIZATION,
    DELETE_SPECIALIZATION
}from './types';

//GET STAFF AREA OF SPECIALIZATION
export const getSpecialization = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/specialization/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_SPECIALIZATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF AREA OF SPECIALIZATION
export const addSpecialization = specialization => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/specialization/',specialization,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_SPECIALIZATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT STAFF AREA OF SPECIALIZATION
export const editSpecialization = (specialization,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/specialization/'+ id +'/',specialization,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_SPECIALIZATION,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF AREA OF SPECIALIZATION
export const deleteSpecialization = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/specialization/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_SPECIALIZATION,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}