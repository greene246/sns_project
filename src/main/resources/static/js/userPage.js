let userId;
let name;
let thumbnail;

function userPageUser(user_id) {
    console.log('user_id: ' + user_id);

    $.ajax({
        url: "/getUserId?user_id=" + user_id,
        type: "POST"
    }).done(result => {
        console.log(result);

        userId = result.user_id;
        name = result.name;
        thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;

        userPageContents(userId);

        $('.user_id').append(userId);
        $('.name').append(name);
        $('.thumbnail').append(thumbnail);
    })
}

function userPageContents(userId) {

    $.ajax({
        url: "/myContent/" + userId,
        type: "POST",
        async: false,
        contentType: "application/json",
        //
        // success : data => {
        //     data.forEach(e => {
        //         printContent(e);
        //     })
        // },
        // fail : function () {
        //     console.log("fail");
        // },
        // error : function () {
        //     console.log("error");
        // }
    }).done(data => {
        data.forEach(e => {
            printContent(e);
        })
    })
}

function printContent(Board) {
    let Content_img = Board.img_url;
    console.log(Content_img);

    let html = `
        <div class="userImage"><img class="imgSize" src=${Content_img}></div>
    `;
    $('.userPageContent').append(html);

}