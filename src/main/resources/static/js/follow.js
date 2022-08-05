let following = "melon1380";  //팔로우 누르는사람
let follower = "melon"; //팔로우 눌리는사람


$('#followBtn').on('click',function (){
   follow(true);
});
$('#unFollowBtn').on('click',function (){
    follow(false);
});




function follow(check) {
    if (check) {

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
        })
    }
}

function unfollow() {
    const data = {
        "following_id" : following,
        "follower_id" : follower

    }
    console.log(data);
    $.ajax({
        url: "/unFollowing",
        type: "POST",
        data : JSON.stringify(data),
        contentType : "application/json"
    }).done(r=>{
        console.log(r);
    })
}