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

const users = {

//     info : DB.query('SELECT * FROM user_info', (err, result, fields) =>{
//             if(err){
//                 console.log(err);
//             }
//             // console.log(result[0]);
//             const ID = result[0].ID.value,
//             PW = result[0].ID.value,
//         })

    id:["송정민", "김감자", "김채소"],
    password: ["123","123","123456"],
};

const output = {
    home : (req, res)=>{
        res.render('home/index');
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
        const id = req.body.id,
        password = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx]===password){
                return res.json({
                    success : true,
                });
            }
        }

       return res.json({
           success : false,
           msg:"로그인에 실패하셨습니다.",
       });
        
    }
};

module.exports = {
    output,
    process,
};