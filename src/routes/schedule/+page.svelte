<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { schedule, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Schedule · {site.name}</title></svelte:head>

<PageHero
	eyebrow="Schedule"
	title="Know exactly when to show up."
	lead="Packet pickup before race week. Staggered starts on Sunday. Awards and kids racing while the party rolls."
/>

<section class="section-pad paper-panel">
	<div class="container-page space-y-12">
		{#each schedule as block, i}
			<div use:reveal={i * 40}>
				<h2 class="font-display text-3xl tracking-tight">{block.day}</h2>
				<div class="mt-5 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-snow">
					{#each block.items as item}
						<div class="grid gap-2 px-5 py-4 sm:grid-cols-[140px_1fr]">
							<p class="font-mono text-xs tracking-[0.12em] text-ice-deep uppercase">{item.time}</p>
							<div>
								<p class="font-medium">{item.title}</p>
								<p class="text-sm text-ink/65">{item.detail}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<FinalCta />
