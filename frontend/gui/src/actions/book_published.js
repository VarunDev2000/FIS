import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_BOOK_PUBLISHED,
    ADD_BOOK_PUBLISHED
}from './types';

//GET STAFF'S BOOK PUBLISHED
export const getBookpubli = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/book_published/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_BOOK_PUBLISHED,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF'S PUBLISHED BOOK
export const addBookpubli = book => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/book_published/',book,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_BOOK_PUBLISHED,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding Information..");
    });
}