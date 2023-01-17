import imagesLoaded from 'imagesloaded'
let loaderLogo = document.querySelector("#preloader__loaded-logo");

const images = document.querySelectorAll("img");
const loader = document.querySelector("#preloader__num");
const updateProgress = (instance) => {
    const prc = Math.round((instance.progressedCount * 100) / images.length);
    loaderLogo.style.width = `${prc}%`
    loader.innerHTML = prc + "%"
}

const showDemo = () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
}

setTimeout(() => imagesLoaded(images).on("progress", updateProgress).on("always", showDemo), 500)

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

