const Sequelize = require('sequelize');

const sequelize = new Sequelize('meu_bolso_seguro', 'admin', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;