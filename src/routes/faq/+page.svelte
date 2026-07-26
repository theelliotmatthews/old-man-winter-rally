<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { faqs, site } from '$lib/data/content';
</script>

<svelte:head><title>FAQ · {site.name}</title></svelte:head>

<PageHero
	eyebrow="FAQ"
	title="Answers before the bounce."
	lead={`${faqs.length} of the questions athletes ask most, pulled onto one page.`}
/>

<FaqAccordion limit={faqs.length} showLink={false} />
<FinalCta />
