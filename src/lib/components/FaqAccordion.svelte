<script lang="ts">
	import { faqs } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';

	let { limit = 6, showLink = true }: { limit?: number; showLink?: boolean } = $props();

	let openIndex = $state<number | null>(0);
	const items = $derived(faqs.slice(0, limit));
</script>

<section class="section-pad bg-ink">
	<div class="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
		<div use:reveal>
			<p class="eyebrow">Objections, answered</p>
			<h2 class="headline-lg mt-4">The questions that usually stop the click.</h2>
			<p class="mt-4 text-paper/65">
				Weather, deferrals, combo transitions, bikes, timing. Straight answers before you bounce to
				FAQ burial.
			</p>
			{#if showLink}
				<a href="/faq" class="btn btn-secondary mt-8">All FAQ</a>
			{/if}
		</div>

		<div class="space-y-3" use:reveal={80}>
			{#each items as faq, i}
				<div class="rounded-2xl border border-paper/10 bg-ink-soft">
					<button
						type="button"
						class="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
						onclick={() => (openIndex = openIndex === i ? null : i)}
					>
						<span>
							<span class="font-mono text-[0.65rem] tracking-[0.14em] text-ice uppercase"
								>{faq.category}</span
							>
							<span class="mt-1 block font-display text-xl tracking-tight">{faq.question}</span>
						</span>
						<span class="font-mono text-ice">{openIndex === i ? '−' : '+'}</span>
					</button>
					{#if openIndex === i}
						<p class="border-t border-paper/10 px-5 py-4 text-sm text-paper/70">{faq.answer}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
