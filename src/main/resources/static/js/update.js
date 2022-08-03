function updateCheck() {
    alert("수정 완료");
}

$('#pw_check').change(e=>{
    let newPw = $('#pw_new').val();
    let Pw_ch = $('#pw_check').val();
    if(newPw !== Pw_ch){
        $('#msg_error').show();

    }else{
        $('#msg_error').hide();
    }
})

$('.input[type=submit]').click(e => {
    let requestData = {
        "pw_new" : $("#pw_new").val(),
        "pw_check" : $("#pw_check").val()
    }
    $.ajax({
        url: "/checkPw",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        $('#msg_error').show();
    }).fail(error => {
        $('#msg_error').show();
    })
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