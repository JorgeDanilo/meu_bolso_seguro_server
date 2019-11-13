'use strict';
var User = require('../config/db');

module.exports = new class UserRepository {
    getAll() {
        return User.find();
    }
}