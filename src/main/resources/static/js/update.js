
function updateCheck() {
    alert("수정 완료");
}

$('#pw_check').change(e=>{
    let newPw = $('#pw_new').val();
    let pw_ch = $('#pw_check').val();
    if(newPw !== pw_ch){
        $('#msg_error').show();

    }else{
        $('#msg_error').hide();
    }
})

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




function deleteBoard(){
    // 이거 data 안에 값들 수정하셈
    let boardJson = {
        "url" : "/delete",
        "method" : "DELETE",
        "contentType" : "application/json",
        "data" : JSON.stringify({
            "user_id" : $('#user_id').val(),
            "img_url" : $('#img_url').val(),
            "contents" : $('#contents').val(),
        })
    };
    $.ajax(boardJson)
        .done(result => {

        })
}
})