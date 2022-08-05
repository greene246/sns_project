$('.msg').click(e => {
    // let img_className = e.target.className.split(' ')[1];
    // console.log(img_className);
    let img_src = $($(e.target).parents('.section')).find('.profile_img').prop('src');
    let user_id = $($(e.target).parents('.section')).find('.user_id').text();

    console.log(img_src);
    $('.detail_profile_img').attr("src", img_src);
    $('.detail_user_id').append(user_id);
})

window.onclick = function (event) {
    let $target = event.target.className;
    let black = "black";
    if ($target == black) {
        $(".black").css("display","none");
        when_close();
    }
}

