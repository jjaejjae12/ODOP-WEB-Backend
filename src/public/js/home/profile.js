const post = `
                        <div class="ex">
                            <div class="dd">
                                <div class="show_hd">
                                    <div class="show_profile">
                                        <img src="../IMG/icon/exprofile.png" alt="">
                                    </div>
                                    <div class="show_inforamtio">
                                        <a class="show_user_name" href="">userName</a>
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


const bookmark = `
<div class="ex">
                            <div class="dd">
                                <div class="show_hd">
                                    <div class="show_profile">
                                        <img src="../IMG/icon/exprofile.png" alt="">
                                    </div>
                                    <div class="show_inforamtio">
                                        <a class="show_user_name" href="">userName</a>
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
post_load();
bookmark_load();

function post_load() {
    const inner = document.querySelector("#post_section");
    console.log(inner)
    for (let i = 0; i < 10; i++) {
        inner.innerHTML+= post;  
    }
}

function bookmark_load() {
    const inner = document.querySelector("#bookmark_section");
    console.log(inner)
    for (let i = 0; i < 10; i++) {
        inner.innerHTML+= bookmark;  
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