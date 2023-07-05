const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost", 
    user: "root",  
    password: "407410272",  
    database: "dbfinal_407410272_lonely"
});

//Testing database connection
// pool.query("SELECT * FROM testimonials", function(err, results) {  
//     console.log(JSON.stringify(results)); // results contains rows returned by server  
//     console.log("Database lonely connected.");
// });

module.exports = pool.promise();