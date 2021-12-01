"use strict";

//모듈
const express = require("express"); //express라는 모듈 다운
const app = express(); //express를 실행


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); //view가 저장될 폴더 명시
app.set("view engine", "ejs"); //ejs라는 view 엔진 사용 
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;

