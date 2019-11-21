const db = require('../config/db');
const type = db.Sequelize;

let expenseModel = db.define('expense', {

    // Id
    id: {
        type: type.INTEGER,
        primaryKey: true
    },

    // Foreing Key.
    userId: {
        type: type.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },

    // Preço
    price: {
        type: type.DOUBLE
    },

    // Quantidade que essa despesa pode ter, Exemplo VIVO 2(X)
    quantity: {
        type: type.INTEGER
    },

    // Data de vencimento da despesa
    dueDate: {
        type: type.DATE
    },


    // Tipo de Gasto (ALUGUEL, COMIDA, FINANCIAMENTO, CARTÃO, COMIDA, LAZER, ETC...)
    typeOfSpend: {
        type: type.STRING
    }, 


    // Quanto mais dias posso pagar ? (ALTO, MEDIO, PEQUENO)
    degreeOfImportance: {
        type: type.STRING
    },

    description: {
        type: type.STRING   
    },

    // PAGO, ATRASADO
    status: {
        type: type.STRING
    }

});

module.exports = expenseModel;