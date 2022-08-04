let fileNo = 0;
let filesArr = new Array();

// 사진 클라우드에 업로드 후 data 받아와서 hidden에 넣어줌
function uploadImg(){
    let form = new FormData();
    form.append("image", filesArr[0]);
    let settings = {
        "url": "https://api.imgbb.com/1/upload?key=edba169056567b7c42f2872b96c425af",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form,
        sync: false,
        fail : error => {
            console.log("image upload fail");
        }
    };
    callUploadApi(settings);
}

function callUploadApi(settings){
    $.ajax(settings)
        .done(response => {
            let jx = JSON.parse(response);
            // jx.data.id의 값도 저장해야함 - 삭제 시 필요
            $('#img_url').val(jx.data.url);
            $('#del_url').val(jx.data.delete_url);

            let boardJson = {
                "url" : "/upload",
                "method" : "POST",
                "contentType" : "application/json",
                "data" : JSON.stringify({
                    "user_id" : $('#user_id').val(),
                    "img_url" : $('#img_url').val(),
                    "contents" : $('#contents').val(),
                    "public_scope" : $('#scope').val(),
                    "delete_url" : $('#del_url').val(),
                })
            };

            $.ajax(boardJson)
                .done(result => {
                    console.log(result);
                })
    })
        .fail(error =>{
            console.log(error);
        })
}

// 고른 사진 띄워주기
function setThumbnail(obj) {
    const maxFileCnt = 1; // 최대 첨부 가능 파일 개수
    let attFileCnt = $('.img_thumbnail').length;  // 기존 첨부된 파일 개수
    let remainCnt = maxFileCnt - attFileCnt;    // 첨부할 수 있는 남은 개수
    let curFileCnt = obj.files.length;

    // 개수 확인
    if(curFileCnt > remainCnt)
        alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.")
    else{
        for(const file of obj.files){
            // 파일 배열에 담기
            let reader = new FileReader();
            reader.onload = function(event) {

                // 띄우기
                let img = document.createElement("img");
                img.setAttribute("src", event.target.result);
                img.setAttribute("class", "img_thumbnail");
                img.setAttribute("id", "file_" + fileNo);
                $('#image_container').append(img);
                fileNo++;
                filesArr.push(file);
            };
            reader.readAsDataURL(file);
        }
    }
}
