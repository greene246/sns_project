// 팝업창
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()-60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}
// $(".subsBtn").on('click', e=>{
//     $(".black").css("display","block");
// });

function black_block(){
    $(".black").css("display","block");
}
// $(".cancel").on('click', e=>{
//     $(".pop1").css("display","none");
//     $(".black").css("display","none");
//
// });


// 댓글 클릭 시 보여준다.
function showPopup(){
    $(".contents_detail").css("display", "block");
    scrollDisable()
}

// 추가 버튼 클릭 시
function writeForm(log){
    $('.write_wrap').css("display","block");
    who_am_i(log);
    scrollDisable()
}

// 스크롤 강제 막기
function scrollDisable(){
    $('html, body').addClass('hidden');
}
// 스크롤 작동
function scrollAble(){
    $('html, body').removeClass('hidden');
}

//팝업창에 여백클릭스 cancel
cancel = function() {
    $(".contents_detail").css("display","none");
    $('.write_wrap').css("display","none");
    $(".black").css("display","none");
    scrollAble()
}

$(document).ready(function(){

    $('.box').each(function(){
        let content = $(this).children('.content');
        let content_txt = content.text();
        let content_txt_short = content_txt.substring(0,48)+"...";
        let btn_more = $('<a href="javascript:void(0)" class="more">더보기</a>');

        $(this).append(btn_more);

        if(content_txt.length >= 48){
            content.html(content_txt_short)

        }else{
            btn_more.hide()
        }

        btn_more.click(toggle_content);
        // 아래 bind가 안 되는 이유는??
        // btn_more.bind('click',toggle_content);

        function toggle_content(){
            if($(this).hasClass('short')){
                // 접기 상태
                $(this).html('더보기');
                content.html(content_txt_short)
                $(this).removeClass('short');
            }else{
                // 더보기 상태
                $(this).html('접기');
                content.html(content_txt);
                $(this).addClass('short');

            }
        }
    });
});

// 버튼 클릭시 나의 아이디 받아오기
function who_am_i(log){
    $.ajax({
        url: "/getInfo?log="+log,
        type : "POST"
    }).done(result => {

        let user_id = result.user_id;
        console.log(user_id)

        $('#user_id').val(user_id);
    })
}


