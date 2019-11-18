const Connection = require('../../meu_bolso_seguro_server/config/db');
const db = Connection();
db.open();


function User() {
}

User.prototype.setName = function(name) {
    this.name = name;
};

User.prototype.setPassword = function(password) {
    this.password = password;
};

User.prototype.getName = function() {
    return this.name;
};

User.prototype.getPassword = function() {
    return this.password;
};

User.prototype.getUser = function() {
    const sqlSelect = "select * from Clientes";
    db.getConnection().query(sqlSelect, function(error, results, fields) {
    if(error) console.log(error);
    console.log(results);
    return results;
});
}

var user = new User();

module.exports = user;