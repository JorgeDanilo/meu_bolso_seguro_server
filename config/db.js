'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('meu_bolso_seguro', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/userModel.js')(sequelize, Sequelize);
db.input = require('../models/inputModel.js')(sequelize, Sequelize);
db.movement = require('../models/movementModel.js')(sequelize, Sequelize);
db.expense = require('../models/expenseModel.js')(sequelize, Sequelize);

db.expense.belongsTo(db.user, {foreignKey: 'user_id'});
db.input.belongsTo(db.user, {foreignKey: 'user_id'});
db.movement.belongsTo(db.expense, {foreignKey: 'expense_id'});
db.movement.belongsTo(db.input, {foreignKey: 'input_id'});

module.exports = db;