const mysql = require('mysql');
var connection = undefined;

const MySQLConnection = (function () {

	function MySQLConnection(connectionString) {
		this.connectionString = connectionString;
	}

	MySQLConnection.prototype.open = function() {
		console.log(`Opening ${this.constructor.name}` + 'to localhost');
        connection = mysql.createConnection({
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
	};

	MySQLConnection.prototype.close = function() {
		console.log(`Closing ${this.constructor.name}` + 'to localhost') ;
		connection.close();
	};

	return MySQLConnection;

})();

function createConnection() {
    return new MySQLConnection();
}

function getConnection() {
    return connection;
}

module.exports = createConnection;
module.exports = getConnection;