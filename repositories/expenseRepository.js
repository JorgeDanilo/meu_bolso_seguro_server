'use strict';
const model = require('../models/expenseModel');

function getAll() {
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar expense ${err}`);
        }) ;
    });
}

module.exports = {getAll};
