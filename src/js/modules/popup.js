const closeButtons = document.querySelectorAll('.popup-close');
const buttons = document.querySelectorAll('[data-popup]');
const popups = document.querySelectorAll('.popup');

function close() {
    popups.forEach(popup => {
        popup.classList.remove('active');
        document.body.style.overflowY = 'auto';
    })
}

const el = document.querySelector('body').getBoundingClientRect(); //234,66 235
console.log(el.height);

export function init() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-popup');
            const popup = document.querySelector(target);
            console.log(target);
            popup.classList.add('active');
            document.body.style.overflowY = 'hidden';
        }); 
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            close()
        })
    })
}