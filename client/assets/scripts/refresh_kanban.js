export function refreshKanban() {
    $.ajax({
        type: "GET",
        url: "/server/refresh.php",
        dataType: "text",
        success: (response) =>
            console.log(response),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}
