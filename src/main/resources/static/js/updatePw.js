let user_id;
let user_pw;
let pw_check;

function getUserId(log) {
    $.ajax({
        url: "/getInfo?log=" + log,
        type: "POST"
    }).done(result => {

        user_id = result.user_id;
        user_pw = result.user_pw;

        $('#user_id').val(user_id);
    });
}

let check = false;

function _update() {
    if ($('#pw_check').val() == '' || $('#pw_past').val() !== user_pw || $('#pw_new').val() !== $('#pw_check').val()) {
        alert("비밀번호를 확인하세요");
    } else {
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
                location.href = "/myPage";

            },
            fail: function () {
                console.log("fail");
            },
            error: function () {
                console.log("error")
            }
        })/*.done(e => {
            location.reload();
        })*/
    }
}

$('#pw_past').change(e => {

    if ($('#pw_past').val() !== user_pw) {
        $('#msg_err').show();
        $('#msg_ok').hide();
    } else {
        $('#msg_ok').show();
        $('#msg_err').hide();
    }
})

function check_pw_val(){
    let pw_val = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사

    if (!pw_val.test($('#pw_new').val()) || !pw_val.test($('#pw_check').val())) {
        $('#msg_okay').hide();
        $('#msg_error').hide();
        $('#msg_error_pw').show();

        $('#pw_new').val('');
        $('#pw_check').val('');
        $('#pw_new').focus();
    }
    else {
        if ($('#pw_new').val() !== $('#pw_check').val()) {
            $('#msg_error_pw').hide();
            $('#msg_okay').hide();
            $('#msg_error').show();
        } else {
            $('#msg_error_pw').hide();
            $('#msg_error').hide();
            $('#msg_okay').show();
        }
    }
}
