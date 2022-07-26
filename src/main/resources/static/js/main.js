let $thumb;
let _userid;
let _log;
function getBoards(scope,log) {
    let list;
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        async: false,

        success: data => {

            data.forEach(e => {
                insertHtml(e);
                _userid = e.id;
                _log = log;
                 getThumbnail(e.user_id);
                 checkDibs(_userid,_log);
            })
        },
        fail: function () {
            console.log("fail1")
        },
        error: function () {
            console.log("error1")
        }
    })
    return list;
}

function insertHtml(Board) {

    console.log("insert check");

    let html = `
                 <div class='section'> 
               
                    <div class='profile_box'>
                    
                    <!-- <span id="contents"><img class="thum_img_target"></span>-->
                     
                     <span id="profile_img_wrap"><img class="profile_img ${Board.user_id}_info"></span>
                     
                        <div id='userid'>
                            <a>${Board.user_id}</a>
                        </div>
                    </div>

                    <span id='main_img'><img src=${Board.img_url}></span>

                    <!-- icon 모음 -->
                    <div class='icon'>
                        <!-- 좋아요 / 댓글 / 디엠 -->
                        <div class='three'>
                            <img src='./img/heart.png' class='icon_img ${Board.id}_img'  value="${Board.id}" onclick="checkHeart(${Board.id})">
                                <a href='javascript:;' onClick='javascript:showPopup()'>
                                    <img src='./img/message.png' onClick='javascript:black_block()' class='icon_img'>
                                </a>
                                <img src='./img/direct.png' class='icon_img'>
                        </div>
                        <!-- 북마크 -->
                        <span><img src='./img/bookmark_off.png' class='icon_img'></span>

                    </div>

                    <span class='word'> 좋아요 ${Board.like_cnt}개</span>
                    <span class='id'>${Board.user_id}</span>

                    <div className='main3' id='contents'>${Board.contents}</div>
                    <div className='main4' id='createdAt'>${Board.createdAt}</div>
                </div>
            `;

    $('.all_contents').append(html);
}
//유저 id를 이용해서 해당 아이디의 썸네일을 가져온다
function getThumbnail(userId) {
    $.ajax({
        url: "/getThumbnail?id=" + userId,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
             $('.'+userId+'_info').prop('src', data.replace(/"/gi,""));
        },
        fail: function () {
            console.log("fail2")
        },
        error: function () {
            console.log("error2")
        }
    })
}
// // 해당 테이블에 찜 확인 출력
function checkDibs(userid,log) {

    $.ajax({
        url: "/likesSearch?userid=" + userid + "&log=" + log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            if(data == true) {
                $('.'+userid+'_img').prop('src',"./img/fullhearts.png");
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

//하트 찜하기
function checkHeart(boardid) {
    console.log("boardid: "+boardid)
    $.ajax({
        url: "/dibsSearch?boardid=" + boardid + "&log=" + _log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            if(data == true) {
                $('.'+boardid+'_img').prop('src',"./img/heart.png");
            }
            else{
                $('.'+boardid+'_img').prop('src',"./img/fullhearts.png");
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