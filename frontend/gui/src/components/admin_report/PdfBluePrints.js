import React, { useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';

let data = [];

const setData = data =>{
    //console.log(data)
}

export const GeneratePaperJournalsPDF = () => {

    var dataFetch = axios.get(`http://localhost:8000/api/admin_publication/`)
    .then(res => {
        var doc = new jsPDF('p','pt','a4');
        doc.text(20,20,'Hello World');
        return doc.output('bloburl');
    })

    return dataFetch.then(function(result){
    });

    //console.log(data)
    //const state = store.getState();
    //const data = state.publication.publication
    console.log(data)
}
