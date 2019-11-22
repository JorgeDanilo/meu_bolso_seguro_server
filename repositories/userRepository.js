'use strict';
const db = require('../config/db');


function getAll() {
    return new Promise((resolve, reject) => {
        db.users.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err}`);
            reject(err);
        });
    });
}

function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        db.users.findOne({
            where: {name: username, password: password}
        }).then(result => {
            resolve(result);
        }).catch(err => {
            console.log(`erro ao autenticar: ${err}`);
            reject(err);
        });
    });
}

module.exports = {getAll, authenticate};