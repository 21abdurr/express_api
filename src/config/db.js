const mysql = require("mysql");
const dbPool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "express_mysql_api",
  password: "",
});

module.exports = dbPool.promise;
