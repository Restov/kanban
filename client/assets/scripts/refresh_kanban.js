import { initDraggable } from "./dragNdrop.js";
import { createjsPanel } from "./new_card.js";

export function refreshKanban() {
    $.ajax({
        type: "GET",
        url: "/server/refresh.php",
        dataType: "text",
        success: (response) => {
            let data = JSON.parse(response);

            if (!data) {
                return;
            }

            $('.columns__wrapper').html('');

            renderColumns(data)

            let btn = getInnerBtnAdd();

            $('.column:first').find('.column__wrapper').prepend(btn);

            $('.add__card').on('click', createjsPanel);
            initDraggable();
        },
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}

function renderColumns(data) {
    data.forEach((element, index, arr) => {
        let item = arr.find((element) => parseFloat(element['pos_pole']) === index);
        let itemTitle = item['name_pole'];
        let itemCards = item['cards'];

        let column = getInnerColumn(itemTitle);

        $('.columns__wrapper').append(column);

        renderCards(itemCards);
    })
}

function getInnerColumn(title) {
    return `<div class="column">
    <div class="column__head">
        <span class="column__title">
            ${title}
        </span>
        <button class="column__edit">
            <img src="assets/img/edit.svg" alt="edit">
        </button>
    </div>
    <div class="column__wrapper">
        <div class="column__content"></div>
    </div>
</div>`;
}

function getInnerBtnAdd() {
    return `<div class="column__newCard">
    <button class='add__card'>
        <svg class="add__image" width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule='evenodd' d="M8.11153 1.58956L8.11334 5.45924C8.11335 5.47564 8.1123 5.4918 8.11027 5.50764C8.11244 5.52395 8.11357 5.5406 8.11358 5.5575L8.11442 7.35827L8.86326 7.35862L8.86056 1.58991C8.86046 1.38259 8.69293 1.21506 8.48539 1.21522C8.27889 1.21486 8.11117 1.38258 8.11153 1.58956ZM9.61251 7.35897L9.60981 1.59027C9.60952 0.96898 9.10601 0.465467 8.48504 0.46597C7.86495 0.464884 7.36119 0.968639 7.36228 1.58969L7.36409 5.45889C7.3641 5.4758 7.36522 5.49244 7.3674 5.50875C7.36536 5.52459 7.36432 5.54075 7.36433 5.55715L7.36517 7.35751L1.60436 7.35481C0.983789 7.35372 0.480034 7.85748 0.48112 8.47853C0.482205 9.09891 0.985347 9.60205 1.60541 9.60234L7.36622 9.60505L7.36892 15.3564C7.36794 15.4211 7.37652 15.5202 7.40429 15.6367C7.51983 16.1214 7.87244 16.4755 8.48393 16.4754C9.09998 16.4689 9.44999 16.1197 9.57471 15.643C9.60464 15.5286 9.61557 15.4313 9.61642 15.3622L9.61428 10.7132C9.61418 10.5063 9.44637 10.3385 9.23947 10.3384C9.03257 10.3383 8.86492 10.5059 8.86502 10.7128L8.8672 15.3571C8.86707 15.3648 8.86272 15.4035 8.84984 15.4527C8.80295 15.632 8.71097 15.7237 8.49164 15.7261C8.26103 15.7262 8.17514 15.6399 8.13311 15.4636C8.12134 15.4142 8.11795 15.375 8.11813 15.3623L8.11476 8.10752L8.86361 8.10787L8.86409 9.13855C8.86413 9.20822 8.88318 9.27346 8.91633 9.32936C8.95924 9.48912 9.10508 9.6068 9.27834 9.60688L15.3795 9.60975C16.0007 9.61004 16.5036 9.10718 16.5033 8.48597C16.5022 7.86511 15.9991 7.36197 15.379 7.36168L9.61251 7.35897ZM9.61286 8.10823L9.61321 8.85778L15.3792 8.86049C15.5866 8.86059 15.7542 8.69303 15.7541 8.4861C15.7537 8.27893 15.5858 8.11103 15.3794 8.11093L9.61286 8.10823ZM7.36552 8.10717L7.36587 8.8558L1.60506 8.85309C1.39864 8.85299 1.23074 8.68509 1.23037 8.47792C1.23001 8.27142 1.39773 8.1037 1.60423 8.10406L7.01001 8.1066C7.01583 8.10687 7.02168 8.10701 7.02757 8.10701L7.36552 8.10717Z"/>
        </svg>
        <span class="add__cardText"> ?????????? ???????????????? </span>
    </button>
</div>`;
}

function renderCards(cards) {
    if (!cards.length) {
        return;
    }

    cards.forEach((element, index, arr) => {
        let item = arr.find((element) => parseFloat(element['num_pos']) === index);

        let card = getInnerCard(item['id'], item['color_sob'], item['name'], item['date_create'], item['opisanie'])

        $('.column:last').find('.column__content').append(card);
    });
}

function getInnerCard(id, color, name, date, disc) {
    return `<div class="column__item" data-id-event=${id}>
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
</div>`;
}
