'use strict'


module.exports = (sequelize, DataTypes) => {
    const userModel = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return userModel;
};