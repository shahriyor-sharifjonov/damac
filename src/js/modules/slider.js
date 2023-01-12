import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

export function init() {
    new Swiper(".floor__swiper", {
        modules: [Navigation, EffectFade],
        slidesPerView: 1,
        slidesPerGroup: 1,
        createElements: true,
        preventClicks: true,
        autoHeight: false,
        preventClicksPropagation: true,
        noSwiping: true,
        grabCursor: true,
        noSwipingSelector: "button",
        slideToClickedSlide: false,
        focusableElements: "button",
        watchSlidesProgress: true,
        speed: 600,
        effect: "fade",
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".floor__next",
            prevEl: ".floor__prev",
        },
        breakpoints: {
            992: {
                // autoHeight: true,
            },
        },
    });
    
    new Swiper('.interior-swiper', {
        modules: [Pagination],
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

