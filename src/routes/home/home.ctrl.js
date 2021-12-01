"use strict";

//mysql
const mysql = require("mysql");
const DB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'thdtkfl',
    database:'odop'
});



const home = (req, res)=>{
    res.render('home/index');
    DB.query('SELECT * FROM user_info', (err, result, fields) =>{
        if(err){
            console.log(err);
        }
        console.log(result);
    })
};

const login = (req,res) => {
    res.render('home/login');
};

const myprofile = (req,res) => {
    res.render('home/my_profile');
};


const project = (req,res) => {
    res.render('home/project');
};


const set_profile = (req,res) => {
    res.render('home/set_profile');
};


const sign_up = (req,res) => {
    res.render('home/sign_up');
};

const upload = (req,res) => {
    res.render('home/upload');
};


module.exports = {
    home,
    login,
    myprofile,
    project,
    set_profile,
    sign_up,
    upload
};