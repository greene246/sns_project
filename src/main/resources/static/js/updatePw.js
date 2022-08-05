let user_id;
let user_pw;

function getUserId(log) {
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {
        console.log(result);

        user_id = result.user_id;
        user_pw = result.user_pw;

        $('#user_id').val(user_id);
    });
}

// 비밀번호 업데이트
/*function updatePw(log) {
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {
        console.log(result);

        let user_id = result.user_id;
        let user_pw = result.user_pw;

        let html = `
            <form method="post">
                <input type="hidden" name="user_id" id="user_id" value=${user_id}>
                <input type="hidden" name="user_pw" id="user_pw" value=${user_pw}>
                
                <div class="_pw">이전 비밀번호</div> <input type="password" name="pw_past" id="pw_past" required><br>
                    <span style="display: none" id="msg_err">비밀번호를 확인하세요</span>
                    <span style="display: none" id="msg_ok">비밀번호 일치</span>
                <div class="_pw">새 비밀번호</div> <input type="password" name="pw_new" id="pw_new" required><br>
                <div class="_pw">새 비밀번호 재확인</div> <input type="password" name="pw_check" id="pw_check" required><br>
                    <span style="display: none" id="msg_error">비밀번호가 일치하지 않습니다.</span>
                    <span style="display: none" id="msg_okay">비밀번호가 일치합니다.</span>
                    
                <div class="button">
                    <input type="button" name="update" value="수정" onclick="update()">
                </div>
            </form>
        `;

        $('.user_id').append(user_id);
        $('.update_userPw').append(html);
    })

}*/

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

    console.log("target " + $('#pw_past').val());
    console.log("target22 : " + user_pw)

    if ($('#pw_past').val() !== user_pw) {
        console.log("1");

        $('#msg_err').show();
        $('#msg_ok').hide();
    } else{
        console.log("2");

        $('#msg_ok').show();
        $('#msg_err').hide();
    }
})

$('#pw_check').change(e => {

    console.log("pw_new : " + $('#pw_new').val());
    console.log("pw_check : " + $('#pw_check').val());

    if($('#pw_new').val() !== $('#pw_check').val()){
        $('#msg_error').show();
        $('#msg_okay').hide();
    } else{
        $('#msg_error').hide();
        $('#msg_okay').show();
    }
})

// 이전 비밀번호 체크
/*$('#pw_past').keypress(e=>{
    console.log("3");

    let pw_past = $('#pw_past').val();
    let user_pw = $('#user_pw').val();

    if(pw_past === user_pw){
        console.log("1");
        $('#msg_ok').show();
        $('#msg_err').hide();
    } else {
        console.log("2 ");
        $('#msg_err').show();
        $('#msg_ok').hide();
    }
})*/

// 새 비밀번호 체크
/*$('#pw_check').change(e=>{
    let newPw = $('#pw_new').val();
    let pw_ch = $('#pw_check').val();
    if(newPw !== pw_ch){
        $('#msg_error').show();

    }else{
        $('#msg_error').hide();
    }
})*/
