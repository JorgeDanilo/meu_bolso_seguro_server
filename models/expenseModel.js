'use strict'
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const expenseModel = sequelize.define('expense', {

        // Id
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        // Preço
        price: {
            type: DataTypes.DOUBLE
        },
    
        // Quantidade que essa despesa pode ter, Exemplo VIVO 2(X)
        quantity: {
            type: DataTypes.INTEGER
        },
    
        // Data de vencimento da despesa
        dueDate: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('dueDate')).format('DD/MM/YYYY')
            }
        },
    
    
        // Tipo de Gasto (ALUGUEL, COMIDA, FINANCIAMENTO, CARTÃO, COMIDA, LAZER, ETC...)
        typeOfSpend: {
            type: DataTypes.STRING
        }, 
    
    
        // Quanto mais dias posso pagar ? (ALTO, MEDIO, PEQUENO)
        degreeOfImportance: {
            type: DataTypes.STRING
        },
    
        description: {
            type: DataTypes.STRING   
        },
    
        // PAGO, ATRASADO
        status: {
            type: DataTypes.STRING
        }
    
    });

    return expenseModel;
};