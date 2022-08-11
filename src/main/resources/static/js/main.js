let _userid;
let _log;
let _contents;

//Boards DB에 있느 값을 가져온다.
function getBoards(log) {
    $.ajax({
        url: "/search/" + 0,
        type: "GET",
        async: false,
        contentType: "application/json"
    }).done(data => {
        data.forEach(e => {
            _log = log;
            _userid = e.id;
            setTimeout(function() {
                insertHtml(e, _log);
                getThumbnail(e.user_id);
                checkDibs(_userid, _log);
            }, 300);
        })
    })
}


//메인 출력 부분
function insertHtml(Board, log) {
    let my_id = $('._profile_box').attr("value");
    let html = `
                 <div class='section author_${Board.user_id} bNum_${Board.id}'>
                    <div class='profile_box'>
                         <span id="profile_img_wrap">
                            <img class="profile_img ${Board.user_id}_info" onclick="location.href='/userPage?user_id=${Board.user_id}&my_id=${my_id}'">
                         </span>
                        <div id='userid' onclick="location.href='/userPage?user_id=${Board.user_id}&my_id=${my_id}'" value="${Board.user_id}">
                            <a class="user_id">${Board.user_id}</a>
                        </div>
                    </div>
                    <div class="main_img_wrap">
                        <div id='main_img'><img src=${Board.img_url} class="print_img" id="img_${Board.id}"></div>
                    </div>
                    <div class='icon'>
                        <div class='three'>
                            <img src='./img/heart.png' class='icon_img ${Board.id}_img'  value="${Board.id}" onclick="checkHeart(${Board.id})">
                            <input type="hidden" value="${Board.contents}" id="hidden_contents">
                                    <img src='./img/message.png' class='icon_img msg' onclick="detail_comments_pop('${Board.user_id}', 'img_${Board.id}', '${Board.id}', '${log}')">
                        </div>
                    </div>
                    <div class="text_sources">
                        <span class='word'> 좋아요 ${Board.like_cnt}개</span>
                        
                        <span class='id'>${Board.user_id}</span>
                        
                        <div class="box">
                            <span className='main3' id='contents' class="content">${Board.contents}</span>
                        </div>
                        
                        <span className='main4' id='createdAt'>${(Board.createdAt).substring(0, 10)}</span>
                        <div class="input_comments">
                                <textarea id="comments_${Board.id}" placeholder="친구와 소통해봐요! (300자 이내)" class="text_area"></textarea>
                                <input type="button" class="detail_btn" value="댓글" onclick="upload_comments(${log}, ${Board.id}, 'comments_${Board.id}')">
                        </div>
                    </div>
                </div>
            `;

    $('.main_section').append(html);
}

// Serve 출력 부분
function serveShow(log) {
    //유저의 log을 받아서 해당 users의 정보를 가져온 후 그 정보를 출력한다.
    $.ajax({
        url: "/getUser/" + log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            let html = `
                    <div class="serve_block" onclick="location.href='/myPage'">
                         <img src=${data.thumbnail} class="profile_img1">
                         <div class='__profile_box' value="${data.user_id}">${data.user_id}</div>
                     </div>
            `;

            $('.serve_section').append(html);
            $('#user_id').val(data.user_id);
        },
        fail: function () {
            console.log("fail4")
        },
        error: function () {
            console.log("error4")
        }
    })
}

//유저 id를 이용해서 해당 아이디의 썸네일을 가져온다
function getThumbnail(userid) {
    $.ajax({
        url: "/getThumbnail?id=" + userid,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            $('.' + userid + '_info').prop('src', data.replace(/"/gi, ""));
        },
        fail: function () {
            console.log("fail2")
        },
        error: function () {
            console.log("error2")
        }
    })
}

// 해당 테이블에 찜 확인 출력
function checkDibs(userid, log) {

    $.ajax({
        url: "/likesSearch?userid=" + userid + "&log=" + log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            if (data == true) {
                $('.' + userid + '_img').prop('src', "./img/fullhearts.png");
            }
        },
        fail: function () {
            console.log("fail2")
        },
        error: function () {
            console.log("error2")
        }
    })
}

//하트 찜하기 2022.08.11 fix
function checkHeart(boardid) {
    $.ajax({
        url: "/dibsSearch?boardid=" + boardid + "&log=" + _log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            location.reload();
        },
        fail: function () {
            console.log("fail2")
        },
        error: function () {
            console.log("error2")
        }
    })
}

// 더보기 생성
$(document).ready(function () {

    $('.box').each(function () {
        let content = $(this).children('.content');
        let content_txt = content.text();
        let content_txt_short = content_txt.substring(0, 10) + "...";
        let btn_more = $('<a href="javascript:void(0)" class="more">더보기</a>');

        $(this).append(btn_more);

        if (content_txt.length >= 10) {
            content.html(content_txt_short)

        } else {
            btn_more.hide()
        }

        btn_more.click(toggle_content);
        // 아래 bind가 안 되는 이유는??
        // btn_more.bind('click',toggle_content);

        function toggle_content() {
            if ($(this).hasClass('short')) {
                // 접기 상태
                $(this).html('더보기');
                content.html(content_txt_short)
                $(this).removeClass('short');
            } else {
                // 더보기 상태
                $(this).html('접기');
                content.html(content_txt);
                $(this).addClass('short');

            }
        }
    });
});