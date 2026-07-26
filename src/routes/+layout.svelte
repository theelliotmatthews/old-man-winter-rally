<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import StickyBuyBar from '$lib/components/StickyBuyBar.svelte';
	import MetaPixel from '$lib/components/MetaPixel.svelte';
	import { destroySmoothScroll, initSmoothScroll } from '$lib/motion/smoothScroll';
	import { site } from '$lib/data/content';

	let { children } = $props();

	onMount(() => {
		void initSmoothScroll();
		return () => destroySmoothScroll();
	});
</script>

<svelte:head>
	<meta
		name="description"
		content="Old Man Winter Bike Rally & Run in Lyons, CO. Gravel bike courses, trail runs, hot meal, cold beer, and a legendary after party. {site.date}."
	/>
	<meta property="og:title" content="{site.name} · {site.dateShort}" />
	<meta
		property="og:description"
		content="Colorado winter endurance festival for riders and runners of all levels."
	/>
	<meta property="og:image" content="/images/hero-rider.webp" />
	<link rel="canonical" href="https://www.oldmanwinterrally.com/" />
</svelte:head>

<MetaPixel />
<div class="fixed inset-x-0 top-0 z-50">
	<AnnouncementBar />
	<Nav />
</div>
<main>
	{@render children()}
</main>
<Footer />
<StickyBuyBar />
