const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'admin',
    password: 'admin',
    database: 'meu_bolso_seguro'
});

connection.connect(function(err) {
    if(err) return console.error(err);
    console.log('connected success');
});

