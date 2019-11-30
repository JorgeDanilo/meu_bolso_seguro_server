'use strict';
module.exports = (sequelize, DataTypes) => {
    const notificationModel = sequelize.define('notification', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        token: {
            type: DataTypes.STRING
        },
    });
    return notificationModel;
};
