"use strict";

const mysql = require("mysql");

const DB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'thdtkfl',
    database:'odop'
});

DB.query('SELECT * FROM user_info', (err, result, fields) =>{
    if(err){
        console.log(err);
    }
    console.log(result);
})


module.exports = DB;

// DB.end();