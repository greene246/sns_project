function fileChange() {
    let file = document.getElementById('input_img');
    let form = new FormData();
    form.append("image", file.files[0])

    var settings = {
        "url": "https://api.imgbb.com/1/upload?key=a6c50820ce079959efb888758af89ab0",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };


    $.ajax(settings).done(function (response) {
        console.log(response);
        let jx = JSON.parse(response);
        console.log(jx.data.url);
    })
}

$('#input_img').on("change", e =>{
    $('#sample_img').attr("src", $('#input_img').val())
    console.log($('#input_img').val())
})

function setThumbnail(event) {
    let reader = new FileReader();

    reader.onload = function(event) {
        let img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        $('#image_container').append(img);
    };

    reader.readAsDataURL(event.target.files[0]);
}