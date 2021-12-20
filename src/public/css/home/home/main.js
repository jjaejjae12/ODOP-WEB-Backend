let content = `
<div class="ex">
    <div class="dd">
        <div class="show_hd">
            <div class="show_profile">
                <img src="../IMG/icon/exprofile.png" alt="">
            </div>
            <div class="show_inforamtio">
                <a class="show_user_name" href="">uaerName</a>
                <a class="show_uplod_day" href="">2021.11.25</a>
            </div>
        </div>
        <div class="hashtag">
            <div class="tag_box">
                <div class="tags">
                    오늘 진짜 디자인 끝낸다 오늘 진짜 디자인 끝낸다
                </div>
                <div class="tags">
                    오늘 진짜 디자인 끝낸다 오늘 진짜 디자인 끝낸다
                </div>
            </div>
        </div>
        <div class="show_img">
            <div class="icon_box">
                <i class="far fa-heart icon_love love_on"></i>
                <i class="fas fa-tag icon_tag tag_on"></i>
            </div>
            <img src="../IMG/icon/expetimg.jp" alt="">
        </div>
    </div>
</div>

`
let upload_content = `
<div id="upload_bar">
<div id="input_box">
    <img id="start_sub_logo" src="../IMG/logoIMG/LoginLogo.png" alt="logo_main(LoginLogo)">
    <form id="inputbox_form" action="">
        <div class="login_class">
            <input type="text" id="login_id" class="start_lj_input" autocomplete="off" required>
            <label for="login_id">아이디</label>
        </div>
        <div class="login_class">
            <input type="login_password" id="pw" class="start_lj_input" autocomplete="off" required>
            <label for="login_pw">비밀번호</label>
        </div>
        <input type="submit" id="login_sunbmit" value="로그인">
    </form>
</div>
</div>
`

init();

function init() {
    const content_space = document.querySelector('#play');
    for (let i = 0; i < 36; i++) {
        content_space.innerHTML += content;
    }
}

const user_focus = document.querySelector("#search_bar")
const search = document.querySelector("#search_box > div > form");

user_focus.addEventListener("focus", chang_focus);
user_focus.addEventListener("focusout", chang_focus);

function chang_focus() {
    const foucs = user_focus;
    if (foucs.placeholder == "") {
        foucs.placeholder = "무엇이 궁금하신가요";

    } else {
        foucs.placeholder = "";
    }
}


const love_icon = document.querySelectorAll(".icon_love")

const tag_icon = document.querySelectorAll(".icon_tag")


for (let i = 0; i < love_icon.length; i++) {
    love_icon[i].addEventListener("click", function () { check_love(i) })

}

for (let i = 0; i < tag_icon.length; i++) {
    tag_icon[i].addEventListener("click", function () { check_tag(i) })

}
function check_love(a) {

    let check = love_icon[a].classList;

    if (check.contains('love_on') === true) {
        check.replace('far', 'fas');
        check.replace('love_on', 'love_off');   
    } else {
        check.replace('fas', 'far');
        check.replace('love_off', 'love_on');
    }
}

function check_tag(a) {

    let check = tag_icon[a].classList;

    if (check.contains('tag_on') === true) {
        check.replace('tag_on', 'tag_off');
    } else {
        check.replace('tag_off', 'tag_on');
    }
}

const upload_up_event = document.querySelector('#upload_bt');
const upload_down_event = document.querySelector('#input_bar');
upload_up_event.addEventListener('click',show_up_box)
upload_down_event.addEventListener('click',show_down_box)

function show_up_box() {
    console.log(1);
    upload_box.innerHTML = upload_content
    document.getElementById("input_bar").style.height = "100%";

}

function show_down_box() {
    
    document.getElementById("input_bar").style.height = "0%";
    upload_box.innerHTML = ``;
}
