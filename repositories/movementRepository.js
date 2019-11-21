'use strict';
const db = require('../config/db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.movements.findAll({
            include: [{model: db.users}]
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar movimentos: ${err}`);
        });
    });
}

function getById(idMovement) {
    return new Promise((resolve, reject) => {
        db.movements.findOne({where: {id: idMovement}, include: [{model: db.users}]}).then(res => {
            resolve(res);
        })
    });
}

module.exports = {getAll, getById};