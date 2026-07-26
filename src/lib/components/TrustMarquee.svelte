<script lang="ts">
	const items = [
		'Featured in Bicycling Magazine',
		'1,000+ riders & runners',
		'Rain · Snow · Shine',
		'Hot meal + cold beer included',
		'Snowflake prizes on course',
		'Lyons, Colorado',
		'Legendary after party'
	];
</script>

<section class="border-y border-paper/10 bg-ink-soft py-5">
	<div class="marquee">
		<div class="marquee-track">
			{#each [...items, ...items] as item}
				<span class="font-mono text-xs tracking-[0.18em] text-paper/70 uppercase">{item}</span>
				<span class="text-ice/70">✦</span>
			{/each}
		</div>
	</div>
</section>
