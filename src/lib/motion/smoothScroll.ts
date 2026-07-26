import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;

export function initSmoothScroll() {
	if (typeof window === 'undefined' || lenis) return lenis;

	gsap.registerPlugin(ScrollTrigger);

	lenis = new Lenis({
		duration: 1.15,
		smoothWheel: true,
		touchMultiplier: 1.1
	});

	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis?.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	return lenis;
}

export function destroySmoothScroll() {
	lenis?.destroy();
	lenis = null;
}

export { gsap, ScrollTrigger };
