<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { cancelPlans, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Cancellation plans · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Cancellation plans"
	title="Register with a clear backup plan."
	lead="Weather insurance, FanShield, and transparent refunds if gathering limits force changes."
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-5 md:grid-cols-2">
		{#each cancelPlans as plan, i}
			<article class="rounded-[1.4rem] border border-ink/10 bg-snow p-6" use:reveal={i * 50}>
				<h2 class="font-display text-2xl tracking-tight">{plan.title}</h2>
				<p class="mt-3 text-ink/70">{plan.detail}</p>
			</article>
		{/each}
	</div>
</section>

<FinalCta />
