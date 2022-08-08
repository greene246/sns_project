let following;  //팔로우 누르는사람
let follower; //팔로우 눌리는사람




function follow(log,user_id) {
    follower = user_id;
    console.log(following);
    console.log(follower);
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        console.log(result);
        following = result;

        const data = {
            "following_id": following,
            "follower_id": follower
        }

        console.log(data);
        $.ajax({
            url: "/following",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(r => {
            console.log(r);
            $('.followBtn').css("display", "none")
            $('.unFollowBtn').css("display", "block")

        })
    })
}

function unfollow(log, user_id) {
    follower = user_id;
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        console.log(result);
        following = result;

        const data = {
            "following_id": following,
            "follower_id": follower
        }
        console.log(data);
        $.ajax({
            url: "/unFollowing",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(r => {
            console.log(r);
            $('.followBtn').css("display", "block")
            $('.unFollowBtn').css("display", "none")

        })
    })
}

function checkFollow(log, user_id){
    follower = user_id;
    console.log("aaa"+following);
    console.log("ddd"+follower);
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        console.log("bbb"+result);
        following = result;

        const data = {
            "following_id": following,
            "follower_id": follower
        }
        console.log(data);
        $.ajax({
            url: "/followCheck",
            type : "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(result=>{
            console.log(result)
            if(result == false){
                $('.followBtn').css("display", "block")
                $('.unFollowBtn').css("display", "none")
            }
            else{
                $('.unFollowBtn').css("display", "block")
                $('.followBtn').css("display", "none")
            }
        })

    })
}