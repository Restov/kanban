import { refreshKanban } from "./refresh_kanban.js";
import { checkValidation } from "./validation.js";

let modal = null;

export function createjsPanel() {
    if (modal) {
        return;
    }

    modal = jsPanel.create({
        headerTitle: "",
        headerControls: {
            maximize: 'remove',
            smallify: 'remove'
        },
        resizeit: {
            disable: true
        },
        theme: '#FFF',
        panelSize: {
            width: 400,
            height: 'auto'
        },
        content: `<div class="modal__inner">
        <div class="modal__input">
            <span class="input__title">
                Наименование
            </span>
            <div class="input__edit">
                <button class="button__edit">
                    <svg class="edit__image" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5042 0C15.33 0 16 0.634771 16 1.4172V13.5862C16 13.8063 15.9464 14.0227 15.8425 14.221L14.5405 16.6843C14.4247 16.9069 14.1926 17.0115 13.9678 16.999H0.498601C0.223231 16.999 0 16.7875 0 16.5266C0 16.2657 0.223231 16.0542 0.498601 16.0542H13.1365L12.1679 14.2195C12.0649 14.0229 12.0112 13.8065 12.0112 13.5872V1.4172C12.0112 0.634771 12.6812 0 13.507 0H14.5042ZM14.0051 15.5876L14.3015 16.1491C14.2181 16.0895 14.1142 16.0542 14.0017 16.0542H13.7584L14.0051 15.5876ZM14.9918 13.6867H13.0196C13.0283 13.7254 13.0421 13.7629 13.0605 13.7982L14.0052 15.5875L14.9502 13.7995C14.969 13.7635 14.983 13.7257 14.9918 13.6867ZM15.0029 12.7419H13.0085V1.41722C13.0085 1.15659 13.232 0.944824 13.5071 0.944824H14.5043C14.7794 0.944824 15.0029 1.15659 15.0029 1.41722V12.7419Z"/>
                    </svg>
                    <label class="title__edit">Редактировать</label>
                </button>
            </div>
            <input id="name" type="text" class="input__name">
        </div>
        <div class="modal__input">
            <span class="input__title">
                Дата создания
            </span>
            <input id="date" type="date" class="input__date">
        </div>
        <div class="modal__color">
            <span class="color__title">
                Выберите цвет:
            </span>
            <input id="color" type="color" class="input__color">
        </div>
        <div class="modal__input">
            <span class="input__title">
                Описание
            </span>
            <textarea id="disc" class="input__description" id="#"></textarea>
        </div>
        <button class="btn__next">Далее</button>
    </div>`
    });

    $('.btn__next').on('click', send);
}

function send() {
    if (!checkValidation()) {
        return alert('Не все поля заполнены верно!');
    }

    let name = $('#name').val();
    let date = $('#date').val();
    let color = $('#color').val();
    let disc = $('#disc').val();

    $.ajax({
        type: "POST",
        url: "/server/new-card.php",
        data: { name, date, color, disc },
        success: () => {
            modal.close();
            refreshKanban();
        },
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
}

$(document).on('jspanelclosed', () => modal = null);
