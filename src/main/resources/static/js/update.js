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

// 프사, 이름, 이메일 업데이트
function updateUser(log){
    $.ajax({
        url : "/getInfo?log=" + log,
        type : "POST"
    }).done(result => {
        console.log(result);
        let user_id = result.user_id;

        let thumbnail = result.thumbnail;
        let user_name = result.name;
        let user_email = result.email;

        let html = `
            <form method="post">
                <input type="hidden" name="user_id" id="user_id" value=${user_id}>
            
                <div class="_img">프로필 사진</div><br>
                <div class="image-container">
                            
                            <input type="hidden" name="img_url" id="img_url">
                            <input type="hidden" name="preview" id="preview" value=${thumbnail}>
                            <img style="width: 150px;" id="preview-image" src=${thumbnail}><br>
                            <input type="file" id="input_img" onchange="show_img(event)">
                        </div>
                
                <div class="_name">이름</div>
                <input type="text" name="name" class="name" value="${user_name}" placeholder="이름" required><br>
                
                <div class="_email">이메일</div>
                <input type="email" name="email" class="email" value="${user_email}" placeholder="이메일" required><br>
                
                <div class="button">
                    <input type="button" name="update" value="수정" onclick="uploadToCloud(form)">
                </div>
                
            </form>
        `;

        $('.user_id').append(user_id);
        $('.update_user').append(html);
    })
}

let check = false;

// 사진 imgBB에 업로드
function uploadToCloud(formObj) {
    // if (check) {
        let file = document.getElementById('input_img');
        let form = new FormData();
        form.append("image", file.files[0])

        console.log("vvvvvvvvvvvvvvvvvv");

        let settings = {
            "url": "https://api.imgbb.com/1/upload?key=edba169056567b7c42f2872b96c425af",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };

        console.log("eeeeeeeeeeeee")

        $.ajax(settings).done(function (response) {
            console.log("fofofofofofo")
            console.log(formObj);

            let jx = JSON.parse(response);
            $('#img_url').val(`"${jx.data.url}"`);
            $('#delete_url').val(`"${jx.data.delete_url}"`);

            // jx.data.id의 값도 저장해야함 - 삭제 시 필요
            //$('#write_form').submit();

            update(formObj);

        }).fail(error => {
            console.log(error)
        })
    // }
    // else{
    //     let thumbnail = $('#preview').val();
    //
    //     $('#img_url').val(thumbnail);
    //
    //     formObj.submit();
    // }
}

// <input type="hidden" name="user_id" id="user_id" value=${user_id}>

function update(formObj){
    const requestData = {
        "user_id" : $('#user_id').val(),
        "img_url" : $('#img_url').val(),
        "name" : $('.name').val(),
        "email" : $('.email').val()
    }
    console.log(requestData);
    $.ajax({
        url: "/update",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json",

        success: data => {
            console.log("success");
            // formObj.submit();
        },
        fail: function () {
            console.log("fail");
        },
        error: function () {
            console.log("error")
        }
    })
}


// 프로필 사진 바꾸기
function show_img(){
    let reader = new FileReader();

    reader.onload = function (event) {
        let img = document.getElementById("preview-image");
        img.setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

}

$('#input_img').on("change", e => {
    check = true;
})