export function checkValidation() {
    let incorrect = null;

    $('.modal__input input, .modal__input textarea').each(function() {
        this.value = this.value.trim();
    });

    $('.modal__input input').each(function() {
        this.classList.remove('correct', 'incorrect');

        if (checkInput(this)) {
            this.classList.add('correct');
        } else {
            this.classList.add('incorrect')
            incorrect = this;
        }
    });

    if (incorrect) {
        return false;
    }

    return true;
}

function checkInput(input) {
    const classInput = input.classList;
    if (classInput[0] === 'input__date') {
        return checkDate(input);
    }

    return checkText(input);
}

function checkDate(input) {
    let currentDate = new Date();
    let completionDate = new Date(`${input.value} 23:59:59`);

    if (!completionDate.getTime()) {
        return false;
    }

    if (completionDate < currentDate) {
        return false;
    }

    return true;
}

function checkText(input) {
    if (input.value === '') {
        return false;
    }

    return true;
}
