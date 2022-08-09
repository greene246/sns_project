let following;  //팔로우 누르는사람
let follower; //팔로우 눌리는사람




function follow(log,user_id) {
    follower = user_id;
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
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
            $('.followBtn').css("display", "none")
            $('.unFollowBtn').css("display", "block")
            followCount(log, user_id);
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
            $('.followBtn').css("display", "block")
            $('.unFollowBtn').css("display", "none")
            followCount(log, user_id);
        })
    })
}

function checkFollow(log, user_id) {
    follower = user_id;
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        following = result;

        const data = {
            "following_id": following,
            "follower_id": follower
        }
        $.ajax({
            url: "/followCheck",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(result => {
            if (result == false) {
                $('.followBtn').css("display", "block")
                $('.unFollowBtn').css("display", "none")
            } else {
                $('.unFollowBtn').css("display", "block")
                $('.followBtn').css("display", "none")
            }
        })

    })


}

// 상대방 팔로워 카운트
function followCount(log, user_id) {
    follower = user_id;
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        following = result;

        const data = {
            "following_id": following,
            "follower_id": follower
        }
        console.log("data : "+data)
        $.ajax({
            url: "/followCount",
            type: "POST",

            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(result => {

            let follower = result.follower.length;
            let following = result.following.length;

            $('.followCnt').empty();
            $('.followingCnt').empty();
            $('.followCnt').append(follower);
            $('.followingCnt').append(following);
        })
    })
}
// 내 팔로워 카운트
function myFollowCnt(log) {
    $.ajax({
        url: "/getUserIdfl?log=" + log,
        type: "POST",
        data: JSON.stringify(log),
        contentType: "application/json"
    }).done(result => {
        following = result

        const data = {
            "following_id": following,
            "follower_id": following
        }
        $.ajax({
            url: "/myFollowCount",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
        }).done(result =>{
            let follower = result.follower.length;
            let following = result.following.length;

            $('.followCnt').empty();
            $('.followingCnt').empty();
            $('.followCnt').append(follower);
            $('.followingCnt').append(following);
        })
    })
}
// log = 아이디 뽑아서 코멘트 가서 개수 출력
// 내 게시물 개수
function CommentCount(user_id){

    $.ajax({
        url: "/CommentCount/" + user_id,
        type: "POST",
        async: false,
        contentType: "application/json",

        success: data => {
            $('.boardCnt').append(data);
        },
        fail: function () {
            console.log("fail");
        },
        error: function () {
            console.log("error");
        }
    })

}

function myCommentCount(log){

    $.ajax({
        url: "/myCommentCount/" + log,
        type: "POST",
        async: false,
        contentType: "application/json",

        success: data => {
            $('.boardCnt').append(data);
        },
        fail: function () {
            console.log("fail");
        },
        error: function () {
            console.log("error");
        }
    })

}