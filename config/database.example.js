var mysql = require('mysql');

var config = {
  host     : 'somedomain.com',
  user     : 'some_user',
  password : 'some_password',
  database : 'some_database'
};

// return active connection to database
var db = module.exports = mysql.createConnection(config);
db.connect();
