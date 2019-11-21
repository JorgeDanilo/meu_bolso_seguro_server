'use strict';
const db = require('../config/db');


function getAll() {
    return new Promise((resolve, reject) => {
        db.users.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err}`);
        });
    });
}

module.exports = {getAll};