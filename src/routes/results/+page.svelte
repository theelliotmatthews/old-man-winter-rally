<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { resultsLinks, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Results & photos · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Results / Photos"
	title="Relive the mud and the medals."
	lead="Timing by RaceRite. Photo galleries from Eddie Clark and friends across recent editions."
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4" use:reveal>
		{#each resultsLinks as link}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-2xl border border-ink/10 bg-snow p-5 transition hover:border-ice-deep"
			>
				<p class="font-mono text-xs tracking-[0.14em] text-muted uppercase">{link.year}</p>
				<p class="mt-2 font-display text-2xl tracking-tight">{link.label}</p>
			</a>
		{/each}
	</div>
	<p class="container-page mt-6 text-sm text-ink/60" use:reveal>
		Timing questions: <a class="underline" href="mailto:{site.timingEmail}">{site.timingEmail}</a>
	</p>
</section>

<Gallery />
<FinalCta />
