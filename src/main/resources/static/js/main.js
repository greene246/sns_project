// 파라미터면 기존 형식으로
// 2번째는 getbody형식으로
// Board값 가져오기
function getBoards(scope) {
    // let obj = {
    //     "a" : scope
    // }

    $.ajax({
        url: "/search",
        type: "GET",
        data: {
            "a" : scope
        },
        // data : JSON.stringify(obj),
        // dataType: "json",
        contentType: "application/json"
    })
        .done(data => {
             let result = data;

            result.forEach(Board => {

                 let html = `<div class="contents">${Board.user_id}</div>`;
                 console.log(html);
                  // $('.main').append(html);
                 $(".main2").append(html);
             })
         })
}
