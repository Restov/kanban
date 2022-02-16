export function createjsPanel() {
    var nc = jsPanel.create({
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
    var pole_id = 0;
    var pos = 0;

    $.ajax({
        type: "POST",
        url: "/server/new-card.php",
        data: { name: name, date: date, color: color, disc: disc, poleid: pole_id, pos: pos },
        success: (response) =>console.log(response),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}