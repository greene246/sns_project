let user_id;

function myPageUser(log){
    $.ajax({
        url: "/getInfo?log="+log,
        type : "POST"
    }).done(result => {

        user_id = result.user_id;
        let user_name = result.name;
        let thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;

        myPageContents(user_id);

        $('.user_id').append(user_id);
        $('.name').append(user_name);
        $('.thumbnail').append(thumbnail);
    })
}

function myPageContents(user_id){

    $.ajax({
        url: "/myContent/" + user_id,
        type: "POST",
        async: false,
        contentType: "application/json",

        success: data => {

            data.forEach(e => {
                printContent(e);
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

function printContent(Board) {
    let thumbnail = Board.img_url;
    console.log(thumbnail);

    let html = `
        <div class="myImage"><img class="imgSize" src=${thumbnail}></div>
    `;
    $('.myPageContent').append(html);

}
