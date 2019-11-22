'use strict';
const db = require('../config/db');

function create(data) {
    return new Promise((resolve, reject) => {
        db.user.create({
            username: data.body.username,
            password: data.body.password
        }).then(newUser => {
            console.log(`user saved success: ${newUser}`);
            resolve(newUser);
        }).catch(err => {
            console.log(`error to save user ${err}`);
            reject(err);
        });
    });
}

function update(data) {
    return new Promise((resolve, reject) => {
        const newData = {
            username: data.body.username,
            password: data.body.password
        };
        db.user.update(newData, {where: {id: data.param.id}}).then(dataUpdate => {
            console.log(`user update success ${dataUpdate}`);
            resolve(dataUpdate);
        }).catch(err => {
            console.log(`error to update user: ${err}`);
            reject(err);
        })
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        db.user.destroy({
            where: {id: id}
        }).then(deletedUser => {
            console.log(`has deleted success: ${deletedUser}`);
            resolve(deletedUser);
        }).catch(err => {
            console.log(`error to delete user ${err}`);
            reject(err);
        });
    }); 
}

function getAll() {
    return new Promise((resolve, reject) => {
        db.user.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err}`);
            reject(err);
        });
    });
}

function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        db.user.findOne({
            where: {name: username, password: password}
        }).then(result => {
            resolve(result);
        }).catch(err => {
            console.log(`erro ao autenticar: ${err}`);
            reject(err);
        });
    });
}

module.exports = {getAll, authenticate, create, update, remove};