"use strict"




//back

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
                location.href = "/";
            }else{
                console.log(res);
                
            }
        });
    });

console.log(id);
console.log(pw);

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
            location.href = "/";
        }else{
            alert("로그인 실패");
            location.href = "/login";
        }
    });
});