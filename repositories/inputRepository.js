'use strict';
const db = require('../config/db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.input.findAll().then(result => {
            resolve(result);
        }).catch(err => {
            console.log(`erro ao buscar inputs: ${err}`);
            reject(err);
        });
    });
}

function create(data) {
    return new Promise((resolve, reject) => {
        db.input.create({
            price: data.body.price,
            description: data.body.description,
            inputDate: data.body.inputDate,
            user_id: data.body.user_id
        }).then(newInput => {
            console.log(`new input date save ${newInput.get()}`);
            resolve(newInput);
        }).catch(err => {
            console.log(`error to save input: ${err}`);
            reject(err);
        });
    });
}

function update(data) {
    return new Promise((resolve, reject) => {
        const newData = {
            price: data.body.price,
            description: data.body.description,
            inputDate: data.body.inputDate,
            user_id: data.body.user_id
        };
        db.input.update(newData, {where: {id: data.param.id}}).then(dataUpdated => {
            resolve(dataUpdated);
        }).catch(err => {
            reject(err);
            console.log(`erro to update input: ${err}`);
        });
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        db.input.destroy({
            where: {id: id}
        }).then(deletedInput => {
            console.log(`has deleted success: ${deletedInput}`)
            resolve(deletedInput);
        }).catch(err => {
            console.log(`erro to delete input ${err}`);
            reject(err);
        });
    });
}


module.exports = {getAll, create, update, remove};