// 팝업창
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()-60) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

    return this;
}
$(".subsBtn").on('click', e=>{
    $(".black").css("display","block");
});

$(".cancel").on('click', e=>{
    $(".pop1").css("display","none");
    $(".black").css("display","none");

});
//팝업창을 보여준다.
showPopup = function() {
    $(".pop1").show();
    $(".pop1").center();
}
//팝업창에 여백클릭스 cancel
cancel1 = function() {
    $(".pop1").css("display","none");
    $(".black").css("display","none");
}
$(document).ready(function(){

    $('.box').each(function(){
        var content = $(this).children('.content');
        var content_txt = content.text();
        var content_txt_short = content_txt.substring(0,100)+"...";
        var btn_more = $('<a href="javascript:void(0)" class="more">더보기</a>');

        $(this).append(btn_more);

        if(content_txt.length >= 100){
            content.html(content_txt_short)

        }else{
            btn_more.hide()
        }

        btn_more.click(toggle_content);
        // 아래 bind가 안 되는 이유는??
        // btn_more.bind('click',toggle_content);

        function toggle_content(){
            if($(this).hasClass('short')){
                // 접기 상태
                $(this).html('더보기');
                content.html(content_txt_short)
                $(this).removeClass('short');
            }else{
                // 더보기 상태
                $(this).html('접기');
                content.html(content_txt);
                $(this).addClass('short');

            }
        }
    });
});

////////////////////////
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