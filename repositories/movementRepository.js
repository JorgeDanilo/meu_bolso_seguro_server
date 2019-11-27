'use strict';
const db = require('../config/db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


function getAll() {
    return new Promise((resolve, reject) => {
        db.movement.findAll({
            include: [{model: db.input}, {model: db.expense}]
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar movimentos: ${err}`);
            reject(err);
        });
    });
}

function getPrice() {
    return new Promise((resolve, reject) => {
        db.movement.findAll({
            include: [{model: db.input}, {model: db.expense}]
        }).then(data => {
            var total = 0;
           if(data) {
            data.forEach(resultOne => {
                    if (resultOne.input) {
                        total += resultOne.input.price;
                    } else if (resultOne.expense) {
                        total += resultOne.expense.price;
                    }
                });
            }
            console.log(total);
            resolve({"total": total});
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    });
}

function getAllByMoth(mothActual) {
    return new Promise((resolve, reject) => {
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        var startDate = year + '-' + mothActual + '-' + '1';
        var endDate = year + '-' + mothActual + '-' + getLastDayOfMoth(mothActual);
        const where = {
           [Op.and]: [{
            lastDateMovement: {
                [Op.between]: [startDate, endDate]
            }
        }]
        }
        db.movement.findAll({
            include: [
                {model: db.input}, 
                {model: db.expense}],
            where
        }).then(data => {
            resolve(data);
        })
    }).catch(err => {
        console.log(err);
        reject(err);
    })
}

function getAllByDate(startDate, endDate) {
    return new Promise((resolve, reject) => {
        const where = {
           [Op.and]: [
               {
                    lastDateMovement: 
                    { 
                        [Op.between]: [startDate, endDate]
                    }
                }
            ]
        }
        db.movement.findAll({
            include: [
                {model: db.input},
                {model: db.expense}
                ],
            where
        }).then(data => {
            resolve(data);
        })
    }).catch(err => {
        console.log(err);
        reject(err);
    })
}

function getLastDayOfMoth(mothActual) {
    var lastDay = new Date(new Date(new Date().setMonth(mothActual)).setDate(0)).getDate();
    return lastDay;
}

module.exports = {getAll, getPrice, getAllByMoth, getAllByDate};