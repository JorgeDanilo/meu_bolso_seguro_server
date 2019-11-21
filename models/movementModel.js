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

    userId: {
        type: type.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    }

});

module.exports = movementModel;