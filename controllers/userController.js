'use strict';
const UserRepository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    const users = UserRepository.getAll().then(result => {
        res.status(200).send(result);
    });
    
}