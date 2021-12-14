"use strict";

const express = require("express");
const DB = require('./mysql');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/main', ctrl.output.main);
router.get('/login', ctrl.output.login);
router.get('/login_main', ctrl.output.login_main);
router.get('/join', ctrl.output.join);
// router.get('/profile', ctrl.output.myprofile);
// router.get('/project', ctrl.output.project);
// router.get('/setProfile', ctrl.output.set_profile);
// router.get('/signUp', ctrl.output.sign_up);
// router.get('/upload', ctrl.output.upload);

router.post('/login', ctrl.process.login);
router.post('/join', ctrl.process.join);


module.exports = router ; 