"use strict";

const express = require("express");
const DB = require('./mysql');
const router = express.Router();

const ctrl = require("./home.ctrl");
const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, res, cb)=>{
        cb(null, "./src/public/images/user/");
    },
    filename: (req, file, cb)=>{
        cb(null, `${file.originalname}`);
    },
})


var upload = multer({storage});

//get_router
router.get('/', ctrl.output.home);
router.get('/main_upload', ctrl.output.main_upload);
router.get('/login', ctrl.output.login);
router.get('/login_main', ctrl.output.login_main);
router.get('/join', ctrl.output.join);
router.get('/project', ctrl.output.project);
router.get('/set_Profile',  ctrl.output.set_profile);
router.get('/logout', ctrl.output.logout);

router.get('/main', ctrl.process.get_post);


//post
router.post('/set_profile',upload.single('image'), ctrl.process.set_profile)
router.post('/login', ctrl.process.login);
router.post('/join', ctrl.process.join);

router.post('/main_upload', upload.single('post_image'), ctrl.process.post);

//get
router.get('/profile', ctrl.process.get_profile);


module.exports = router ;  