export function createjsPanel() {
    jsPanel.create({
        headerTitle: "Новая карточка",
        theme: 'dark',
        panelSize: {
            width: 400,
            height: 400
        },
        content: '<input type="text" id="name" /> <input type="date" id="date" /><input type="color" id="color" /><input type="text" id="disc" /><p><button class="modal__btn">Send</button></p> '
    });

    $('.modal__btn').on('click', send)
}

function send() {
    var name = $('#name').val();
    var date = $('#date').val();
    var color = $('#color').val();
    var disc = $('#disc').val();

    $.ajax({
        type: "POST",
        url: "/server/new-card.php",
        data: { name: name, date: date, color: color, disc: disc},
        success: (response) =>console.log(response),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}
