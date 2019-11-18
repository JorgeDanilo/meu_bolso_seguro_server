'use strict';
var User = require('../models/user');

module.exports = new class UserRepository {
    getAll() {
        return User.getUser();
    }
}