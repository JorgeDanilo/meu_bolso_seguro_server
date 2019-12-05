'use strict'
const moment = require('moment');



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
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('inputDate')).format('DD/MM/YYYY')
            }
        },    
    });

    return inputModel;
};