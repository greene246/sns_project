let _userid;
let _log;
let row_cnt = 0;
let total_cnt;
let user_log;
let page_cnt = 0;

//Boards DB에 있느 값을 가져온다.

// 1. 보드 전체 개수를 확인
// 2. 10개 단위로 ajax 호출
// 3. let name = setInterval(500, 호출메소드);
// 4. 조건(카운트) 도달 시, 인터벌 종료

function pageCnt(log){
    $.ajax({
        url: "/count_boards/",
        type: "POST",
        async: false,
        contentType: "application/json"
    }).done(result=>{
        total_cnt = result;
        page_cnt = total_cnt / 10;
        user_log = log;
    })
}

// let interval = setInterval(500, getBoards(user_log));
// clearInterval(interval);
let interval;
let section_cnt;

function getBoards(log) {
    user_log = log
    if(total_cnt / 10 > 0){
        section_cnt = 10;
    }
    else{
        section_cnt = total_cnt % 10;
    }

    $.ajax({
        url: "/search/" + row_cnt + "/" + section_cnt,
        type: "GET",
        async: false,
        contentType: "application/json"
    }).done(data => {
        if(data.length == 0){
            clearInterval(interval);
            return;
        }
        row_cnt += section_cnt;
        total_cnt -= section_cnt;

        data.forEach(e => {
            _log = log;
            _userid = e.id;
            insertHtml(e, _log);
            getThumbnail(e.user_id);
            checkDibs(_userid, _log);
        })
        interval = setInterval(getBoards(user_log), 100);
        page_cnt --;
    }).fail(fail=> {
        total_cnt = 0;
        clearInterval(interval);
    });
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
                            <input type="hidden" value="${Board.contents}" id="hidden_contents_${Board.id}">
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
    }).done(done=> {
        location.reload();
    }).fail(error=>{
        console.log("error2")
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