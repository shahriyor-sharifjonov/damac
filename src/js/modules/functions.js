export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}


export function showmore() {
    if(document.querySelector('.showmore')){
        const buttons = document.querySelectorAll('.showmore');
        buttons.forEach(button => {
            let more = false
            button.addEventListener('click', () => {
                more = !more
                const target = button.getAttribute('data-target')
                const el = document.querySelector(target);
                el.classList.toggle('more')
                if(more){
                    button.innerHTML = 'Hide'
                }else{
                    button.innerHTML = 'View More'
                }
            })
        })
    }
}