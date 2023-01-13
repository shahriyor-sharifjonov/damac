import gsap from 'gsap'

const preloader = document.querySelector('#preloader');
const loaderImgs = document.querySelectorAll('.loader-img')
const body = document.body;

const tlpre = gsap.timeline();

tlpre.to(preloader, { duration: 0.5, });
tlpre.to('#loader-title', { opacity: 1, duration: 0.2 });

loaderImgs.forEach(item => {

    tlpre.to(item, {
        className: "loader-img active",
        duration: 1,
        ease: "power3.ease",
    });

    tlpre.set(item, {
        className: "loader-img leave",
        delay: 0.5,
        duration: 1,
        ease: "power3.ease",
    })


    if (window.innerWidth >= 460) {

    }

})
tlpre.to('#loader-title', { xPercent: -190, scale: 80, duration: 0.2, });
tlpre.to(preloader, { backgroundColor: "#fff", opacity: 0, delay: 0.1, });
tlpre.to(preloader, { yPercent: -100, delay: 0.2, });
tlpre.to(body, { className: 'loaded' });


window.addEventListener('load', function (event) {
    // document.body.classList.add('loaded');
});




// import * as smoothscroll from "./modules/smoothscroll.js";
import * as locationmap from "./modules/locationmap.js";
import * as functions from "./modules/functions.js";
import * as animation from "./modules/animation.js";
import * as floortabs from "./modules/floortabs.js";
import * as accordion from "./modules/accordion.js";
import * as counter from "./modules/counter.js";
import * as cursor from "./modules/cursor.js";
import * as slider from "./modules/slider.js";
import * as popup from "./modules/popup.js";
import * as header from "./modules/header.js";
import * as amenities from "./modules/amenities.js";
import * as floorpopup from "./modules/floorpopup.js";
 
// smoothscroll.init();
functions.isWebp();
locationmap.init();
floortabs.init();
accordion.init();
animation.init();
counter.init(); 
cursor.init();
slider.init();
popup.init();
functions.showmore();
amenities.init();
floorpopup.init();
header.init();

