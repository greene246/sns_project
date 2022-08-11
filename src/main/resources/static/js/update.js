let user_id;
let thumbnail;
let name;
let email;

function getUpdateId(log){
    $.ajax({
        url: "/getInfo?log=" + log,
        type: "POST"
    }).done(result => {
        user_id = result.user_id;
        thumbnail = result.thumbnail;
        name = result.name;
        email = result.email;

        $('#user_id').attr('value', user_id);
        $('.name').attr('value',name);
        $('.email').attr('value',email);
        $('#preview').attr('value',thumbnail);
        $('#preview-image').attr('src',thumbnail);
    })
}

let check = false;

$('#input_img').change(e => {
    check = true;
})

// 사진 imgBB에 업로드
function uploadToCloud(formObj) {
    if (check) {
        let file = document.getElementById('input_img');
        let form = new FormData();
        form.append("image", file.files[0])

        let settings = {
            "url": "https://api.imgbb.com/1/upload?key=edba169056567b7c42f2872b96c425af",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };

        $.ajax(settings).done(function (response) {

            let jx = JSON.parse(response);
            $('#img_url').val(`${jx.data.url}`);
            $('#delete_url').val(`${jx.data.delete_url}`);

            // jx.data.id의 값도 저장해야함 - 삭제 시 필요
            //$('#write_form').submit();

            update(formObj);

        }).fail(error => {
            console.log('error')
        })
    } else {
        let thumbnail = $('#preview').val();

        $('#img_url').val(thumbnail);

        update(formObj);
    }
}

function update(formObj){
    const requestData = {
        "user_id" : $('#user_id').val(),
        "thumbnail" : $('#img_url').val(),
        "name" : $('.name').val(),
        "email" : $('.email').val()
    }

    $.ajax({
        url: "/update",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json",

        success: data => {
            console.log("success");
            alert("회원정보 수정이 완료되었습니다.");
            location.href="/myPage";
            // formObj.submit();
        },
        fail: function () {
            console.log("fail");
            alert("회원정보 수정 오류");
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