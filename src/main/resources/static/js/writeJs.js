function apply(form){
    $.ajax({
        url : "https://cloudresourcemanager.googleapis.com/v3/projects/snsproject-357606",
        type : "GET",
    }).success(result => {
        console.log(result)

    }).fail(error => {
        console.log(error)
    })
}