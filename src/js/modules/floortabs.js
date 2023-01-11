export function init() {
    if(document.querySelectorAll('.floor__tab-item')){
        const tabBtns = document.querySelectorAll('.floor__tab-item');
        const tabContents = document.querySelectorAll('.floor__content');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = btn.getAttribute('data-target');
                const el = document.querySelector(target)
                tabBtns.forEach(btn => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                tabContents.forEach(content => {
                    content.classList.remove('active')
                })
                el.classList.add('active')
            })
        })
    }
}