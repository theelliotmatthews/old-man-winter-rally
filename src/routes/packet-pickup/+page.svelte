<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { packetPickup, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Packet pickup · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Packet pickup"
	title="Skip the race-morning line."
	lead="Ship your packet or grab it in Denver or Boulder before Sunday."
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-5 md:grid-cols-3">
		{#each packetPickup as item, i}
			<article class="rounded-[1.4rem] border border-ink/10 bg-snow p-6" use:reveal={i * 60}>
				<p class="font-mono text-xs tracking-[0.12em] text-ice-deep uppercase">{item.when}</p>
				<h2 class="mt-3 font-display text-2xl tracking-tight">{item.where}</h2>
				<p class="mt-3 text-sm text-ink/70">{item.detail}</p>
			</article>
		{/each}
	</div>
</section>

<FinalCta />
