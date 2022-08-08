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
                                    <img src='./img/message.png' class='icon_img msg' onclick="detail_comments_pop('img_${Board.id}', ${Board.id}, ${log})">
                                <img src='./img/direct.png' class='icon_img'>
                        </div>
                        <!-- 북마크 -->
                        <span><img src='./img/bookmark_off.png' class='icon_img'></span>
                    </div>
                    
                    <div class="text_sources">
                        <span class='word'> 좋아요 ${Board.like_cnt}개</span>
                        <span class='id'>${Board.user_id}</span>
                        <span className='main3' id='contents'>${Board.contents}</span>
                        <span className='main4' id='createdAt'>${Board.createdAt.substring(0,10)}</span>
                        <input type="text" id="comments_${Board.id}" placeholder="친구와 소통해봐요!">
                        <input type="button" value="댓글" onclick="upload_comments(${log}, ${Board.id}, 'comments_${Board.id}', '${Board.id}_img')">
                    </div>
                    
                </div>
            `;

    $('.main_section').append(html);
}

// Serve 출력 부분
function serveShow(log){
    console.log("serve 출력 js")
  //유저의 log을 받아서 해당 users의 정보를 가져온 후 그 정보를 출력한다.
    $.ajax({
        url: "/getUser?log=" + log,
        type: "GET",
        async: false,
        contentType: "application/json",
        success: data => {
            let html = `
                     <img src=${data.img_url}>
                     <div class='profile_box'>${data.user_id}</div>
            `;

            $('.serve_section').append(html);
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
             $('.'+userid+'_info').prop('src', data.replace(/"/gi,""));
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
