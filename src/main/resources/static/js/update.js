
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

function updateUser(log){
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {

        let user_id = result.user_id;
        let user_name = result.name;
        let user_email = result.email;
        let thumbnail = result.thumbnail;



        let html = ``;

    })
}