<script lang="ts">
	import { onMount } from 'svelte';
	import { site } from '$lib/data/content';
	import { gsap, ScrollTrigger, initSmoothScroll } from '$lib/motion/smoothScroll';

	let root: HTMLElement;

	onMount(() => {
		initSmoothScroll();
		const ctx = gsap.context(() => {
			gsap.from('[data-hero-line]', {
				yPercent: 110,
				opacity: 0,
				duration: 1.15,
				stagger: 0.08,
				ease: 'power4.out',
				delay: 0.15
			});
			gsap.from('[data-hero-sub]', {
				y: 24,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				delay: 0.55
			});
			gsap.to('[data-hero-media]', {
				yPercent: 12,
				ease: 'none',
				scrollTrigger: {
					trigger: root,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			});
		}, root);

		return () => {
			ctx.revert();
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<section bind:this={root} class="relative min-h-[100dvh] overflow-hidden grain">
	<div class="absolute inset-0" data-hero-media>
		<img
			src="/images/hero-rider.webp"
			alt="Winter gravel riders at Old Man Winter Rally"
			class="h-full w-full object-cover"
		/>
		<div
			class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,24,32,0.55)_0%,rgba(6,24,32,0.35)_40%,rgba(6,24,32,0.92)_100%)]"
		></div>
	</div>

	<div class="relative container-page flex min-h-[100dvh] flex-col justify-end pb-16 pt-36">
		<div class="max-w-5xl">
			<p class="eyebrow mb-5" data-hero-sub>{site.edition} · Lyons, Colorado</p>
			<h1 class="headline-xl text-paper">
				<span class="block overflow-hidden"><span class="inline-block" data-hero-line>Old Man</span></span>
				<span class="block overflow-hidden"
					><span class="inline-block text-ice" data-hero-line>Winter Rally</span></span
				>
			</h1>
			<p class="mt-6 max-w-xl text-lg text-paper/80" data-hero-sub>
				Colorado's must-do winter endurance festival. Gravel bike courses, trail runs, a hot meal,
				cold beer, and a legendary after party. {site.date}.
			</p>

			<div class="mt-6 flex flex-wrap gap-2" data-hero-sub>
				<span class="chip">{site.dateShort}</span>
				<span class="chip">{site.venue}</span>
				<span class="chip">{site.city}</span>
			</div>

			<div class="mt-9 flex flex-wrap gap-3" data-hero-sub>
				<a href={site.buyUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary"
					>Register from $75</a
				>
				<a href="/register" class="btn btn-secondary">Get race updates</a>
			</div>
		</div>
	</div>
</section>
