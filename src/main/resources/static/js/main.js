// let list0 = getBoards(0);
function getBoards(scope) {
    let list;
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        sync: false,

        success: data => {
            data.forEach(e => {
                insertHtml(e);
                 getThumbnail(e.user_id);
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
                   <!--  <span id="contents"><img class="thum_img_target"></span>-->
                     
                    <!-- <span class="profile_img_wrap"><img class="thum_img_target"></span>-->
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
                            <img src='./img/heart.png' class='icon_img'>
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

function getThumbnail(userId) {
    $.ajax({
        url: "/getThumbnail?id=" + userId,
        type: "GET",
        sync: false,
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
