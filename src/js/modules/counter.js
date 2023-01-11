import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

function format_number(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function init() {
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
}