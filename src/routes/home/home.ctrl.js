"use strict";

const async = require("async");
//mysql
// const mysql = require("mysql");
// const DB = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'thdtkfl',
//     database:'odop'
// });

const users = {
    id:['송정민', '김감자', '김채소'],
    psword: ['123','123','123456'],
};

const output = {
    home : (req, res)=>{
        res.render('home/index');
    },
    
    login : (req,res) => {
        res.render('home/login');
    },

    login_main : (req,res) => {
        res.render('home/login_main');
    },

    register : (req,res) =>{
        res.render('home/register');
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
        const id = req.body.id;
        const psword = req.body.pw;

        console.log("id: "+ id+" pw: "+psword);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success : true,
                    msg: "성공",
                });
            }
        }

        return res.json({
            success : false,
            msg:"로그인에 실패하셨습니다.",
        });  

    },

    register: (req,res,next)=>{
        console.log(req.body);
        res.end();
    }
};

module.exports = {
    output,
    process,
};