let userId;

let _thumbnail;

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

function deleteContent(id){
    console.log(id);
    if(confirm("삭제하시겠슴둥?")){
        $.ajax({
            url: "/deleteMyContent/" + id,
            type: "POST",
            contentType: "application/json",

            success: function () {
                alert("삭제되었슴둥");
                location.reload();
            },
            fail: function () {
                alert("실패했습둥");
            },
            error: function () {
                alert("오류떴슴둥");
            }
        })
    }

}

function printContent(log, Board) {
    let Content_img = Board.img_url;
    console.log(Content_img);
    console.log('유저아이디 : ' + `${Board.user_id}`);

    let html = `
        <div class="myImage">
            <input type="button" value="삭제" class="del_btn" onclick="deleteContent(${Board.id})">
            <img class="imgSize" id="img_${Board.id}" onclick="detail_comments_pop('${Board.user_id}', 'img_${Board.id}', ${Board.id}, ${log}, '${Board.contents}')" src=${Content_img}>
        </div>
    `;
    $('.myPageContent').append(html);
}

