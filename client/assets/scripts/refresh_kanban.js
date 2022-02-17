export function refreshKanban() {
    let request = $.ajax({
        type: "GET",
        url: "/server/refresh.php",
        dataType: "text", //expect html to be returned
        success: function(response) {
            console.log(typeof response); // string
            // console.log(response);
        },
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
    request.done(function(msg) {
        // alert(msg);
        console.log(JSON.stringify(msg));
        // console.log(request);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}