"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.home);
router.get('/login', ctrl.login);
router.get('/profile', ctrl.myprofile);
router.get('/project', ctrl.project);
router.get('/setProfile', ctrl.set_profile);
router.get('/signUp', ctrl.sign_up);
router.get('/upload', ctrl.upload);

module.exports = router ; 