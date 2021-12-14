"use strict"

const name = document.querySelector("#join_name"),
    pet = document.querySelector("#join_pet"),
    birth = document.querySelector("#join_birth"),
    email = document.querySelector("#join_email"),
    id = document.querySelector("#join_id"),
    pw = document.querySelector("#join_pw"),
    joinBtn = document.querySelector("#join_pw");

joinBtn.addEventListener("click", ()=>{
    const req = {
        name : name.value,
        pet : pet.value,
        birth : birth.value,
        email : email.value,
        id : id.value,
        pw : pw.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));
   
    fetch("/join", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    }).then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            alert("회원가입에 성공했습니다.")
            location.href = "/login";
        }else{
            alert("회원가입에 실패했습니다.");
            location.href = "/join";
        }
    });
});
