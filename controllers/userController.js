'use strict';
const UserRepository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    // UserRepository.getAll().then((user) => {
    //     res.status(200).send(user);
    // });
    console.log(UserRepository);
}