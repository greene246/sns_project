let check = false;

// 사진 imgBB에 업로드

function uploadToCloud(formObj) {
    if (check) {
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
            formObj.submit();

        }).fail(error => {
            console.log(error)
        })
    }
    else{
        let thumbnail = $('#preview').val();

        $('#img_url').val(thumbnail);

        formObj.submit();
    }
}

// 고른 사진 띄워주기
function setThumbnail(event) {

    let reader = new FileReader();
    reader.onload = function (event) {
        let img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        $('#image_container').append(img);

    };
    reader.readAsDataURL(event.target.files[0]);

}

// 프로필 사진 바꾸기
const inputImage = document.getElementById("input_img");
inputImage.addEventListener("change", e => {
    readImage(e.target);
})

function readImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = e => {
            const previewImage = document.getElementById("preview-image");

            previewImage.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$('#input_img').on("change", e => {
    check = true;
})

// 사진 업로드
/*function uploadToCloud(formObj) {
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
        console.log(formObj);

        let jx = JSON.parse(response);
        $('#img_url').val(`"${jx.data.url}"`);
        $('#delete_url').val(`"${jx.data.delete_url}"`);

        // jx.data.id의 값도 저장해야함 - 삭제 시 필요
        //$('#write_form').submit();
        formObj.submit();

    }).fail(error =>{
        console.log(error)
    })
}*/
