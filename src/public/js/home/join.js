"use strict"

// // const router = express.Router();
// const router = require('/routes/home/index'),
// const ctrl = require('');


const joinBtn = document.querySelector("#join_submit");
const id = document.querySelector('#join_overlap');

const mysql = require("mysql");

const DB = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'thdtkfl',
    database:'odop'
});


    
joinBtn.addEventListener("click", ()=>{
    const req = {
        name : user_name.value,
        birth : birth.value,
        email : email.value,
        id : id.value,
        pw : pw.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));
    
});


// check_id_Btn.addEventListener("click", ()=>{
//     console.log("클릭");
//     // axios.get(`http://localhost:3000/join`)
//     // .then((res)=>{
//     //     res.JSON();
//     // }).then((json)=>{
//     //     console.log(json.value);
//     // })

//     // axios.post('/join', ctrl.process.check_id);

// //    const axios = require('axios');
//    axios.post('http://localhost:3000/join', {
//        id : id.value
//    }).then((res)=>{
//        console.log(res);
//        res.status(200);
//        res.send();
//        res.end();
//    })
    

// })



    //Ajax POST MEthod
    // $.ajax({
    //     url: '/join',
    //     dataType : 'json',
    //     type: 'POST',
    //     data: JSON.stringify({
    //         id: id.value,
    //     }),
    //     success : (res)=>{
            
    //     }
    // })
// })

console.log('asdas');
    function id_check(){
        $('#join_overlap').click((e)=>{
            e.preventDefault();
            console.log('클릭');
            const id_value = $("input[name='join_id']").val();
    
            $.post('/join', {id : id_value},()=>{
                DB.query('SELECT * FROM user WHERE id=?', id, (err,row)=>{
                    if(err)
                    console.log(err)
    
                    if(row === undefined){
                     alert('사용할 수 없는 ID입니다.');
                    }else{
                     alert('사용 가능한 ID입니다.');
                    }
                })
            })
        })
    }
       