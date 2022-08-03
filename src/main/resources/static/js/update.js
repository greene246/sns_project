
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

/*$('#pw_past').change(e => {
    let requestData = {
        "user_id" : $("#user_id").val(),
        "user_pw" : $("#pw_past").val()
        // "user_pw" : $("#user_pw").val()
    }

    $.ajax({
        url: "/pastPw",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        $('#msg_err').hide();
        $('#msg_ok').show();
    }).fail(error => {
        $('#msg_err').show()
        $('#msg_ok').hide();
    })
})*/

/*$('.input[type=submit]').click(e => {
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
})*/