<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { spectatorSpots, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Spectators · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Spectators"
	title="Everybody is invited to the party."
	lead="Friends and family are welcome at Bohn Park. Bring layers, then pick a cheer spot on course."
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-5 md:grid-cols-2">
		{#each spectatorSpots as spot, i}
			<article class="rounded-[1.4rem] border border-ink/10 bg-snow p-6" use:reveal={i * 50}>
				<h2 class="font-display text-2xl tracking-tight">{spot.title}</h2>
				<p class="mt-3 text-ink/70">{spot.detail}</p>
			</article>
		{/each}
	</div>
</section>

<FinalCta />
