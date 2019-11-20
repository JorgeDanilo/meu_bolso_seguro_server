const db = require('../config/db');
const type = db.Sequelize;

let usersModel = db.define('users', {
    id: {
        type: type.INTEGER,
        primaryKey: true
    },
    Nome: type.STRING
});

module.exports = usersModel;