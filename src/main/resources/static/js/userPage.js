let userId;
let name;
let thumbnail;

let log; // userLog
let _id // myLog

function userPageUser(id, user_id) {
    console.log('user_id: ' + user_id);

    $.ajax({
        url: "/getUserId?user_id=" + user_id,
        type: "POST"
    }).done(result => {
        console.log(result);

        userId = result.user_id;
        name = result.name;
        thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;

        log = result.id;
        _id = id;

        if(id === log){
            location.href = '/myPage';
        }
        else {
            userPageContents(_id, userId);

            $('.user_id').append(userId);
            $('.name').append(name);
            $('.thumbnail').append(thumbnail);

            $('.id').append(log);
        }
    })
}

function userPageContents(id, userId) {

    $.ajax({
        url: "/myContent/" + userId,
        type: "POST",
        async: false,
        contentType: "application/json",
    }).done(data => {
        data.forEach(e => {
            printContent(_id, e);
        })
    })
}

function printContent(id, Board) {
    let Content_img = Board.img_url;
    console.log('이미지' + Content_img);

    let html = `
        <div class="userImage"><img class="imgSize" onclick="detail_img_pop('img_${Board.id}', ${Board.id}, ${id})" src=${Content_img}></div>
    `;
    $('.userPageContent').append(html);

}