'use strict'

module.exports = (sequelize, DataTypes) => {
    const movementModel = sequelize.define('movement', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        lastDatemovements: {
            type: DataTypes.DATE
        },
    
        reuseBalance: {
            type: DataTypes.BOOLEAN
        },
        
    });
    
    return movementModel;

};