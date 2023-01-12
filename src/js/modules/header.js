import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function init() {
  let bodyOverlay = document.createElement("div");
  bodyOverlay.classList.add("body-overlay");
  document.body.append(bodyOverlay);

  const tlMenu = gsap.timeline({ paused: true });

  tlMenu
    .to(".header__menu", { yPercent: 100, opacity: 1 })
    .to(".body-overlay", { visibility: "visible", autoAlpha: 1 }, 0)
    .to(".header__button-line_2 ", { width: 0 }, 0)
    .to(".btn-toggler__tx_close", { yPercent: 100 }, 0)
    .to(".header__button-line_1", { y: 8 }, 0)
    .to(".header__button-line_3", { y: -8 }, 0)
    .to(".header__button-line_1", { rotate: 45 }, 0.5)
    .to(".header__button-line_3", { rotate: -45 }, 0.5)
    .from(".header__menu-item", { autoAlpha: 0, stagger: 0.05 }, 0.6);

  const btnToggler = document.querySelector(".btn-toggler");
  btnToggler.addEventListener("click", toggleMenu);
  document.querySelector(".body-overlay").addEventListener("click", toggleMenu);
  function toggleMenu() {
    tlMenu.reversed()
      ? tlMenu.timeScale(1).play()
      : tlMenu.timeScale(2).reverse();
    btnToggler.classList.toggle("open");
  }
  tlMenu.reverse();

  function getSamePageAnchor(link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false;
    }

    return link.hash;
  }
  function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
      if (e) e.preventDefault();
      gsap.to(window, { duration: 0, scrollTo: elem, ease: "power2" });
    }
  }
  document.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", (e) => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  });
  scrollToHash(window.location.hash);

  document.querySelectorAll(".header__menu-link").forEach((a) => {
    a.addEventListener("click", (e) => {
      toggleMenu();
    });
  });
}
