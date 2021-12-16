"use strict"

const joinBtn = document.querySelector("#join_submit");
const check_id_Btn = document.querySelector('#join_overlap');

    
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
    
})