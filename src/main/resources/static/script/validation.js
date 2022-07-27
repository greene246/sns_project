$("#id").change(e =>{
    console.log($("#id").val());

    $.ajax({
        url : `/user?id=${$("#id").val()}`,
        method : "POST",
    }).done(result => {
        console.log(result);
        console.log(typeof result);
        if(result ===""){
            $("#msg_error").hide();
            $("#msg_ok").show();
        }
        else{
            $("#msg_error").show();
            $("#msg_ok").hide();
        }
    });

    // 2) @RequestBody
    const requestData = {
        "id" : $("#id").val(),
        "pw" : $("#password").val()
    }

    $.ajax({
        url : "/v1/search/user",
        // method : POST,
        type : "POST",
        data : JSON.stringify(requestData),
        contentType : "application/json"
    }).done(result => {
        console.log(result);
    })
}).fail(error => {
    console.log(error.responseText);
 })