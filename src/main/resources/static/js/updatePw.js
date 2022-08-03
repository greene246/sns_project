// 새 비밀번호 체크
$('#pw_check').change(e=>{
    let newPw = $('#pw_new').val();
    let pw_ch = $('#pw_check').val();
    if(newPw !== pw_ch){
        $('#msg_error').show();

    }else{
        $('#msg_error').hide();
    }
})

// 이전 비밀번호 체크
$('#pw_past').change(e => {
    let pw_past = $('#pw_past').val();
    let user_pw = $('#user_pw').val();

    if(pw_past === user_pw){
        $('#msg_ok').show();
        $('#msg_err').hide();
    } else {
        $('#msg_err').show();
        $('#msg_ok').hide();
    }
})

// 비밀번호 업데이트
function updatePw(log) {
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {
        console.log(result);

    })

}