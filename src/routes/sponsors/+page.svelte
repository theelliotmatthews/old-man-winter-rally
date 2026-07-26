<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Sponsors · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Sponsors"
	title="Put your brand in front of Colorado endurance athletes."
	lead="Expo booths, course presence, and a winter festival crowd that sticks around for the party."
/>

<section class="section-pad paper-panel">
	<div class="container-page max-w-2xl" use:reveal>
		<p class="text-lg text-ink/75">
			Interested in sponsoring or joining the Old Man Winter Expo? Email
			<a class="font-medium text-ink underline decoration-ember" href="mailto:{site.sponsorEmail}"
				>{site.sponsorEmail}</a
			>
			and tell us what you want to activate.
		</p>
		<a href="mailto:{site.sponsorEmail}" class="btn btn-primary mt-8">Email sponsorship</a>
	</div>
</section>

<FinalCta />
