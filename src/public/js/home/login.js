"use strict"

//login 
const id = document.querySelector("#login_id"),
    pw = document.querySelector("#login_pw"),
    loginBtn = document.querySelector("#login_submit");

loginBtn.addEventListener("click", ()=>{
    const req = {
        id : id.value,
        pw : pw.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));
});


