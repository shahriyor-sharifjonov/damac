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
            if(button.classList.contains('take-content')){
                const price = button.parentElement.querySelector('.price').innerHTML;
                document.querySelectorAll('.floor-plan__from').forEach(el => {
                    el.innerHTML = 'Staring from AED '+ price
                })
                const image = button.parentElement.parentElement.querySelector('.floor__item-img img').getAttribute('src');
                document.querySelectorAll('.floor-plan__img').forEach(el => {
                    el.setAttribute('src',image)
                })
            } 
            const target = button.getAttribute('data-popup');
            const popup = document.querySelector(target);
            popup.classList.add('active');
            document.body.style.overflowY = 'hidden';
        }); 
    });

    popups.forEach(popup => {
        if(popup.querySelector('.popup__bg')){
            const bg = popup.querySelector('.popup__bg');
            if(bg.classList.contains('multiple')){
                function loop(){
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
        }
    })

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            close()
        })
    })
}