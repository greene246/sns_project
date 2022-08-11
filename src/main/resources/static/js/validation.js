let arr = new Array();
let comment_check = false;

// 팝업창
jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() - 60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}

// 추가 클릭 시 창 띄우기
function file_upload_pop(log) {
    scrollDisable();
    $(".black").css("display", "block");
    $(".write_wrap").css("display", "block");
    $(".contents_detail").css("display", "none");
}

// 댓글 아이콘 클릭 시
function detail_comments_pop(user_id, board, board_id, user_log, contents) {
    console.log($('.__profile_box').attr("value"));
    let my_id = $('.__profile_box').attr("value");

    // board 게시글 img 아이디
    // board_id 게시글의 id값
    // log 로그인 중인 user의 id값
    // contents 게시글의 내용

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
    $(".detail_profile_img").attr("onclick", `location.href='/userPage?user_id=${user_id}'`);

    // user_id 게시글 작성자의 id값
    // my_id 로그인 중인 user id값
    if(my_id == user_id){
        $('.del_btn_detail_profile').remove();
        let html = `<input type="image" src="img/delBtn.png" 
        class="del_btn_detail_profile" onclick=deleteBoardId1()>`

        $('.del_btn_section').append(html);
    }

    if (!comment_check) {
        $('.detail_user_id').empty();
        $('.detail_user_id').append(target_name);
        $('._contents').empty();
        $('._contents').append(target_contents);
    }

    showPopup(board, board_id, user_log);
    // 게시글 img아이디, 게시글의 id값, 나의 id값
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
    $('.detail_comments_val').val('');
    del_img();
    scrollAble();

    comment_check = false;
}

// 댓글 클릭 시 보여준다.
function showPopup(board, board_id, user_log) {
    scrollDisable();
    // 게시글 img아이디, 게시글의 id값, 나의 id값
    $(".contents_detail").css("display", "flex");

    let board_img = $(`#${board}`).attr("src");
    $("#detail_img_main").attr("src", board_img);
    $('#detail_board_id').val(board_id);

    comment_load(board_id, user_log)
}

// 댓글 정보 불러오기
function comment_load(board_id, user_log) {
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
            comments_view(result, result2, user_log, board_id);
        })
    })
}


// 스크롤 강제 막기
function scrollDisable() {
    $('#body').css("overflow", "hidden");
}

// 스크롤 작동
function scrollAble() {
    $('#body').css("overflow", "visible");
}

// 댓글 띄우기
function comments_view(result, result2, user_log, board_id) {
    $('.all_comments').empty();
// result = 댓글 정보
// result2 = 댓글 쓴 유저의 정보
// result.id = 댓글의 id : 삭제 시 필요
    let html;
    for (let i = 0; i < result.length; i++) {
        if (result2[i].id == user_log) {
            html = `
                <div class="comment_section">
                    <div class="comment_profile">
                        <div class="commented_user_info">
                            <span><img style="margin-right: 10px;" class="profile_img" src="${result2[i].thumbnail}" onclick="location.href='/myPage'"></span>
                            <h1 style="width: 40%;" >${result2[i].user_id}</h1>
                        </div>
                        <div class="comments_info">
                            
                            <span class="commented">${result[i].comment}</span>
                        </div>
                    </div>
                    <div>
                        <div class="set_comments">
                            <a onclick="del_comments('${result[i].id}', ${board_id}, ${user_log})">
                                <img src="img/delBtn.png" class="del_cbtn">
                            </a>
                        </div>
                    </div>
                </div>
            `;
        } else {

            html = `
                <div class="comment_section">
                    <div class="comment_profile">
                        <div class="commented_user_info">
                            <span><img style="margin-right: 10px;" class="profile_img" src="${result2[i].thumbnail}" onclick="location.href='/userPage?user_id=${result2[i].user_id}'"></span>
                            <h1 style="width: 40%;" >${result2[i].user_id}</h1>
                        </div>
                        <div class="comments_info">
                            
                            <span class="commented">${result[i].comment}</span>
                        </div>
                    </div>
            </div>
            `
        }

        $('.all_comments').append(html);
        comment_check = true;
    }
}

// 댓글 업로드
function upload_comments_in_detail(user_log) {
    // user_log = 로그인 중인 user의 id값
    // board_id = 댓글을 작성한 보드의 id값
    // input_comment = 작성한 댓글 내용

    let board_id = $('#detail_board_id').val();        // board_id
    let input_comment = $('#detail_comments_val').val();

    if (input_comment == '') {
        alert("댓글은 1자 이상 작성해주세요");
        return;
    }

    const requestData = {
        "user_id": user_log,
        "board_id": board_id,
        "comment": input_comment
    };

    $.ajax({
        url: '/upload_comments',
        method: 'POST',
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        console.log("comments upload success");
        $('#detail_comments_val').val('');
        comment_load(board_id, user_log);

    }).fail(error => {
        console.log("comments upload fail");
    })
}

// 댓글 업로드
function upload_comments(log, board_id, comments_id) {
    // log = 로그인 중인 user의 id값
    // board_id = 댓글을 작성한 보드의 id값
    // $(`#${comments_id}`).val() = 작성한 댓글 내용
    let comments;
    comments = $(`#${comments_id}`).val();

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
        console.log("comments upload success");
        $(`#${comments_id}`).val('');

    }).fail(error => {
        console.log("comments upload fail");
    })
}

// 댓글 삭제
function del_comments(target_id, board_id, user_id) {
    // target_id : 삭제할 댓글의 id값
    $.ajax({
        url: "/del_comment?comments=" + target_id,
        method: "post",
        contentType: "application/json"
    }).done(result => {
        $('.all_comments').empty();
        comment_load(board_id, user_id);
    })
}

// 검색기능
$('#search_btn').on("click", e => {
    $('.search_result').empty();
    $('.searched_section').css("display", "none");
    if ($('.search').val().length < 2) {
        alert("2글자 이상 검색해주세요");
        return;
    }
    $('.search_result').empty();
    $.ajax({
        url: "/searchUser?user_name=" + $('.search').val(),
        method: "post",
        contentType: "application/json"
    }).done(result => {
        if (result.length < 1) {
            let html = `<div style="position: relative; top: 12px; left: 82px;">
                            <span>검색 결과가 없습니다.</span>
                        </div>`
            $('.search_result').append(html);
        } else {
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
        }
        $('.searched_section').css("display", "block");
    })
})

$('.cancel_btn').on("click", e => {
    $('.search_result').empty();
    $('.searched_section').css("display", "none");
})

function deleteBoardId1(){
    let __boardId = $('#detail_board_id').val();

    deleteContent1(__boardId);
}


function deleteContent1(id){
    if(confirm("삭제하시겠습니까?")){
        $.ajax({
            url: "/deleteMyContent/" + id,
            type: "POST",
            contentType: "application/json",

            success: function () {
                alert("삭제되었습니다.");
                location.reload();
            },
            fail: function () {
                alert("실패했습니다.");
            },
            error: function () {
                alert("오류떴습니다.");
            }
        })
    }

}