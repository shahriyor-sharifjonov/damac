import SmoothScroll from "smoothscroll-for-websites";

export function init() {
    SmoothScroll({
        animationTime: 1000,
        stepSize: 60,
        keyboardSupport: true,
        arrowScroll: 100,
        touchpadSupport: true,
    });
}