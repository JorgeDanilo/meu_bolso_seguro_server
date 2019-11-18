'use strict';
var User = require('../models/user');

module.exports = new class UserRepository {
    getAll() {
        User.setName('teste');
        User.setPassword('13456');
        return User.getUser();
    }
}