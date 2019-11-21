'use strict'

module.exports = (sequelize, DataTypes) => {
    const movementModel = sequelize.define('movement', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        lastDateMovement: {
            type: DataTypes.DATE
        },
    
        reuseBalance: {
            type: DataTypes.BOOLEAN
        },
    
        users_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            }
        }
    
    });
    
    return movementModel;

};