// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'admin',
//     password: 'admin',
//     database: 'meu_bolso_seguro'
// });

// connection.connect(function(err) {
//     if(err) return console.error(err);
//     console.log('connected success');
// });


//EXECUTE HERE COMMAND ON MYSQL TO CREATE USER ADMIN AND PRIVILEGIES WITH ADMIN.
//CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'admin';
//FLUSH PRIVILEGES;

//GRANT ALL PRIVILEGES ON meu_bolso_seguro.* TO 'admin'@'%' WITH GRANT OPTION;
//FLUSH PRIVILEGES;

const Connection = require('../meu_bolso_seguro_server/config/db');
const mysql = Connection();
mysql.open();
console.log(mysql.getConnection());

const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                  "ID int NOT NULL AUTO_INCREMENT,\n"+
                  "Nome varchar(150) NOT NULL,\n"+
                  "CPF char(11) NOT NULL,\n"+
                  "PRIMARY KEY (ID)\n"+
                  ");";

mysql.getConnection().query(sql, function(error, results, fields) {
    if(error) return console.log(error);
    console.log('create table');
});