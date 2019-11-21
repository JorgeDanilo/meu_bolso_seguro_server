const db = require('../config/db');
const type = db.Sequelize;

let movementModel = db.define('movement', {

    id: {
        type: type.INTEGER,
        primaryKey: true
    },

    lastDateMovement: {
        type: type.DATE
    },

    reuseBalance: {
        type: type.BOOLEAN
    },

    users_id: {
        type: type.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        }
    }

});

module.exports = movementModel;