function love(event) {
    let check = event.target.classList;
    
    if (check.contains('love_on') === true) {
                check.replace('far', 'fas');
                check.replace('love_on', 'love_off');   
            } else {
                check.replace('fas', 'far');
                check.replace('love_off', 'love_on');
            }

}

function hashtag(event) {
    let check = event.target.classList;

    if (check.contains('tag_on') === true) {
        check.replace('tag_on', 'tag_off');
    } else {
        check.replace('tag_off', 'tag_on');
    }
}