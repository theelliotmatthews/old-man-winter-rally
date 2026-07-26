import { browser } from '$app/environment';

type LenisInstance = {
	raf: (time: number) => void;
	on: (event: string, cb: (...args: unknown[]) => void) => void;
	destroy: () => void;
};

type GsapModule = typeof import('gsap');
type ScrollTriggerModule = typeof import('gsap/ScrollTrigger');

let lenis: LenisInstance | null = null;
let gsapRef: GsapModule['gsap'] | null = null;
let scrollTriggerRef: ScrollTriggerModule['ScrollTrigger'] | null = null;
let tickerFn: ((time: number) => void) | null = null;

export async function initSmoothScroll() {
	if (!browser || lenis) return lenis;

	const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
		import('lenis'),
		import('gsap'),
		import('gsap/ScrollTrigger')
	]);

	gsapRef = gsap;
	scrollTriggerRef = ScrollTrigger;
	gsap.registerPlugin(ScrollTrigger);

	lenis = new Lenis({
		duration: 1.15,
		smoothWheel: true,
		touchMultiplier: 1.1
	}) as unknown as LenisInstance;

	lenis.on('scroll', ScrollTrigger.update);
	tickerFn = (time: number) => {
		lenis?.raf(time * 1000);
	};
	gsap.ticker.add(tickerFn);
	gsap.ticker.lagSmoothing(0);

	return lenis;
}

export function destroySmoothScroll() {
	if (gsapRef && tickerFn) {
		gsapRef.ticker.remove(tickerFn);
	}
	lenis?.destroy();
	lenis = null;
	tickerFn = null;
}

export async function getMotion() {
	if (!browser) {
		return null;
	}
	await initSmoothScroll();
	if (!gsapRef || !scrollTriggerRef) return null;
	return { gsap: gsapRef, ScrollTrigger: scrollTriggerRef };
}
