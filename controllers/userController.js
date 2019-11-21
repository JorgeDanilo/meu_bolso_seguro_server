'use strict';
const respository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    respository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
}