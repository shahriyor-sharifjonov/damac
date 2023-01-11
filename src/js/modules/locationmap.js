export function init() {
    const locationBtn = document.querySelectorAll('.location__btn');
    locationBtn.forEach(el => {
    el.addEventListener('click', () => {
        locationBtn.forEach(btn => {
            btn.classList.remove('active');
        })
        document.querySelectorAll('.location__img').forEach((map) => {
            map.classList.remove("active");
        });
        el.classList.add('active');
        const target = el.getAttribute('data-target');
        document.querySelector(target).classList.add('active');
    })
    })
}