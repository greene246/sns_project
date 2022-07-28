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

// 팝업창
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()-60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}
showPopup = function() {
    $(".pop1").show();
    $(".pop1").center();
}

$(".subsBtn").on('click', e=>{
    $(".black").css("display","block");
});


$(".cancel").on('click', e=>{
    $(".pop1").css("display","none");
    $(".black").css("display","none");
    $(".account").css("display","none");
    $(".card").prop("checked","true");
    $(".deposit").prop("checked","true");
});


$(".basic").on('click', e=>{
    $(".pay").html("5500");
    $(".ticketName").html("베이직 정기권");
});
$(".standard").on('click', e=>{
    $(".pay").html("7700");
    $(".ticketName").html("스탠다드 정기권");
});
$(".premium").on('click', e=>{
    $(".pay").html("9900");
    $(".ticketName").html("프리미엄 정기권");
});

$("#deposit").on('click', e=>{
    $(".account").css("display","block");
});
$("#card").on('click', e=>{
    $(".card").prop("checked","true");
});
$("#deposit").on('click', e=>{
    $(".deposit").prop("checked","true");
});