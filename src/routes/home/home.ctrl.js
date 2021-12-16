"use strict";


const db = require("./mysql");

//암호화
const bcrypt = require('bcrypt');
const { response } = require("../../../app");
const saltRounds = 10;

const output = {
    
    home : (req, res)=>{
        res.render('home/index');
    },
    
    main : (req, res) =>{
        if(req.session){
            console.log(req.session);
        }
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

    profile : (req,res)=>{
        res.render('home/profile');
    },

    login_fail : (req,res)=>{
        res.render('home/login_fail');
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

    //POST
    login: (req,res) =>{

        const param = [req.body.id, req.body.pw];
        console.log('event')
        db.query('SELECT * FROM user WHERE id=?', param[0], (err,row)=>{

            if(err) 
            console.log(err);

            console.log(row[0].password);

            if(row.length != undefined){
                bcrypt.compare(param[1], row[0].password,(error, result)=>{
                    if(result){
                        console.log("성공");


                        req.session.id = req.body.id;
                        req.session.isLogined = true;
                        req.session.save(()=>{
                            res.render('redirect',{
                                address: "main"
                            })
                        })
                        
                    }else{
                        console.log(param[1]+" "+row[0].password);
                        console.log("실패");
                        console.log(error);
                    }
                })  
                
               
            }else{
                console.log("ID가 존재하지 않습니다");
            }


            
        })
        res.end();
    },

    check_id:(req,res)=>{
        console.log(req.body.id);
        const ID = req.body.id;
        const id_check=null;

        db.query('SELECT id FROM user WHERE id=?', ID, (err,row)=>{
            if(row == undefined){
                alert("사용 가능한 id입니다.");
                
            }else{
                alert("사용할 수 없는 id입니다.");
                id_check = false;
            }    

        })
    },

    join:(req, res)=>{

        console.log(req.body);
        
        const param = [req.body.name, req.body.birth, req.body.email, req.body.id, req.body.pw];

        console.log("param: "+param);
        

        
        bcrypt.hash(param[4], saltRounds, (error, hash)=>{
            param[4] = hash;
            db.query('INSERT INTO user(`name`,`birth`,`email`,`id`,`password`) VALUES (?,?,?,?,?)', param, (err, row)=>{
                if(err) {
                    console.log(err);
                }

                res.status(200);
                res.send();
            });
        })
        
        res.end();
    },

    post:(req,res)=>{

    },

    session: (req,res)=>{
        if(req.session.loginData){
            res.send({loggedIn : true, loginData: req.session.loginData})
        }else{
            res.send({loggedIn : false})
        }
    }
};

module.exports = {
    output,
    process,
};