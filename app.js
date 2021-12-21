"use strict";

//모듈
const express = require("express"); //express라는 모듈 다운
const app = express(); //express를 실행
const bodyParser = require("body-parser");
const session = require('express-session')
const cors = require('cors');
// session 구문 추가 시작
const MySQLStore = require("express-mysql-session")(session);
const DB = require('./src/routes/home/mysql');
const options =   {
    host:'localhost',
    port:3306,
    user:'root',
    password:'thdtkfl',
    database:'odop'
};
var sessionStore = new MySQLStore(options);
// session 구문 추가 끝
//라우팅
const home = require("./src/routes/home");
const cookieParser = require("cookie-parser");

//앱 세팅
app.set("views", "./src/views"); //view가 저장될 폴더 명시
app.set("view engine", "ejs"); //ejs라는 view 엔진 사용 
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));
//session 사용 설정
app.use(session({
    secret:"odopserver",
    resave:false,
    saveUninitialized:true,
    store: sessionStore
}))

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드
app.use(cors({
    origin : true,
    credentials : true
}))
app.use(cookieParser());
// app.use(
//     session({
//         key:"loginData",
//         secret: "testSecret",
//         resave:false,
//         saveUninitialized: false,
//         cookie:{
//             expires:60*60*24,
//         }
//     })
// )


module.exports = app;

