'use strict';
const respository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    respository.getAll().then(data => {
        res.send(200, data);
    }).catch(err => {
        res.send(503, err);
    });
}

exports.getById = (req, res, next) => {
    respository.getById().then(data => {
        
    });
};