$('#user_id').change(e => {

    const requestData = {
        "user_id" : $('#user_id').val()
    }
    $.ajax({
        url: "/getUser",
        type: "POST",
        data : JSON.stringify(requestData),
        contentType: "application/json"
    }).success(result => {
        $('#msg_err').show();
        $('#msg_err').css("display", "block");0
        $('#msg_ok').hide();
    }).fail(error => {
        $('#msg_ok').show();
        $('#msg_ok').css("display", "block");
        $('#msg_err').hide();
    })
})

function getUser(log){
        $.ajax({
            url: "/getInfo?log="+log,
            type : "POST"
    }).done(result => {
            let user_id = result.user_id;
            let user_name = result.name;

            let innerid = "<a>" + user_id + "</a>"

            let innername = "<a>" + user_name + "</a>"
            $('.user_id').append(innerid);
            $('.name').append(innername);
        })

}


