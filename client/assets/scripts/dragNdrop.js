export function initDraggable() {
    let nextElement = null;
    let activeElement = null;
    let currentList = null;

    $('.column').each(function() {
        const $events = $(this).find('.column__item');

        $events.each((index, event) => {
            event.draggable = true;
        });

        $(this).on('dragstart', (event) => {
            setTimeout(() => event.target.classList.add('selected'), 0);
            activeElement = event.target;
            currentList = this;
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
        });

        $(this).on('drop', () => {
            if (this !== currentList && !nextElement) {
                return $(this).find('.column__content')[0].append(activeElement);
            }

            $(this).find('.column__content')[0].insertBefore(activeElement, nextElement);
        });
    });
};

function sendPositionAfterDrag() {

}
