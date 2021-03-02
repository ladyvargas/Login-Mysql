const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : '10.93.0.11', // MYSQL HOST NAME
    user     : 'root',        // MYSQL USERNAME
    password : 'Grupo3',    // MYSQL PASSWORD
    database : 'nodejs_login'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;
