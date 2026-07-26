<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { rulesHighlights, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Rules · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Rules"
	title="Stay safe. Share the road. Keep your bib."
	lead="OMW is timed, but it is a Rules of the Road endurance festival. Traffic laws always apply."
/>

<section class="section-pad paper-panel">
	<div class="container-page max-w-3xl space-y-4" use:reveal>
		{#each rulesHighlights as rule, i}
			<p class="rounded-2xl border border-ink/10 bg-snow px-5 py-4 text-ink/80">
				<span class="mr-3 font-mono text-xs text-ice-deep">{String(i + 1).padStart(2, '0')}</span>
				{rule}
			</p>
		{/each}
	</div>
</section>

<FinalCta />
