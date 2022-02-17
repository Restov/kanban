import { refreshKanban } from "./refresh_kanban.js";

export function createColumn() {
    let id = $('.columns').length;

    let data = {
        title: 'Пустое поле',
        id // зачем айди тут бтв? в бд это автоинкремент
    };

    sendNewColumn(data);
}

function sendNewColumn(data) {
    $.ajax({
        type: 'POST',
        url: '/server/new-pole.php',
        data,
        success: () => refreshKanban(),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}