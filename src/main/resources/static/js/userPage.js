let user_id;
let name;
let thumbnail;

function userPageUser(userId) {
    console.log('userId: ' + userId);
    $.ajax({
        url: "/getUserId?userId='" + userId+"'",
        type: "POST"
    }).done(result => {
        console.log(result);

        location.href='/userPage?ppp=' + result;

        user_id = result.user_id;
        name = result.name;
        thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;

        userPageContents(user_id);

        $('.user_id').append(user_id);
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
        location.href="/userPage";

    })
}

function printContent(Board) {
    let Content_img = Board.img_url;
    console.log(Content_img);

    let html = `
        <div class="userImage"><img class="imgSize" src=${Content_img}></div>
    `;
    $('userPageContent').append(html);

}