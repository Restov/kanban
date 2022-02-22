import { refreshKanban } from "./refresh_kanban.js";

export function createjsPanel() {
    jsPanel.create({
        headerTitle: "Новая карточка",
        theme: 'dark',
        panelSize: {
            width: 400,
            height: 400
        },
        content: '<input type="text" id="name" value="Карточка"/> <input type="date" id="date" value="2022-01-01" /><input type="color" id="color" /><input type="text" id="disc" value = "Описание" /><p><button class="modal__btn">Send</button></p> '
    });

    $('.modal__btn').on('click', send);
}

function send() {
    let name = $('#name').val();
    let date = $('#date').val();
    let color = $('#color').val();
    let disc = $('#disc').val();

    $.ajax({
        type: "POST",
        url: "/server/new-card.php",
        data: { name, date, color, disc },
        success: () => {
            refreshKanban();
        },
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}
