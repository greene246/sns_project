let $thumb;
let _userid;
let _boardid;
function getBoards(scope,log) {
    let list;
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        async: false,

        success: data => {
            data.forEach(e => {
                insertHtml(e, log);
                _userid = e.user_id;
                getThumbnail(_userid);
                // checkDibs(_userid,_boardid);
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

function insertHtml(Board, log) {

    console.log("insert check");



    let html = `
                 <div class='section'> 
               
                    <div class='profile_box'>
                    
                    <!-- <span id="contents"><img class="thum_img_target"></span>-->
                     
                     <span id="profile_img_wrap"><img class="profile_img ${Board.user_id}_info"></span>
                     
                        <div id='userid'>
                            <a>${Board.user_id}</a>
                            <input type="hidden" value="${Board.id}" class="hidden_id">                          
                        </div>
                    </div>

                    <span id='main_img'><img src=${Board.img_url}></span>

                    <!-- icon 모음 -->
                    <div class='icon'>
                        <!-- 좋아요 / 댓글 / 디엠 -->
                        <div class='three'>
                            <img src='./img/heart.png' class='icon_img' id="dibs">
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
                    <div class="comtent_box">
                        <span><img src="./img/emoji.jpg" id="emoji"></span>
                        <input type="text" class="comments" placeholder="소통해요">
                        <input type="button" onclick="upload_comments(${log}, ${Board.id})">
                    </div>
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

// 댓글 업로드
function upload_comments(log, board_id){
    let user_id = log;

    console.log($('.comments').val())
    console.log(board_id);
    console.log(user_id);

}

$('#comments').keypress(e=>{
    alert("asd");
    console.log(e.target());
    // let ll = $($(e.target).parents('.section')).find('#hidden_id').val();
    // let dd = $($(e.target).parents('.section'));
    // console.log(dd);
    // console.log(ll);
})

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

