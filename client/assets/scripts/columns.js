export function createColumn() {
    let id = $('.columns').length;

    let data = {
        title: 'Пустое поле',
        id
    };

    sendNewColumn(data);
}

function sendNewColumn(data) {
    $.ajax({
        url: '../../../server/new-pole.php',
        type: 'POST',
        data,
        success: () => renderKanban(),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}
