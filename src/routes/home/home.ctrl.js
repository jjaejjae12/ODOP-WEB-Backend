"use strict";

const async = require("async");
//mysql
const db = require("./mysql");



const users = {
    
};



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

    join: (req,res,next)=>{
        const param = [req.body.name, req.body.pet, req.body.birth, req.body.email, req.body.id, req.body.pw]

        db.query('INSERT INTO user_info(`name`,`pet`,`birth`,`email`,`id`,`password`) VALUES (?,?,?,?,?,?)', param, (err, row)=>{
            if(err) console.log(err);
        })

        return res.json({
            success : true,
        });
    }
};

module.exports = {
    output,
    process,
};