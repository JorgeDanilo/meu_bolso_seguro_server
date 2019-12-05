'use strict'
const moment = require('moment');


module.exports = (sequelize, DataTypes) => {
    const movementModel = sequelize.define('movement', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        lastDateMovement: {
            type: DataTypes.DATEONLY,
            get() {
                return moment(this.getDataValue('lastDateMovement')).format('DD/MM/YYYY')
            }
        },
    
        reuseBalance: {
            type: DataTypes.BOOLEAN
        }
        
    });
    
    return movementModel;

};