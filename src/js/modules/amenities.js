import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

export function init() {
    const galleryThumbs = new Swiper('.amenities__cbot', {
        spaceBetween: 12,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        // loop: true,
        freeMode: true,
        // loopedSlides: 5,
        slideToClickedSlide: true,
    });
    const galleryTop = new Swiper('.amenities__ctop', {
        modules: [Thumbs],
        spaceBetween: 12,
        // loop: true,
        grabCursor: true,
        autoHeight: true,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        thumbs: {
            swiper: galleryThumbs,
        },
    });
}