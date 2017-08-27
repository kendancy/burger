// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   } else {
//     connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "123awk",
//     database: "burgers_db"
//   });
// };
     connection = mysql.createConnection({
     port: 3306,
     host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
     user: "hk7rabnslkm2rrxj",
     password: "jgnat047kya6v19f",
     database: "burgers_db"
   });


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
