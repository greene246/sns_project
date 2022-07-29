

$('.user_id').change(e => {
    const requestData = {
        "user_id" : $('.user_id').val()
    }
    $.ajax({
        url: "/getUser",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        $('#msg_err').show();
        $('#msg_ok').hide();
    }).fail(error => {
        $('#msg_ok').show();
        $('#msg_err').hide();
    })
})