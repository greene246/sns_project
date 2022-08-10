let user_id;
let user_pw;

function getUserId(log) {
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {

        user_id = result.user_id;
        user_pw = result.user_pw;

        $('#user_id').val(user_id);
    });
}

let check = false;

function _update(){
    if($('#pw_past').val() !== user_pw || $('#pw_new').val() !== $('#pw_check').val()){
        alert("비밀버노를 화긴하세요");
    }
    else{
        const requestData = {
            "user_id": $('#user_id').val(),
            "user_pw": $('#pw_check').val()
        }

        $.ajax({
            url: "/updatePw",
            type: "POST",
            data: JSON.stringify(requestData),
            contentType: "application/json",

            success: data => {
                console.log("success");
                alert("비밀번호 수정이 완료되었습니다.");
                location.href="/myPage";
                // form.submit();
            },
            fail: function () {
                console.log("fail");
                alert("비밀번호 수정 오류");
            },
            error: function () {
                console.log("error")
            }
        }).done(e => {
            location.reload();
        })
    }
}

$('#pw_past').change(e => {

    if ($('#pw_past').val() !== user_pw) {
        $('#msg_err').show();
        $('#msg_ok').hide();
    } else{
        $('#msg_ok').show();
        $('#msg_err').hide();
    }
})

$('#pw_check').change(e => {

    if($('#pw_new').val() !== $('#pw_check').val()){
        $('#msg_error').show();
        $('#msg_okay').hide();
    } else{
        $('#msg_error').hide();
        $('#msg_okay').show();
    }
})
