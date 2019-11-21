'use strict'


module.exports = (sequelize, DataTypes) => {
    const inputModel = sequelize.define('input', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        price: {
            type: DataTypes.DOUBLE,
        },
    
        description: {
            type: DataTypes.STRING
        },
    
        inputDate: {
            type: DataTypes.DATE 
        },    
    });

    return inputModel;
};