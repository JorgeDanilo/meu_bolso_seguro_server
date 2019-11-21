const db = require('../config/db');
const type = db.Sequelize;

let userModel = db.define('user', {
    id: {
        type: type.INTEGER,
        primaryKey: true
    },
    name: type.STRING,
    password: type.STRING
});

module.exports = userModel;