import { createColumn } from "./columns.js";
import { refreshKanban } from "./refresh_kanban.js";

$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: '/server/createTables.php'
    });

    refreshKanban();
});
$('.add__columns').on('click', createColumn);
