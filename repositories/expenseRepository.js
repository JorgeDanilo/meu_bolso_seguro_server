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

function create(data) {
    return new Promise((resolve, reject) => {
        db.expense.create({
            price: data.body.price,
            quantity: data.body.quantity,
            dueDate: data.body.dueDate,
            typeOfSpend: data.body.typeOfSpend,
            degreeOfImportance: data.body.degreeOfImportance,
            description: data.body.description,
            status: data.body.status,
            user_id: data.body.user_id
        }).then(newExpense => {
            console.log(`new expense ${newExpense.id}, ${newExpense.price}, ${newExpense.description}`);
            resolve(newExpense.get())
        })
    });
}

function update(data) {
    return new Promise((resolve, reject) => {
        const newData = {
            price: data.body.price,
            quantity: data.body.quantity,
            dueDate: data.body.dueDate,
            typeOfSpend: data.body.typeOfSpend,
            degreeOfImportance: data.body.degreeOfImportance,
            description: data.body.description,
            status: data.body.status,
            user_id: data.body.user_id
        };
        db.expense.update(newData, {where: {id: data.param.id}}).then(dataUpdated => {
            console.log(`update expense success: ${dataUpdated}`);
            resolve(dataUpdated);
        }).catch(err => {
            console.log(`erro to update expense: ${err}`);
            reject(err);
        });
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        db.expense.destroy({
            where: {id: id}
        }).then(deletedExpense => {
            console.log(`has deleted success ${deletedExpense}`);
            resolve(deletedExpense);
        }).catch(err => {
            console.log(`erro to delete input ${err}`);
        });
    });
}

module.exports = {getAll, create, update, remove}