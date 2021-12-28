"use strict";

const mysql = require("mysql");

const DB = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'thdtkfl',
    database:'odop'
});




module.exports = DB;

// DB.end();