function apply(form){
    const requestData = {
        "userId" : $('#userId').val(),
        "img" : $('#img').val(),
        "contents" : $('#contents').val(),
        "public_cnt" : 0
    };
    console.log(requestData)
    $.ajax({
        url : "/writeForm",
        type : "POST",
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {


    }).fail(error => {
        console.log(error)
    })
}