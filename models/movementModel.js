'use strict'

module.exports = (sequelize, DataTypes) => {
    const movementModel = sequelize.define('movement', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        lastDateMovement: {
            type: DataTypes.DATEONLY
        },
    
        reuseBalance: {
            type: DataTypes.BOOLEAN
        }
        
    });
    
    return movementModel;

};