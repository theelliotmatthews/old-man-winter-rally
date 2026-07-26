<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { prizes, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Prizes · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Prizes"
	title="Podium cash, product, and Snowflake loot."
	lead="Competitive purses for the deep fields. Guaranteed Snowflake prizes for anyone who finds one on course."
	image="/images/Snow_flake.webp"
/>

<section class="section-pad paper-panel">
	<div class="container-page">
		<div class="grid gap-3" use:reveal>
			{#each prizes as prize}
				<div class="grid gap-2 rounded-2xl border border-ink/10 bg-snow px-5 py-4 md:grid-cols-[220px_1fr]">
					<p class="font-display text-xl tracking-tight">{prize.event}</p>
					<p class="text-ink/70">{prize.detail}</p>
				</div>
			{/each}
		</div>
		<div class="mt-10 rounded-[1.5rem] bg-ink p-7 text-paper" use:reveal={80}>
			<h2 class="font-display text-3xl tracking-tight">Snowflake prizes</h2>
			<p class="mt-3 max-w-2xl text-paper/75">
				Exclusive to Old Man Winter Rally. Pick up a Snowflake along the course for a guaranteed prize,
				from swag to surprises. Limit one Snowflake prize per person.
			</p>
		</div>
	</div>
</section>

<FinalCta />
