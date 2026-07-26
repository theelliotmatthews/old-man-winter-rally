<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import WeatherPromise from '$lib/components/WeatherPromise.svelte';
	import FeaturedVideo from '$lib/components/FeaturedVideo.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
</script>

<svelte:head><title>Weather promise · {site.name}</title></svelte:head>

<PageHero
	eyebrow="History / Weather"
	title="We plan for winter. Because it is winter."
	lead="Cold, wind, snow, sun, mud. Old Man Winter is designed around Front Range February, not against it."
/>

<WeatherPromise />
<FeaturedVideo />
<FinalCta />
