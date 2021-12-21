"use strict";

const express = require("express");
const DB = require('./mysql');
const router = express.Router();

const ctrl = require("./home.ctrl");
// const app = require("../../../app");
const multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null,'../../public/images/user'); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
//     },
//   })
const storage = multer.diskStorage({
    destination : (req, res, cb)=>{
        cb(null, "./src/public/images/user/");
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}_${file.originalname}`);
    },
})

var upload = multer({storage});

router.get('/', ctrl.output.home);
router.get('/main', ctrl.output.main);
router.get('/main_upload', ctrl.output.main_upload);
router.get('/login', ctrl.output.login);
router.get('/login_main', ctrl.output.login_main);
router.get('/join', ctrl.output.join);

router.get('/main', ctrl.process.session);

router.get('/profile', ctrl.output.profile);
router.get('/project', ctrl.output.project);
router.get('/set_Profile',  ctrl.output.set_profile);



router.post('/set_profile',upload.single('image'), ctrl.process.set_profile)
router.post('/login', ctrl.process.login);
router.post('/join', ctrl.process.join);
router.post('/checkid', ctrl.process.check_id);


module.exports = router ;  