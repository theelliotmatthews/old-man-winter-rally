<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site, trainingBlurb } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Training · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Community training"
	title="Free rides and runs all winter."
	lead={trainingBlurb}
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-8 lg:grid-cols-2" use:reveal>
		<div>
			<h2 class="font-display text-3xl tracking-tight">What shows up each year</h2>
			<ul class="mt-5 space-y-3 text-ink/75">
				<li>→ Cold weather clinics with local shops</li>
				<li>→ Gravel group rides at multiple paces</li>
				<li>→ Night runs and shoes-and-brews socials</li>
				<li>→ Zwift / virtual makeups when storms hit</li>
			</ul>
		</div>
		<div class="rounded-[1.5rem] bg-ink p-7 text-paper">
			<p class="eyebrow">Stay looped in</p>
			<p class="mt-3 text-paper/75">
				Training calendars shift with weather and partners. Join the updates list so you do not miss
				RSVPs, routes, and shop discounts for registrants.
			</p>
			<a href="/register" class="btn btn-primary mt-6">Get training alerts</a>
		</div>
	</div>
</section>

<FinalCta />
