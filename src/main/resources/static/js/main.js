function getBoards(scope) {

    $.ajax({
        url: "/search",
        type: "GET",
        data: {
            "a" : scope
        },
        contentType: "application/json"
    })
        .done(data => {

            let result = data;

            result.forEach(Board => {

                let html = `
                    <div class='section'>
                
                        <div class='profile_box'>
                        
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
            })
        })

}