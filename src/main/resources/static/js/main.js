let $thumb;
let _userid;
let _log;
//Boards DB에 있느 값을 가져온다.
function getBoards(scope,log) {
    let list;
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {

            data.forEach(e => {
                _userid = e.id;
                _log = log;
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
    return list;
}
//메인 출력 부분
function insertHtml(Board, log) {

    console.log("insert check");
    console.log(Board.like_cnt);
    let html = `
                 <div class='section'> 
               
                    <div class='profile_box'>
                    
                     <span id="profile_img_wrap"><img class="profile_img ${Board.user_id}_info"></span>
                     
                        <div id='userid'>
                            <a>${Board.user_id}</a>
                        </div>
                    </div>

                    <span id='main_img'><img src=${Board.img_url} class="print_img"></span>

                    <!-- icon 모음 -->
                    <div class='icon'>
                        <!-- 좋아요 / 댓글 / 디엠 -->
                        <div class='three'>
                            <img src='./img/heart.png' class='icon_img ${Board.id}_img'  value="${Board.id}" onclick="checkHeart(${Board.id})">
                                <a onClick='showPopup(), black_block()'>
                                    <img src='./img/message.png' class='icon_img'>
                                </a>
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
                
                    <div class="black" onclick="javascript:cancel()"></div>
                        <div class="contents_detail" style="display: none">
                        <div class="detail_img">
                            <img src="/img/cute.JPG">
                        </div>
                        <div class="detail_coments">
                            <h1>test 댓글창</h1>
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

 // 해당 테이블에 찜 확인 출력
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
    location.reload()
}

 // 댓글 업로드
function upload_comments(log, board_id, comments_id){
    // log = 로그인 중인 user의 id값
    // board_id = 댓글을 작성한 보드의 id값
    // $(`#${comments_id}`).val() = 작성한 댓글 내용
    let comments = $(`#${comments_id}`).val();
    console.log(comments);
    const requestData = {
        "user_id" : log,
        "board_id" : board_id,
        "comment" : comments
    };

    console.log(requestData)

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

