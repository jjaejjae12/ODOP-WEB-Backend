"use strict"

// // const router = express.Router();
// const router = require('/routes/home/index'),
//     ctrl = require('/routes/home/home.ctrl');
const joinBtn = document.querySelector("#join_submit");
const check_id_Btn = document.querySelector('#join_overlap');
const id = document.querySelector('#join_overlap');

    
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


check_id_Btn.addEventListener("click", ()=>{
    const req = axios.get(`/join=${id.value}`);
    console.log(req);
    

})