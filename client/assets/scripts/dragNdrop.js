export function initDraggable() {
    let nextElement = null;
    let activeElement = null;
    let currentColumn = null;

    $('.column').each(function(index) {
        const $events = $(this).find('.column__item');

        $events.each((index, event) => {
            event.draggable = true;
        });

        $(this).on('dragstart', (event) => {
            setTimeout(() => event.target.classList.add('selected'), 0);
            activeElement = event.target;
            currentColumn = this;
            nextElement = null
        });

        $(this).on('dragend', (event) => {
            event.target.classList.remove('selected');
        })

        $(this).on('dragover', (event) => {
            event.preventDefault();

            const currentElement = event.target;

            const isMoveable = activeElement !== currentElement.parentNode &&
                    currentElement.parentNode.classList.contains(`column__item`);

            if (!isMoveable) {
                return;
            }

            nextElement = (currentElement.parentNode === activeElement.nextElementSibling) ?
                        currentElement.parentNode.nextElementSibling : currentElement.parentNode;

            $(this).find('.column__content')[0].insertBefore(activeElement, nextElement);

            sendPositionsAfterDrag(activeElement, this, index);
        });

        $(this).on('drop', () => {
            if (this !== currentColumn && !nextElement) {
                $(this).find('.column__content')[0].append(activeElement);

                sendPositionsAfterDrag(activeElement, this, index);
            }
        });
    });
};

function getPositionsIntoColumn(currentColumn, idColumn) {
    let positions = '';

    const $events = $(currentColumn).find('.column__item');
    $events.each((index, event) => {
        let idEvent = event.getAttribute('data-id-event');

        positions += `${idColumn}:${idEvent} `;
    })

    return positions.trim();
}

function initRecvDataAfterDrag(currentColumn, idEvent, idColumn) {
    let positions = getPositionsIntoColumn(currentColumn, idColumn);

    const data = {
        idEvent,
        idColumn,
        positions
    };

    return data;
}

function sendPositionsAfterDrag(activeElement, currentColumn, index) {
    let idEvent = activeElement.getAttribute('data-id-event');
    let data = initRecvDataAfterDrag(currentColumn, idEvent, index);

    $.ajax({
        type: 'POST',
        url: '/server/update-pos.php',
        data,
        success: () => console.log('Positions have been updated.'),
        error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    })
}
