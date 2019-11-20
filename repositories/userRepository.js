'use strict';
const model = require('../models/userModel');

function getAll() {
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err}`);
        });
    });
}

module.exports = {getAll};