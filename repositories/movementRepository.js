'use strict';
const db = require('../config/db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.movement.findAll({
            include: [{model: db.input}, {model: db.expense}]
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar movimentos: ${err}`);
        });
    });
}

function getById(idMovement) {
    return new Promise((resolve, reject) => {
        db.movement.findOne({where: {id: idMovement}, include: [{model: db.users}]}).then(res => {
            resolve(res);
        })
    });
}

function getAllPrice() {
    return new Promise((resolve, reject) => {
        db.movement.query('SELECT * from movement', {
            include: []    
        }).then(results => {
            console.log(`get all price ${results}`);
        }).catch(err => {
            console.log(`error to get price => ${err}`)
        });
    });
}

function getAllByMother(dateActual) {
    return new Promise((resolve, reject) => {

    });
}

module.exports = {getAll, getById, getAllPrice};