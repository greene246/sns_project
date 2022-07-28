function checkUser(){
    const requestData = {
        "id" : $("#userId").val(),
        "pw" : $("#userPw").val()
    }

    $.ajax({
        url : "/user",
        // method : "POST",
        type : "POST",
        data : JSON.stringify(requestData),
        contentType : "application/json"
    }).success(result =>{
        console.log(result);
    }).fail(error => {
        console.log(error.responseText);
    })
    document.getElementById('#login').submit();
}