'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('meu_bolso_seguro', 'admin', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/userModel.js')(sequelize, Sequelize);
db.inputs = require('../models/inputModel.js')(sequelize, Sequelize);
db.movements = require('../models/movementModel.js')(sequelize, Sequelize);
db.expense = require('../models/expenseModel.js')(sequelize, Sequelize);

db.expense.belongsTo(db.users, {foreignKey: 'users_id'});
db.inputs.belongsTo(db.users, {foreignKey: 'users_id'});
// db.movements.hasMany(db.users);

module.exports = db;