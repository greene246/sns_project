// $("#pw_past").change(e => {
//     const requestData = {
//         "password": $("#pw_past").val()
//     }
//
//     $.ajax({
//         url: "/pastPw",
//         type: "POST",
//         data: JSON.stringify(requestData),
//         contentType: "application/json"
//     }).fail(error => {
//         $('#msg_err').show();
//     })
// })

function updateCheck() {
    alert("수정 완료");
}

$('.input[type=submit]').click(e => {
    let requestData = {
        "user_id" : $("#user_id").val(),
        "pw_past" : $("#pw_past").val()
    }
    $.ajax({
        url: "/pastPw",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: "application/json"
    }).fail(error => {
        $('#msg_err').show();
    })
})


// $('.button input[type=submit]').click(e=>{
//
//
//     let user = {
//         "name" : $('#name').val(),
//         "phone" : $('#phone').val()
//     }
//
//     $.ajax({
//         url : "/v1/users/find/id",
//         method : "post" ,
//
//         data : JSON.stringify(user),
//         contentType : "application/json"
//
//     }).done(result => {
//         $('.userHelp_result_result').empty();
//         if (result != null) {
//             $('.userHelp_result_result').append(
//                 `<div class="result"> 찾으시는 아이디는` + result + `입니다.</div>`
//             );
//         } else {
//             $('.userHelp_result_result').append(
//                 `<div class="result"> 아이디가 존재하지 않습니다.</div>`
//             );
//             // }
//
//
//         }
//     })
//
// });