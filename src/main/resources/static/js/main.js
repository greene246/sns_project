// let list0 = getBoards(0);
let $thumb;
function getBoards(scope) {
    let list;
    $.ajax({
        url: "/search/" + scope,
        type: "GET",
        sync: false,
        // data: {
        //     "a" : scope
        // },
        // contentType: "application/json",
        success: data => {
            data.forEach(e => {
                insertHtml(e);
                getThumbnail(e.user_id);
            })

            $thumb = $('#thumb_img');
            console.log($thumb);
        },
        fail: function () {
            console.log("fail")
        },
        error: function () {
            console.log("error")
        }
    })
    return list;
}

function insertHtml(Board, thum) {
    // let thum = getThumbnail(Board.id)

    // .done(data => {
    //      let result = data;

    // board.forEach(Board => {

    let html = `
                <div class='section'>

                    <div class='profile_box'>
                     <span id="thumb_img"><img class="thum_img_target"></span>
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
    //     })
    // })
}

function getThumbnail(userId) {
    let temp = "";
    $.ajax({
        url: "/getThumbnail?id=nayeon",
        type: "GET",
        sync: false,
        contentType: "application/json",
        success: data => {
            // temp = data;

            $('.thum_img_target').prop('src', data.replace(/"/gi,""));
            console.log("src : " + $('.thum_img_target').prop('src'));
            console.log("data : " + data);
        },
        fail: function () {
            console.log("fail")
        },
        error: function () {
            console.log("error")
        }
    }).done(result => {
        temp = result;
    })
    console.log("temp : " + temp)
    return temp;
}

// function getThumbnail() {
//     let temp = "";
//
//     let userId;
//     let $thums = $('');
//
//
//
//     $.ajax({
//         url: "/getThumbnail?id="+userId,
//         type: "GET",
//         sync: false,
//         contentType: "application/json",
//         success: function (data) {
//             temp = data;
//         },
//         fail: function () {
//             console.log("fail")
//         },
//         error: function () {
//             console.log("error")
//         }
//     })
//     console.log("ss" + temp)
//     // return temp;
// }
