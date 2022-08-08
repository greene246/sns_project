let arr = new Array();

// 팝업창
jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() - 60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}

// 추가 클릭 시 창 띄우기
function file_upload_pop(log) {
    $(".black").css("display", "block");
    $(".write_wrap").css("display", "block");
    $(".contents_detail").css("display", "none");
    who_am_i(log);
    scrollDisable();
}

// 댓글 아이콘 클릭 시
function detail_comments_pop(board, board_id, log) {
    $(".black").css("display", "block");
    $(".write_wrap").css("display", "none");
    $(".contents_detail").css("display", "block");
    $("#detail_board_id").val(board_id);
    showPopup(board, board_id, log);
    who_am_i(log);
}

// x 버튼 클릭 시 창 닫기
$(".close").on("click", e => {
    $(".black").css("display", "none");
    when_close();
})

function when_close() {
    $('#detail_profile_img').attr("src", '');
    $('.detail_user_id').children('span').remove();
    $('.all_comments').children('div').remove();
    scrollAble();
}

// 댓글 클릭 시 보여준다.
function showPopup(board, board_id, log) {
    $(".contents_detail").css("display", "flex");
    let board_img = $(`#${board}`).attr("src");
    $("#detail_img_main").attr("src", board_img);
    $('#detail_board_id').val(board_id);

    $.ajax({
        url: "/commentsLoad?board_id=" + board_id,
        type: "POST",
        async: false,
        contentType: "application/json"
    }).done(result => {
        console.log("comments loading success");
        console.log(result);

        result.forEach(e => {
            arr.push(e.user_id);
        })

        $.ajax({
            url: "/getUserLists",
            type: "POST",
            data: JSON.stringify(arr),
            async: false,
            contentType: "application/json"
        }).done(result2 => {
            comments_view(result, result2, log);
            arr = new Array();
        })
    })
}

// 스크롤 강제 막기
function scrollDisable() {
    $('html, body').css("overflow", "hidden")
}

// 스크롤 작동
function scrollAble() {
    $('html, body').css("overflow", "visible")
}

// 버튼 클릭시 나의 아이디 받아오기
function who_am_i(log) {
    $.ajax({
        url: "/getInfo?log=" + log,
        type: "POST"
    }).done(result => {
        let user_id = result.user_id;

        $('#user_id').val(user_id);
    })
}


// 댓글 띄우기
function comments_view(result, result2, log) {
// result = 댓글 정보
// result2 = 댓글 쓴 유저의 정보
// result.id = 댓글의 id : 삭제 시 필요
    let html;
    for (let i = 0; i < result.length; i++) {
        if (result2[i].id == log) {
            html = `<div class="comment_section">
                <div class="commented_user_info">
                    <span><img class="profile_img" src="${result2[i].thumbnail}"></span>
                </div>
                <div class="comments_info">
                    <h1>${result2[i].user_id}</h1>
                    <span class="commented">${result[i].comment}</span>
                </div>
                <div class="set_comments"><a onclick="del_comments('${result[i].id}')">삭제</a></div>
            </div>
            `;
        } else {

            html = `
            <div class="comment_section">
                <div class="commented_user_info">
                    <span><img class="profile_img" src="${result2[i].thumbnail}"></span>
                </div>
                <div class="comments_info">
                    <h1>${result2[i].user_id}</h1>
                    <span class="commented">${result[i].comment}</span>
                </div>
            </div>
            `
            $('.all_comments').append(html);
        }
    }
}

// 댓글 업로드
    function upload_comments(log, board_id, comments_id,board) {
        // log = 로그인 중인 user의 id값
        // board_id = 댓글을 작성한 보드의 id값
        // $(`#${comments_id}`).val() = 작성한 댓글 내용
        let comments;
        if (board_id == '') {
            board_id = $('#detail_board_id').val();
            comments = $("#detail_comments_val").val();
        } else {
            comments = $(`#${comments_id}`).val();
        }

        if (comments == '') {
            alert("댓글은 1자 이상 작성해주세요");
            return;
        }

        console.log(board_id);
        console.log(comments);

        const requestData = {
            "user_id": log,
            "board_id": board_id,
            "comment": comments
        };

        $.ajax({
            url: '/upload_comments',
            method: 'POST',
            data: JSON.stringify(requestData),
            contentType: "application/json"
        }).success(result => {
            $(`#${comments_id}`).val('');
            $("#detail_comments_val").val('');
            $('.all_comments').empty();
            detail_comments_pop(board, board_id, log)
        }).fail(error => {
            console.log("comments upload fail");
        })
    }



function del_comments(target_id) {
    console.log(target_id);
    $.ajax({
        url: "/del_comment?comments=" + target_id,
        method: "post",
        contentType: "application/json"
    }).done(result => {

        console.log("delete_comment success")

    })
}
