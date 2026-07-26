<script lang="ts">
	import { gettingThere, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
		<div use:reveal>
			<p class="eyebrow !text-ice-deep">Where it all happens</p>
			<h2 class="headline-lg mt-4">{gettingThere.venue}</h2>
			<p class="mt-3 font-mono text-sm tracking-wide text-muted uppercase">{gettingThere.address}</p>
			<ul class="mt-6 space-y-3 text-ink/75">
				{#each gettingThere.tips as tip}
					<li class="flex gap-3"><span class="text-ember">→</span>{tip}</li>
				{/each}
			</ul>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="/getting-there" class="btn btn-dark">Getting there guide</a>
				<a
					href="https://maps.google.com/?q={encodeURIComponent(site.address)}"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary !text-ink !border-ink/20">Open in Maps</a
				>
			</div>
		</div>

		<div
			class="relative min-h-80 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink"
			use:reveal={100}
		>
			<img
				src="/images/Screen_Shot_2024-02-06_at_5.38.53_PM.webp"
				alt="Bohn Park festival atmosphere"
				class="absolute inset-0 h-full w-full object-cover opacity-80"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"></div>
			<div class="absolute inset-x-0 bottom-0 p-6 text-paper">
				<p class="font-display text-3xl tracking-tight">Start. Finish. Party.</p>
				<p class="mt-2 text-sm text-paper/75">Everything radiates from Bohn Park in Lyons.</p>
			</div>
		</div>
	</div>
</section>
