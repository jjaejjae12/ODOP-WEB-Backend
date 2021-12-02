"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/fail', ctrl.output.login_fail);
// router.get('/profile', ctrl.output.myprofile);
// router.get('/project', ctrl.output.project);
// router.get('/setProfile', ctrl.output.set_profile);
// router.get('/signUp', ctrl.output.sign_up);
// router.get('/upload', ctrl.output.upload);

router.post('/login', ctrl.process.login);

module.exports = router ; 