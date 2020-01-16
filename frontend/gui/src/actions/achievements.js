import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_ACHIEVEMENTS,
    ADD_ACHIEVEMENTS,
    EDIT_ACHIEVEMENTS,
    DELETE_ACHIEVEMENTS,
    GET_ACHIEVEMENTS_BY_ID
}from './types';

//GET STAFF ACHIEVEMENTS
export const getAchievements = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/achievements/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_ACHIEVEMENTS,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

export const getAchievementsbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/achievements/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_ACHIEVEMENTS_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF ACHIEVEMENTS
export const addAchievements = achievements => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/achievements/',achievements,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_ACHIEVEMENTS,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}


//EDIT STAFF ACHIEVEMENTS
export const editAchievements = (achievements,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/achievements/'+ id +'/',achievements,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_ACHIEVEMENTS,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF ACHIEVEMENTS
export const deleteAchievements = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/achievements/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_ACHIEVEMENTS,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}