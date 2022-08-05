let user_id;
let name;
let thumbnail;

function userPageUser(log){
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {

        user_id = result.user_id;
        name = result.name;
        thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;

        userPageContents(user_id);

        $('.user_id').append(user_id);
        $('.name').append(name);
        $('.thumbnail').append(thumbnail);
    })
}

function userPageContents(user_id){

    $.ajax({
        url : "/myContent/" + user_id,
        type : "POST",
        async : false,
        contentType : "application/json",

        success : data => {
            data.forEach(e => {
                printContent(e);
            })
        },
        fail : function () {
            console.log("fail");
        },
        error : function () {
            console.log("error");
        }
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