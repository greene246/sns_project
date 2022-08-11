let userId;
let name;
let thumbnail;

let _thumbnail;

let log; // userLog
let _id // myLog

function userPageUser(id, user_id ,my_id) {
    $.ajax({
        url: "/getUserId?user_id=" + user_id,
        type: "POST"
    }).done(result => {
        userId = result.user_id;
        name = result.name;
        thumbnail = `<img class="_mainThumbnail" src=${result.thumbnail}>`;

        _thumbnail = `<img class="__thumbnail" src=${result.thumbnail}>`;

        log = result.id;
        _id = id;

        if(id === log){
            location.href = '/myPage';
        }
        else {
            userPageContents(_id, userId);

            $('.user_id').append(userId);
            $('#user_id').val(my_id);
            $('.name').append(name);
            $('.thumbnail').append(thumbnail);

            $('._user_id').append(userId);
            $('._thumbnail').append(_thumbnail);

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

    if(Board.public_scope != 2){
        let html = `
        <div class="userImage">
            <input type="hidden" id="hidden_contents" value="${Board.contents}">
            <img class="imgSize" id="img_${Board.id}" onclick="detail_comments_pop('${Board.user_id}', 'img_${Board.id}', ${Board.id}, ${id})" src=${Content_img}>
        </div>
    `;
        $('.userPageContent').append(html);
    }

}