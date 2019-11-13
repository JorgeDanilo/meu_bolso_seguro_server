'use strict';
const UserRepository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    UserRepository.getAll();
}