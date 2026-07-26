<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		eyebrow = '',
		title,
		lead = '',
		image = '/images/hero-crowd.webp'
	}: { eyebrow?: string; title: string; lead?: string; image?: string } = $props();
</script>

<section class="relative overflow-hidden pt-36 sm:pt-40">
	<div class="absolute inset-0">
		<img src={image} alt="" class="h-full w-full object-cover opacity-40" />
		<div class="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink"></div>
	</div>
	<div class="relative container-page section-pad !pb-14 !pt-10">
		<div class="max-w-3xl" use:reveal>
			{#if eyebrow}
				<p class="eyebrow">{eyebrow}</p>
			{/if}
			<h1 class="headline-lg mt-4">{title}</h1>
			{#if lead}
				<p class="mt-5 max-w-2xl text-lg text-paper/75">{lead}</p>
			{/if}
		</div>
	</div>
</section>
