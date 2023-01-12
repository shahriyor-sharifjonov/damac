import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function init() {
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
    });

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
        tl.from(".about__title span", 1, {y: 120, ease: "power1.out", delay: 1, skewY: 17, stagger: {amount: 0}}, "-=1.1");
        tl.from(".about__desc",  {y: 50, ease: "power1.out", opacity: 0});
        tl.from(".about__btn",  {x: -50, ease: "power1.out", opacity: 0});
    })
      
    let sections = gsap.utils.toArray(".amenities__item");
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
            onLeave: () => {
                    const nextSection = document.querySelector('.floor');
                    const tl = gsap.timeline();
                    tl.to(window, 0, { scrollTo: {y: nextSection.offsetTop}, ease: "circ.easeOut" });
            }
        },
    });

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
            onLeave: () => {
                const nextSection = document.querySelector('.footer');
                const tl = gsap.timeline()
                // tl.to(window, 0.1, { scrollTo: {y: nextSection.offsetTop}});
            }
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
            onLeave: () => {
                const nextSection = document.querySelector('.location');
                const tl = gsap.timeline()
                tl.to(window, 0.1, { scrollTo: {y: nextSection.offsetTop}});
            }
        },
    });
}