var mysql      = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// localhost
	connection = mysql.createConnection({
		port: 3306,
		host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "n9ctabtuy2z7g7sk",
		password: "lfnz7kd7byluppmt",
		database: 'burger_db'
	})
};

//  connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
