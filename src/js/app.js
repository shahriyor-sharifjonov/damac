import * as functions from "./modules/functions.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import $ from 'jquery'
// import SmoothScroll from "smoothscroll-for-websites";
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

functions.isWebp();
gsap.registerPlugin(ScrollTrigger);
// SmoothScroll({
//   animationTime: 1000,
//   stepSize: 60,
//   keyboardSupport: true,
//   arrowScroll: 100,
//   touchpadSupport: true,
// });

const swiper = new Swiper();

function format_number(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.querySelectorAll('.amenities__item').forEach(el => {
  const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // enter
      el.classList.add('visible');
      return
    }
    // leave
    el.classList.remove('visible');
  }, {
    root: null,
    threshold: 0.7,
  })
  observer.observe(el);
})


const n = document.querySelectorAll(".count");
n.forEach((el) => {
  let value = { val: parseInt(el.getAttribute("data-number")) };
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 90%",
      end: "30% 50%",
      markers: false,
    },
  });
  tl.from(value, {
    duration: 3,
    ease: "circ.out",
    val: 0,
    roundProps: "val",
    onUpdate: function () {
      el.innerText = format_number(value.val);
    },
  });
});

// !tabs start
const tabs = () => {
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
tabs()

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

// !cursor start
function lerp(start, end, amount) {
  return (1-amount)*start+amount*end
}
const cursor = document.createElement('div');
cursor.className = 'cursor';

const cursorF = document.createElement('div');
cursorF.className = 'cursor-f';
let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;
let size = 8;
let sizeF = 36;
let followSpeed = .16;

document.querySelector('.fixed').appendChild(cursor);
document.querySelector('.fixed').appendChild(cursorF);

if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  cursorF.style.display = 'none';
}

cursor.style.setProperty('--size', size+'px');
cursorF.style.setProperty('--size', sizeF+'px');

window.addEventListener('mousemove', function(e) {
  pageX = e.clientX;
  pageY = e.clientY;
  cursor.style.left = e.clientX-size/2+'px';
  cursor.style.top = e.clientY-size/2+'px';
});

function loop() {
  cursorX = lerp(cursorX, pageX, followSpeed);
  cursorY = lerp(cursorY, pageY, followSpeed);
  cursorF.style.top = cursorY - sizeF/2 + 'px';
  cursorF.style.left = cursorX - sizeF/2 + 'px';
  requestAnimationFrame(loop);
}

loop();

let startY;
let endY;
let clicked = false;

function mousedown(e) {
  gsap.to(cursor, {scale: 4.5});
  gsap.to(cursorF, {scale: .4});
  clicked = true;
  startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
}

function mouseup(e) {
  gsap.to(cursor, {scale: 1});
  gsap.to(cursorF, {scale: 1});

  endY = e.clientY || endY;
  if (clicked && startY && Math.abs(startY - endY) >= 40) {
    clicked = false;
    startY = null;
    endY = null;
  }
}
document.querySelectorAll('.btn:not(disabled)').forEach(el => {
    el.addEventListener('mouseover', mousedown)
    el.addEventListener('mouseleave', mouseup)
});
document.querySelectorAll('.hover').forEach(el => {
    el.addEventListener('mouseover', mousedown)
    el.addEventListener('mouseleave', mouseup)
});
window.onload = function() {
    document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
        el.addEventListener('mouseover', mousedown)
        el.addEventListener('mouseleave', mouseup)
    });
}
document.querySelectorAll('.floor__tab-item').forEach(el => {
  el.addEventListener('mouseover', mousedown)
  el.addEventListener('mouseleave', mouseup)
});
document.querySelectorAll('.gotoblock').forEach(el => {
  el.addEventListener('mouseover', mousedown)
  el.addEventListener('mouseleave', mouseup)
});
window.addEventListener('mousedown', mousedown, false);
window.addEventListener('touchstart', mousedown, false);
window.addEventListener('touchmove', function(e) {
  if (clicked) {
    endY = e.touches[0].clientY || e.targetTouches[0].clientY;
  }
}, false);
window.addEventListener('touchend', mouseup, false);
window.addEventListener('mouseup', mouseup, false);
// !cursor end

gsap.utils.toArray(".about").forEach(el => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      scrub: false, 
      onEnter: () => {
        document.querySelector('.about__bg').classList.add('visible');
      }
    }, 
    defaults: {ease: "none"} 
  });
  tl.from(".about__title span", 1, {y: 120, ease: "power1.out", delay: 1, skewY: 17, stagger: {amount: 0}}, "-=1.1")
  tl.from(".about__desc",  {y: 50, ease: "power1.out", opacity: 0})
  tl.from(".about__btn",  {x: -50, ease: "power1.out", opacity: 0})
})

let sections = gsap.utils.toArray(".amenities__item");
let sectionsImg = gsap.utils.toArray(".amenities__item-img");
let sections2 = gsap.utils.toArray(".brochure__item");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".amenities__body",
    pin: true,
    scrub: 1,
    snap: 0,
    markers: false,
    end: () =>
      "+=" + document.querySelector(".amenities__wrapper").offsetWidth,
  },
})
gsap.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".brochure__body",
    pin: true,
    scrub: 1,
    snap: 0,
    end: () =>
      "+=" + document.querySelector(".brochure__wrapper").offsetWidth,
  },
});
gsap.to(".interior__wrapper", {
  xPercent: -100 + (window.innerWidth / 50),
  ease: "none",
  scrollTrigger: {
    trigger: ".interior",
    scrub: 1,
    start: () => "+=" + document.querySelector(".interior__wrapper").offsetTop,
    end: "bottom bottom",
  },
});
$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

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