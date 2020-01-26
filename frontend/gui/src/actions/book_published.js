import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_BOOK_PUBLISHED,
    ADD_BOOK_PUBLISHED,
    EDIT_BOOK_PUBLISHED,
    DELETE_BOOK_PUBLISHED,
    GET_BOOK_PUBLISHED_BY_ID,
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

export const getBookpublibyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/book_published/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_BOOK_PUBLISHED_BY_ID,
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


//EDIT STAFF'S PUBLISHED BOOK
export const editBookPubli = (book,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/book_published/'+ id +'/',book,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_BOOK_PUBLISHED,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}


//DELETE STAFF'S PUBLISHED BOOK
export const deleteBookPubli = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/book_published/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_BOOK_PUBLISHED,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}


export const getAllBookpubli = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/admin_book_published/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_BOOK_PUBLISHED,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}