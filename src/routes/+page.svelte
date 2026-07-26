<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import TrustMarquee from '$lib/components/TrustMarquee.svelte';
	import FeaturedVideo from '$lib/components/FeaturedVideo.svelte';
	import DayFlow from '$lib/components/DayFlow.svelte';
	import CourseChooser from '$lib/components/CourseChooser.svelte';
	import BenefitGrid from '$lib/components/BenefitGrid.svelte';
	import WeatherPromise from '$lib/components/WeatherPromise.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import LocationBlock from '$lib/components/LocationBlock.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
</script>

<svelte:head>
	<title>{site.name} · {site.dateShort} · Lyons, CO</title>
</svelte:head>

<Hero />
<TrustMarquee />
<FeaturedVideo />
<DayFlow />
<CourseChooser />
<BenefitGrid />
<WeatherPromise />
<Gallery />
<FaqAccordion />
<LocationBlock />
<FinalCta />
