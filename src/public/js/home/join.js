"use strict"

const user_name = document.querySelector("#join_name"),
    pet = document.querySelector("#join_pet"),
    birth = document.querySelector("#join_birth"),
    email = document.querySelector("#join_email"),
    id = document.querySelector("#join_id"),
    pw = document.querySelector("#join_pw"),
    joinBtn = document.querySelector("#join_submit");

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
