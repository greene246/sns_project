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

            let result = data;
            result.forEach(Board => {



            })
        })

}