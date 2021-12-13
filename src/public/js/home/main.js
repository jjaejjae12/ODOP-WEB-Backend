const user_focus = document.querySelector("#search_bar")
const search = document.querySelector("#search_box > div > form");

user_focus.addEventListener("focus", chang_focus);
user_focus.addEventListener("focusout", chang_focus);

function chang_focus() {
    const foucs = user_focus;
    if(foucs.placeholder == "") {
        foucs.placeholder = "무엇이 궁금하신가요";
        
    } else {
        foucs.placeholder = "";
        }
}



