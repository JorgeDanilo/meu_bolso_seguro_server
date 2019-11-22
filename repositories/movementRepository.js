'use strict';
const db = require('../config/db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.movement.findAll({
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
        db.movement.findOne({where: {id: idMovement}, include: [{model: db.users}]}).then(res => {
            resolve(res);
        })
    });
}

function getAllPrice() {
    return new Promise((resolve, reject) => {
        db.movement.query("SELECT SUM(i.price) + SUM(e.price) as total FROM movement m LEFT JOIN expense e ON m.expense_id = e.id LEFT JOIN input i ON m.input_id = i.id").then(results => {
            console.log(`get all price ${results}`);
        });
    });
}

module.exports = {getAll, getById};