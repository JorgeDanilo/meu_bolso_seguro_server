'use strict';
const respository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    respository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
}

exports.authenticate = (req, res, next) => {
    var username = req.query.username;
    var password = req.query.password;
    console.log(`username: ${username} and password ${password}`);
    respository.authenticate(username, password).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};