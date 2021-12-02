"use strict"

// DOM -> Document Object Model

const id = document.querySelector("#id"),
    pw = document.querySelector("#password"),
    // loginBtn = document.querySelector("#loginBtn");
    loginBtn = document.querySelector("button");

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
    })
});

