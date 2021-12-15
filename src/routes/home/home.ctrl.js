"use strict";

//mysql
const db = require("./mysql");

//암호화
const bcrypt = require('bcrypt');
const saltRounds = 10;

const output = {
    
    home : (req, res)=>{
        res.render('home/index');
    },
    
    main : (req, res) =>{
        res.render('home/main')
    }, 

    login : (req,res) => {
        res.render('home/login');
    },

    login_main : (req,res) => {
        res.render('home/login_main');
    },

    join : (req,res) =>{
        res.render('home/join');
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
    
    upload : (req,res) => {
        res.render('home/upload');
    }
}



const process = {
    login: (req,res) =>{

        const param = [req.body.id, req.body.pw];
        db.query('SELECT * FROM user_info WHERE id=?', param[0], (err,row)=>{

            if(err) 
            console.log(err);

            console.log(row[0].password);

            if(row.length > 0){
                // bcrypt.compare(param[1], row[0].password,(error, result)=>{
                //     if(result){
                //         console.log("성공");
                //     }else{
                //         console.log(param[1]+" "+row[0]);
                //         console.log("실패");
                //     }
                // })
                
                
                if(param[1]=== row[0].password){
                    console.log('성공');
                }else{
                    console.log(param[1]+" "+row[0]);
                    console.log('실패');
                }
                
               
            }else{
                console.log("ID가 존재하지 않습니다");
            }


            
        })
        res.end();
    },

    join:(req, res)=>{

        console.log(req.body);
        
        const param = [req.body.name, req.body.birth, req.body.email, req.body.id, req.body.pw];

        console.log("param: "+param);

        bcrypt.hash(param[1], saltRounds, (error, hash)=>{
            param[1] = hash;
            db.query('INSERT INTO user_info(`name`,`birth`,`email`,`id`,`password`) VALUES (?,?,?,?,?)', param, (err, row)=>{
                if(err) {
                    console.log(err);
                }
            });
        })
        
        
    }
};

module.exports = {
    output,
    process,
};