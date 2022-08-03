$('.user_id').change(e => {
    const requestData = {
        "user_id" : $('.user_id').val()
    }
    console.log(requestData)
    $.ajax({
        url: "/getUser",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        console.log(result + "##");
        $('#msg_err').show();
        $('#msg_ok').hide();
    }).fail(error => {
        console.log(error.responseText +"**");
        $('#msg_ok').show();
        $('#msg_err').hide();
    })
})