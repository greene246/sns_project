let userId;

let _thumbnail;

let boardId;

function myPageUser(log){
    $.ajax({
        url : "/getInfo?log="+log,
        type : "POST"
    }).done(result => {

        userId = result.user_id;
        let user_name = result.name;
        let thumbnail = `<img class="_mainThumbnail" src=${result.thumbnail}>`;

        _thumbnail = `<img class="__thumbnail" src=${result.thumbnail}>`;

        myPageContents(log, userId);

        $('.user_id').append(userId);
        $('#user_id').val(userId);

        $('.name').append(user_name);
        $('.thumbnail').append(thumbnail);

        $('._user_id').append(userId);
        $('._thumbnail').append(_thumbnail);
    })
}

function myPageContents(log, userId){

    $.ajax({
        url: "/myContent/" + userId,
        type: "POST",
        async: false,
        contentType: "application/json",

        success: data => {

            data.forEach(e => {
                printContent(log, e);
            })
        },
        fail: function () {
            console.log("fail");
        },
        error: function () {
            console.log("error");
        }
    })
}

function printContent(log, Board) {
    let Content_img = Board.img_url;

    let html = `
        <div class="myImage">
<!--            <input type="image" src="img/delBtn.png" class="del_btn" onclick="deleteContent(${Board.id})">-->
            <input type="hidden" value="${Board.contents}" id="hidden_contents">
            <img class="imgSize" id="img_${Board.id}" onclick="detail_comments_pop('${Board.user_id}', 'img_${Board.id}', ${Board.id}, ${log})" src=${Content_img}>
        </div>
    `;
    $('.myPageContent').append(html);
}

function deleteBoardId(){
    let __boardId = $('#detail_board_id').val();

    deleteContent(__boardId);
}

function deleteContent(id){
    if(confirm("게시물을 삭제하시겠습니까?")){
        $.ajax({
            url: "/deleteMyContent/" + id,
            type: "POST",
            contentType: "application/json",

            success: function () {
                alert("삭제되었습니다.");
                location.reload();
            },
            fail: function () {
                alert("실패했습니다.");
            },
            error: function () {
                alert("오류떴습니다.");
            }
        })
    }

}
