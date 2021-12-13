"use strict"





//front

document.getElementById("login_bt").onclick = function(){login_box(0)};
document.getElementById("join_bt").onclick = function(){login_box(1)};
document.getElementById("input_bar").onclick = function(){kill_input()};

var input_box = [];

input_box[0] = `
    <img id="start_sub_logo" src="/IMG/logoIMG/LoginLogo.png" alt="logo_main(LoginLogo)">
    <form id = "inputbox_form" action="/login" method="POST">
        <div class="login_class">
            <input type="text" id="login_id" class="start_lj_input"
            autocomplete="off" required>
            <label for="login_id">아이디</label>
        </div>
        <div class="login_class">
            <input type="login_password" id = "login_pw"class="start_lj_input"
            autocomplete="off" required>
            <label for="login_pw">비밀번호</label>
        </div>
        <input type="submit" id="login_sunbmit" value="로그인">  
    </form>
`;

input_box[1] = `
    <img id="start_sub_joinlogo" src="/IMG/logoIMG/LoginLogo.png" alt="logo_main(LoginLogo)">
    <form id = "inputbox_form" action="">
        <div class="join_class">
            <input type="text" id="join_name" class="start_lj_input"
            autocomplete="off" required>
             <label for="join_name">이름</label>
        </div>
        <div class="join_class">
            <input type="text" id="join_birth" class="start_lj_input"
            autocomplete="off" required>
            <label for="join_birth">반려동물</label>
        </div>
        <div class="join_class">
            <input type="text" id="join_email" class="start_lj_input"
             autocomplete="off" required>
            <label for="join_email">이메일</label>
        </div>
            <div class="join_class">
            <input type="text" id="join_id" class="start_lj_input"
            autocomplete="off" required>
            <label for="join_id">아이디</label>
            <label id = "join_overlap" for="join_id">중복확인</label>
        </div>
        <div class="join_class">
            <input type="password" id = "join_pw"class="start_lj_input"
            autocomplete="off" required>
            <label for="join_pw">비밀번호</label>
        </div>
        <input type="submit" id="join_sunbmit" value="회원가입">  
    </form>
`;


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