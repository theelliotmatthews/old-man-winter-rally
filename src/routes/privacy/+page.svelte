<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Privacy · {site.name}</title></svelte:head>

<PageHero eyebrow="Privacy" title="How we handle your info." lead="Short version: we use your details to run the event and send updates you asked for." />

<section class="section-pad paper-panel">
	<div class="container-page prose-like max-w-3xl space-y-5 text-ink/75" use:reveal>
		<p>
			When you register on Events.com, your registration data is processed by Events.com under their
			terms. When you submit the updates form on this website, we send your email and phone number to
			Klaviyo so we can deliver the marketing messages you consented to.
		</p>
		<p>
			We also use the Meta Pixel to understand marketing performance. You can control ad tracking through
			your browser and Meta ad settings.
		</p>
		<p>
			Questions: <a class="underline decoration-ember" href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</section>
