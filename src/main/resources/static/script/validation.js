function checkUser(form){
    const requestData = {
        "id" : $("#userId").val(),
        "pw" : $("#userPw").val()
    }

    $.ajax({
        url: "/check",
        // method : "POST",
        type : "POST",
        data : JSON.stringify(requestData),
        contentType : "application/json"
    }).success(result =>{
        console.log(result);
    }).fail(error => {
        console.log(error.responseText);
    })

    form.submit();

}