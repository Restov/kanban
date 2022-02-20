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

    $('.modal__btn').on('click', send);

}

function send() { // убери это потом пж)
    var name = $('#name').val();
    var date = $('#date').val();
    var color = $('#color').val();
    var disc = $('#disc').val();

    let $card = $(
        `<div class="column__item">
            <div class="item__inner">
                <div class="item__priority" style="background-color:${color}"></div>
                <div class="item__head">
                    <span class="item__title">${name}</span>
                    <span class="item__date">${date}</span>
                </div>
                <div class="item__content">
                    <span class="item__textContent">${disc}</span>
                </div>
            </div>
        </div>`);

    $.ajax({
        type: "POST",
        url: "/server/new-card.php",
        data: { name, date, color, disc },
        success: (response) => {

            if(response.match(/^[0-9]+$/) != null) {
                $(".column__content:first").prepend($card);
                $(".column__item:first").attr("data-id-event",response);
            } else {
                alert(response);
            }
        } ,
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });

}
