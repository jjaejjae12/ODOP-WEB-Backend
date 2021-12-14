"use strict";

const mysql = require("mysql");

const DB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'thdtkfl',
    database:'odop'
});




module.exports = DB;

// DB.end();