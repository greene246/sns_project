$('#user_id').change(e => {

    const requestData = {
        "user_id" : $('#user_id').val()
    }

    $.ajax({
        url: "/getUser",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        $('#msg_err').show();
        $('#msg_err').css("display", "block");
        $('#msg_ok').hide();
    }).fail(error => {
        $('#msg_ok').show();
        $('#msg_ok').css("display", "block");
        $('#msg_err').hide();
    })
})

function getUser(log){
    $.ajax({
        url: "/getInfo?log="+log,
        type : "POST"
    }).done(result => {

        let user_id = result.user_id;
        let user_name = result.name;
        let thumbnail = `<img src=${result.thumbnail} style="width: 200px;">`;

        $('.user_id').append(user_id);
        $('.name').append(user_name);
        $('.thumbnail').append(thumbnail);
    })
}

function removeUser(log) {
    $.ajax({
        url: "/getInfo?log=" + log,
        type: "POST",
        async: false,
        contentType: "application/json"
    }).done(result => {
        let user_pw = result.user_pw;
        let input_pw = $('#user_pw').val();
        console.log(user_pw);
        console.log(input_pw);
        if (user_pw == input_pw) {
            if (confirm("정말로 탈퇴하시겠습니까?")) {
                const data = {
                    "id": log,
                    "user_pw": $('#user_pw').val()
                }
                $.ajax({
                    url: "removeUser",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json"
                }).success(result => {
                     location.reload();
                })
            } else {
                alert("회원탈퇴를 취소했습니다.")
            }
        } else {
            alert("회원정보를 확인하세요.")
        }
    })
}


