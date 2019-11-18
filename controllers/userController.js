'use strict';
const UserRepository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    const users = UserRepository.getAll();
    res.status(200).send(users);
    console.log(UserRepository);
}