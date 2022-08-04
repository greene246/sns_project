
// 비밀번호 업데이트
function updatePw(log) {
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {
        console.log(result);
        let user_id = result.user_id;
        let user_pw = result.user_pw;
        let name = result.name;

        let html = `
            <form method="post">
                <input type="hidden" name="user_id" id="user_id" value=${user_id}>
                <input type="hidden" name="name" id="name" value=${name}>
                
                <div class="_pw">이전 비밀번호</div> <input type="password" name="pw_past" id="pw_past" required><br>
                    <span style="display: none" id="msg_err">비밀번호를 확인하세요</span>
                    <span style="display: none" id="msg_ok">비밀번호 일치</span>
                <div class="_pw">새 비밀번호</div> <input type="password" name="pw_new" id="pw_new" required><br>
                <div class="_pw">새 비밀번호 재확인</div> <input type="password" name="pw_check" id="pw_check" required><br>
                    <span style="display: none" id="msg_error">비밀번호가 일치하지 않습니다.</span>
                    <span style="display: none" id="msg_okay">비밀번호가 일치합니다.</span>
                    
                <div class="button">
                    <input type="button" name="update" value="수정" onclick="update(form)">
                </div>
            </form>
        `;

        $('.user_id').append(user_id);
        $('.update_userPw').append(html);
    })

}

function update(form){
    const requestData = {
        "user_id" : $('#user_id').val(),
        "name" : $('#name').val(),
        "pw_new" : $('#pw_new').val()
    }

    $.ajax({
        url: "/updatePw",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType : "application/json",

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
    })

}

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


