
// Board값 가져오기
function getBoards(scope) {
    $.ajax({
        url: "/search",
        type: "GET",
        data: {
            "a" : scope
        },
        contentType: "application/json"
    })
        .done(data => {
             let result = data.document;

            result.forEach(Board => {

                 let html = `<div class="contents">${Board.getUser_id()}</div>`;
                 console.log(result.val());
                  // $('.main').append(html);
                 $(".main2").append(html);
             })
         })
}
