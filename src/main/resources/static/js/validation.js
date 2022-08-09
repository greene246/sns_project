let arr = new Array();
let comment_check = false;
let _userid1;
let _img_id;
let _board_id;

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
function detail_comments_pop(user_id, board, board_id, log, contents) {
    $(".black").css("display", "block");
    $(".write_wrap").css("display", "none");
    $(".contents_detail").css("display", "block");
    $("#detail_board_id").val(board_id);


    // 디테일 창에서의 작성자 정보
    let profile_img = user_id + "_info";
    let target_url = $(`.${profile_img}`).attr("src");
    let target_name = `<span>${user_id}</span>`;
    let target_contents = `${contents}`;

    $(".detail_profile_img").attr("src", target_url);

    if(!comment_check){
        $('.detail_user_id').empty();
        $('.detail_user_id').append(target_name);
        $('._contents').empty();
        $('._contents').append(target_contents);
    }

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

    comment_check = false;
}

// 댓글 클릭 시 보여준다.
function showPopup(board, board_id, log) {
    $(".contents_detail").css("display", "flex");

    let board_img = $(`#${board}`).attr("src");
    $("#detail_img_main").attr("src", board_img);
    $('#detail_board_id').val(board_id);
    // scrollDisable();

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
            arr = new Array();
            comments_view(result, result2, log);
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
                <div class="set_comments"><a onclick="del_comments('${result[i].id}')"><img src="img/delBtn.png" class="del_cbtn"></a></div>
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
        }

        $('.all_comments').append(html);
        comment_check = true;
    }
}
// 댓글 업로드
function upload_comments(log, board_id, comments_id, img_id, user_id, contents) {
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
        _userid1 = user_id;
        _img_id = img_id;
        _board_id = board_id;
        console.log("comments upload success");
        $(`#${comments_id}`).val('');
        $("#detail_comments_val").val('');
        $('.all_comments').empty();
        comment_check =true;
        detail_comments_pop(user_id, img_id, board_id, log, contents);
    }).fail(error => {
        console.log("comments upload fail");
    })
}

// 댓글 삭제
function del_comments(target_id) {
    $.ajax({
        url: "/del_comment?comments=" + target_id,
        method: "post",
        contentType: "application/json"
    }).done(result => {
        $('.all_comments').empty();
        detail_comments_pop(_userid1, _img_id, _board_id, _log);
    })
}

// 검색기능
$('#search_btn').on("click", e => {
    $('.search_result').empty();
    $('.searched_section').css("display", "none");
    if ($('.search').val() == '') {
        alert("1글자 이상 검색해주세요");
        return;
    }
    $('.search_result').empty();
    $.ajax({
        url: "/searchUser?user_name=" + $('.search').val(),
        method: "post",
        contentType: "application/json"
    }).done(result => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            let user_id = result[i].user_id;
            let name = result[i].name;
            let thumbnail = result[i].thumbnail;
            let html = `<div class="searchedUser" onclick="location.href='/userPage?user_id=${user_id}'">
                            <div class="img_section">
                                <img src="${thumbnail}" class="search_img">
                            </div>
                            <div class="searched_user_id">
                                <span>${user_id}</span>
                            </div>
                            <div class="searched_user_name">
                                <span>${name}</span>
                            </div>
                        </div>`

            $('.search_result').append(html);
        }
        $('.searched_section').css("display", "block");

    })
})

$('.close_result').on("click", e => {
    $('.search_result').empty();
    $('.searched_section').css("display", "none");
})