// 팝업창
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()-60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}

// 추가 클릭 시 창 띄우기
function file_upload_pop(log){
    $(".black").css("display","block");
    $(".write_wrap").css("display","block");
    $(".contents_detail").css("display","none");
    who_am_(log);
    scrollDisable();
}

// 댓글 아이콘 클릭 시
function detail_comments_pop(board, board_id, log){
    $(".black").css("display","block");
    $(".contents_detail").css("display","block");
    showPopup(board,board_id);
    $(".write_wrap").css("display","none");
    who_am_i(log);
}

// x 버튼 클릭 시 창 닫기
$(".close").on("click", e=>{
    $(".black").css("display","none");
    when_close();
})

function when_close(){
    $('#detail_profile_img').attr("src",'');
    $('.detail_user_id').children().remove();
    scrollAble();
}

// 댓글 클릭 시 보여준다.
function showPopup(board, board_id){
    $(".contents_detail").css("display", "flex");
    let board_img = $(`#${board}`).attr("src");
    $("#detail_img_main").attr("src", board_img);
    scrollDisable()

    $.ajax({
        url : "/commentsLoad?board_id=" + board_id,
        type: "POST",
        async : false,
        contentType : "application/json"
    }).success(result =>{
        console.log("comments loading success");
        console.log(result);
        $.ajax({
            url : "/getUseridWhithBoardid?board_id="+board_id,
            type : "POST",
            async: false,
            contentType: "application/json"
        }).success(e=>{
            comments_view(result);

        }).fail(error=>{
            console.log("userList loading fail")
        })

    }).fail(error =>{
        console.log("comments loading fail");
    })

}

// 스크롤 강제 막기
function scrollDisable(){
    $('html, body').addClass('hidden');
}
// 스크롤 작동
function scrollAble(){
    $('html, body').removeClass('hidden');
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

        $('#user_id').val(user_id);
    })
}


// 댓글 띄우기
function comments_view(result){
    for(let i=0; i<result.length; i++){
        let html = `
            <div class="comment_section"></div>
`

    }
}
