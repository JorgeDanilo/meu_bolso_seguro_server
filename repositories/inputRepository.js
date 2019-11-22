'use strict';
const db = require('../config/db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.inputs.findAll().then(result => {
            resolve(result);
        }).catch(err => {
            console.log(`erro ao buscar inputs: ${err}`);
            reject(err);
        });
    });
}

function create(data) {
    return new Promise((resolve, reject) => {
        db.inputs.create({
            price: data.body.price,
            description: data.body.description,
            inputsDate: data.body.inputsDate,
            users_id: data.body.users_id
        }).then(newInput => {
            console.log(`new input date save ${newInput.get()}`);
            resolve(newInput);
        }).catch(err => {
            console.log(`error to save input: ${err}`);
            reject(err);
        });
    });
}


module.exports = {getAll, create};