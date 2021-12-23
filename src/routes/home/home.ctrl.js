"use strict";


const db = require("./mysql");
// const fs = require('fs');
// const path = require("path");
//암호화
const bcrypt = require('bcrypt');
const saltRounds = 10;


//이미지 받기
// const multer = require('multer');



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

    main_upload : (req, res)=>{
        res.render('home/main_upload');
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
        console.log(req);
        console.log(req.query.id);
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

            if(row.length != undefined){
                bcrypt.compare(param[1], row[0].password,(error, result)=>{
                    if(result){
                        console.log("로그인 성공");

                        req.session.uid = req.body.id;
                        req.session.isLogined = true;
                        req.session.save(()=>{
                            res.render('home/redirect',{
                                address: "main"
                            });
                            
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
    },

    join:(req, res)=>{
        
        console.log(req.body);
        
        const param = [req.body.name, req.body.birth, req.body.email, req.body.id, req.body.pw];

        console.log("param: "+param);
        
        db.query(`SELECT id FROM user WHERE id='${req.body.id}'`,(err,row)=>{
            if(err)
            console.log(err);

            console.log("row: "+row);

            if(row.length ===  0){
                bcrypt.hash(param[4], saltRounds, (error, hash)=>{
                    param[4] = hash;
                    db.query('INSERT INTO user(`name`,`birth`,`email`,`id`,`password`) VALUES (?,?,?,?,?)', param, (err, row)=>{
                        if(err)
                        console.log(err);

                        console.log("회원가입 성공");
                        res.status(200);
                        res.send();
                        // res.render('home/redirect',{
                        //     address: "login"
                        // });
                        // res.end();
                    });
                })
            }else{
                console.log("중복된 ID");
                res.status(400);
                res.send();
            }   
        });
        
        res.end();
        
        
    },

    set_profile:(req,res)=>{
        console.log('set profile');
        console.log(req.file);
        const id = req.session.uid; //임시 유저id
        const param = [req.body.name, req.body.birth, req.body.email, req.body.pet, `/images/user/${req.file.filename}`];

        console.log("param: "+param);
        
        db.query(`UPDATE user SET name=?, birth=?, email=?, pet=?, image=? WHERE id='${id}'`, param, (err, result)=>{
            if(err) {
                console.log(err);
            }

            if(result){

                console.log("프로필 설정 성공");

                res.status(200).send();
                // req.session.save(()=>{
                //     res.render('home/redirect',{
                //         address: "profile"
                //     })
                // })
                // 이거맞나..
            }else{
                console.log(param[1]+" "+row[0].password);
                console.log("실패");
                console.log(error);
            }

           
        });
        
        res.end();
    },

    post:(req,res)=>{
        console.log('post 작성');
        console.log('uid', req.session.uid);
        const id = req.session.uid;

        const param = [req.body.title, req.body.description, `/images/post/${id}_${req.body.post_image}`, id]

        console.log("param: "+param);

        db.query('INSERT INTO post(`title`, `description`, `post_image`, `id`) VALUES(?,?,?,?)', param, (err, result)=>{
            if(err) {
                console.log(err);
            }

            if(result){

                console.log("게시물 저장 성공");

                res.status(200).send();

            }else{
                console.log(param[1]+" "+row[0].password);
                console.log("실패");
                console.log(error);
            }

        });

        res.end();
    },


    session: (req,res)=>{
        if(req.session.loginData){
            res.send({loggedIn : true, loginData: req.session.loginData})
        }else{
            res.send({loggedIn : false})
        }
    },


    //GET

    get_profile: (req,res)=>{
        
        console.log('uid', req.session.uid);
        const id = req.session.uid;
        console.log("## get request");
        db.query('SELECT * FROM user WHERE id = ?', id, (err, result) => {
            if(err) {
                console.error(err);
                res.send('error');
            }
            console.log(result);
            console.log("name: " + result[0].name);
            res.render('home/profile', {
                name: result[0].name,
                email: result[0].email,
                pet: result[0].pet,
                image: result[0].image,
                birth: result[0].birth
            });
            res.end();
        })
 
    },

    get_post : (req,res)=>{
        db.query('SELECT * FROM post', (err, result) => {
            if(err){
                console.log(err);
                res.send('error');
            }
            console.log("get posts:", result);
            res.render('home/main',{
                description : result[0].description
            })

        })
    }
    
};

module.exports = {
    output,
    process,
}; 