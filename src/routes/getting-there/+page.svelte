<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import LocationBlock from '$lib/components/LocationBlock.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { gettingThere, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Getting there · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Getting there"
	title="Plan the logistics so race morning feels calm."
	lead={`${gettingThere.venue} · ${gettingThere.address}`}
/>

<LocationBlock />

<section class="section-pad bg-ink">
	<div class="container-page" use:reveal>
		<h2 class="headline-lg">Pro tips</h2>
		<div class="mt-8 grid gap-4 md:grid-cols-2">
			{#each gettingThere.tips as tip}
				<p class="rounded-2xl border border-paper/10 bg-ink-soft p-5 text-paper/80">{tip}</p>
			{/each}
		</div>
	</div>
</section>

<FinalCta />
