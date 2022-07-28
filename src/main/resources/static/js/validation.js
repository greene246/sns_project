$("#password").change(e => {
    const requestData = {
        "password": $("#password").val()
    }

    $.ajax({
        url: "/userPw",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).fail(error => {
        $('#msg_err').show();
    })
})