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

function printContent(log, Board) {
    let Content_img = Board.img_url;
    console.log(Content_img);

    let html = `
        <div class="myImage"><img class="imgSize" id="img_${Board.id}" onclick="detail_comments_pop('img_${Board.id}', ${Board.id}, ${log})" src=${Content_img}></div>
    `;
    $('.myPageContent').append(html);

}