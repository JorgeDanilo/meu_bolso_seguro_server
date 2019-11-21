'use strict';
const db = require('../config/db');


function getAll() {
    return new Promise((resolve, reject) => {      
        db.expense.findAll({
            include: [{model: db.users}]        
        }).then((users) => {
            resolve(users)
        }).catch(err => {
            console.log(`erro ao buscar expense ${err}`);
        }) ;

    });
}

module.exports = {getAll}