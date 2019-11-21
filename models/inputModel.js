const db = require('../config/db');
const type = db.Sequelize;

let inputModel = db.define('input', {

    // Id
    id: {
        type: type.INTEGER,
        primaryKey: true
    },

    price: {
        type: type.DOUBLE,
    },

    description: {
        type: type.STRING
    },

    inputDate: {
        type: type.DATE 
    },

    userId: {
        type: type.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    }
});

module.exports = inputModel;