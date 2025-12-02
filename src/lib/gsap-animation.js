"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* -------------------------------------------
   Register GSAP Plugins only on Client
-------------------------------------------- */
if (typeof window !== "undefined" && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------
   Reusable Animation Functions
-------------------------------------------- */

export const animateHero = () => {
  gsap.context(() => {
    gsap.from(".hero-title", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2,
    });

    gsap.from(".hero-subtitle", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power4.out",
      delay: 0.3,
    });

    gsap.from(".hero-cta", {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.6,
    });
  });
};

export const animateSection = (selector) => {
  gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  });
};

export const animateCards = (selector) => {
  gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        markers: false,
      },
      duration: 0.8,
      y: 60,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });
  });
};

export const parallaxEffect = (selector, speed = 0.5) => {
  gsap.context(() => {
    gsap.to(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
      y: (i, el) => (1 - speed) * ScrollTrigger.maxScroll(window),
      ease: "none",
    });
  });
};

export const fadeInUp = (selector, delay = 0) => {
  gsap.context(() => {
    gsap.from(selector, {
      duration: 1,
      y: 60,
      opacity: 0,
      ease: "power4.out",
      delay: delay,
    });
  });
};

export const staggerFadeIn = (selector, staggerAmount = 0.1) => {
  gsap.context(() => {
    gsap.from(selector, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: staggerAmount,
      ease: "power3.out",
    });
  });
};
