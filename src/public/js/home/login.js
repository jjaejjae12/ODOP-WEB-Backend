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
   
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    }).then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/main";
        }else{
            alert("로그인 실패");
            location.href = "/login";
        }
    });
});


