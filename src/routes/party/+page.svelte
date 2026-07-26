<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>After party · {site.name}</title></svelte:head>

<PageHero
	eyebrow="After party"
	title="Finish lines are just the opening act."
	lead="Hot food, cold beers, live music, bonfires, s'mores, expo energy, and a community hang that runs until 5 pm."
	image="/images/hero-crowd.webp"
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-10 lg:grid-cols-2">
		<div use:reveal>
			<h2 class="headline-lg">Bring a change of clothes.</h2>
			<p class="mt-5 text-ink/75">
				The after party is legendary because it is built for athletes who just suffered (joyfully) in
				the cold. Warm up. Eat. Dance a little. Collect your snowflake prize vibes. Cheer the kids race.
			</p>
			<ul class="mt-6 space-y-3 text-ink/75">
				<li>→ Live music sets through the afternoon</li>
				<li>→ Bonfires and s'mores</li>
				<li>→ Food vendors and your included hot meal</li>
				<li>→ Expo booths and community chaos (the good kind)</li>
			</ul>
		</div>
		<div class="overflow-hidden rounded-[1.5rem]" use:reveal={80}>
			<img src="/images/Screen_Shot_2024-02-06_at_8.10.52_PM.webp" alt="Festival crowd" class="h-full w-full object-cover" />
		</div>
	</div>
</section>

<section class="section-pad bg-ink">
	<div class="container-page flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between" use:reveal>
		<div>
			<p class="eyebrow">Included with your entry</p>
			<h2 class="headline-lg mt-3">The party is part of the product.</h2>
		</div>
		<a href={site.buyUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Register for race day</a>
	</div>
</section>

<FinalCta />
