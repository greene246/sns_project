let $thumb;
let _userid;
let _log;
function getBoards(scope,log) {
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        async: false,

        success: data => {
            data.forEach(e => {
                _log = log;
                _userid = e.id;
                insertHtml(e, _log);
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
}

function insertHtml(Board, log) {

    let html = `
                 <div class='section author_${Board.user_id} bNum_${Board.id}'>
                    <div class='profile_box'>
                     <span id="profile_img_wrap"><img class="profile_img ${Board.user_id}_info"></span>
                        <div id='userid'>
                            <a class="user_id">${Board.user_id}</a>
                        </div>
                    </div>
                    <span id='main_img'><img src=${Board.img_url} class="print_img" id="img_${Board.id}"></span>
                    <!-- icon 모음 -->
                    <div class='icon'>
                        <!-- 좋아요 / 댓글 / 디엠 -->
                        <div class='three'>
                            <img src='./img/heart.png' class='icon_img ${Board.id}_img'  value="${Board.id}" onclick="checkHeart(${Board.id})">
<!--                                <a onclick='detail_comments_pop("img_${Board.id}", ${Board.id}, ${log})'>-->
                                    <img src='./img/message.png' class='icon_img msg' onclick="detail_comments_pop('img_${Board.id}', ${Board.id}, ${log})">
<!--                                </a>-->
                                <img src='./img/direct.png' class='icon_img'>
                        </div>
                        <!-- 북마크 -->
                        <span><img src='./img/bookmark_off.png' class='icon_img'></span>
                    </div>
                    <div class="text_sources">
                        <span class='word'> 좋아요 ${Board.like_cnt}개</span>
                        <span class='id'>${Board.user_id}</span>
                        <span className='main3' id='contents'>${Board.contents}</span>
                        <span className='main4' id='createdAt'>${Board.createdAt}</span>
                        <input type="text" id="comments_${Board.id}" placeholder="친구와 소통해봐요!">
                        <input type="button" value="댓글" onclick="upload_comments(${log}, ${Board.id}, 'comments_${Board.id}')">
                    </div>
                </div>
            `;

    $('.main_section').append(html);
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

// 댓글 업로드
function upload_comments(log, board_id, comments_id){
    // log = 로그인 중인 user의 id값
    // board_id = 댓글을 작성한 보드의 id값
    // $(`#${comments_id}`).val() = 작성한 댓글 내용
    let comments = $(`#${comments_id}`).val();
    const requestData = {
        "user_id" : log,
        "board_id" : board_id,
        "comment" : comments
    };

    $.ajax({
        url : '/upload_comments',
        method : 'POST',
        data : JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        console.log("comments upload success");
        $(`#${comments_id}`).val('');
    }).fail(error=>{
        console.log("comments upload fail");
    })
}




// // 해당 테이블에 찜 확인 출력
// function checkDibs(userid,log) {
//     $.ajax({
//         url: "/likesSearch?userid=" + userid + "&log=" + log,
//         type: "GET",
//         async: false,
//         contentType: "application/json",
//         success: data => {
//             $('.'+userId+'_info').prop('src', data.replace(/"/gi,""));
//         },
//         fail: function () {
//             console.log("fail2")
//         },
//         error: function () {
//             console.log("error2")
//         }
//     })
// }
//찜 아이콘을 클릭시 실행
// 클릭시 해당 아이디의 log
//
// $('#dibs').click(e => {
//     console.log("알빠노sss")
//
//     $.ajax({
//         url: "/search/",
//         type: "GET",
//         async: false,
//     }).success(result=>{
//         console.log(result)
//         if(result == true) {
//            console.log("rdeeeeee");
//         }
//         else{
//             console.log("aaaaa")
//         }
//
//     }).fail(error=>{
//         console.log("ss: "+error)
//     })
//
// })

