<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Volunteer · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Volunteer"
	title="Get the vibes without the suffering (unless you want both)."
	lead="Course marshals, packet pickup, food service, setup, breakdown, and venue help. Volunteers get OMW gear and a hot meal."
/>

<section class="section-pad paper-panel">
	<div class="container-page max-w-2xl" use:reveal>
		<ul class="space-y-3 text-ink/75">
			<li>→ Course marshals</li>
			<li>→ Packet pickup</li>
			<li>→ Food and drink service</li>
			<li>→ Setup / breakdown / venue assistance</li>
		</ul>
		<p class="mt-6 text-ink/70">
			Email <a class="underline decoration-ember" href="mailto:{site.email}">{site.email}</a> with the
			subject line "OMW Volunteer" and your preferred roles.
		</p>
		<a href="mailto:{site.email}?subject=OMW%20Volunteer" class="btn btn-primary mt-8">Volunteer inquiry</a>
	</div>
</section>

<FinalCta />
