"use strict"





//front



function kill_input() {
    document.getElementById("input_bar").style.height = 0;
    document.getElementById("input_box").innerHTML = ' ';
}

function login_box(a) {/*"48.5vw"*/
    document.getElementById("input_bar").style.height = "100%";
    document.getElementById("input_box").innerHTML = input_box[a];

    const id = document.querySelector("#login_id"),
    pw = document.querySelector("#login_pw"),
    // loginBtn = document.querySelector("#loginBtn");
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
}



//back

// DOM -> Document Object Model

const id = document.querySelector("#login_id"),
    pw = document.querySelector("#login_pw"),
    // loginBtn = document.querySelector("#loginBtn");
    loginBtn = document.querySelector("#login_submit");

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
            console.log(res);
            
        }
    });
});