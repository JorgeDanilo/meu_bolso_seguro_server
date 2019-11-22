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
            users_id: data.body.users_id
        }).then(newExpense => {
            console.log(`new expense ${newExpense.id}, ${newExpense.price}, ${newExpense.description}`);
            resolve(newExpense.get())
        })
    });
}

module.exports = {getAll, create}