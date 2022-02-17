export function refresh_kanban() {
    let str;
    $.ajax({
        type: "GET",
        url: "/server/refresh.php",
        dataType: "text", //expect html to be returned
        success: function(response) {
            alert(response);
            str = response;
            alert(str);
        },
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}