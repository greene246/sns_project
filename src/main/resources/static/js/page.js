let userId;
let name;
let thumbnail;

function a(user_id){
    $.ajax({
        url : "/getUserId?user_id=" + user_id,
        type : "POST"
    }).done(result => {

        console.log(result);

        userId = result.user_id;
        name = result.name;
        thumbnail = `<img src=${result.thumbnail} style="width: 180px;">`;


    })


}