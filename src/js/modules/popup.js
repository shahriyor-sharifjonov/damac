const closeButtons = document.querySelectorAll('.popup-close');
const buttons = document.querySelectorAll('[data-popup]');
const popups = document.querySelectorAll('.popup');

function close() {
    popups.forEach(popup => {
        popup.classList.remove('active');
        document.body.style.overflowY = 'auto';
    })
}

export function init() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-popup');
            const popup = document.querySelector(target);
            popup.classList.add('active');
            document.body.style.overflowY = 'hidden';
        }); 
    });

    popups.forEach(popup => {
        const bg = popup.querySelector('.popup__bg');
        if(bg.classList.contains('multiple')){
            console.log('multiple detected');
            function loop(){
                console.log('starting loop function');
                const img = popup.querySelector('.popup__bg-img.active');
                const firstImg = popup.querySelector('.popup__bg-img.first');
                setTimeout(() => {
                    img.classList.remove('active');
                    if(!img.classList.contains('last')){
                        img.nextElementSibling.classList.add('active');
                    }else{
                        firstImg.classList.add('active');
                    }
                    loop()
                }, 2000);
            }
            loop();
        }
    })

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            close()
        })
    })
}