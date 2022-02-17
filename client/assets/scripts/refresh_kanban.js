function refresh_kanban() {

    $(document).ready(function () {
        $.ajax({
          //create an ajax request to display.php
          type: "GET",
          url: "refresh.php",
          dataType: "text", //expect html to be returned
          success: function (response) {
            // console.log(response);
            alert(response);
          },
        });
    });
}