"use strict";

const { everySeries } = require("async");
//mysql
const mysql = require("mysql");
const DB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'thdtkfl',
    database:'odop'
});

const output = {
    home : (req, res)=>{
        res.render('home/index');
        // DB.query('SELECT * FROM user_info', (err, result, fields) =>{
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log(result);
        // })
    },
    

    login : (req,res) => {
        res.render('home/login');
    },

    login_fail : (req,res)=>{
        res.render('home/login_fail');
    },
    
    myprofile : (req,res) => {
        res.render('home/my_profile');
    },
    
    
    project : (req,res) => {
        res.render('home/project');
    },
    
    
    set_profile : (req,res) => {
        res.render('home/set_profile');
    },
    
    
    sign_up : (req,res) => {
        res.render('home/sign_up');
    },
    
    upload : (req,res) => {
        res.render('home/upload');
    }
}



const process = {
    login: (req,res) =>{
        console.log(req.body);
    }
};

module.exports = {
    output,
    process,
};