'user strict';
const mysql = require('mysql2');

//local mysql db connection
/*const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Apple@1234',
  database : 'hrms'
}); */
const dbConn = mysql.createConnection({
  host     : '103.228.83.115',
  user     : 'root',
  password : 'Cylsys@678',
  database : 'cylsys_lunch'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
