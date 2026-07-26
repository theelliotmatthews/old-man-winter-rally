<script lang="ts">
	import { dayFlow } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-pad bg-ink">
	<div class="container-page">
		<div class="max-w-2xl" use:reveal>
			<p class="eyebrow">Your day at a glance</p>
			<h2 class="headline-lg mt-4 text-paper">Future-pace the festival before you buy.</h2>
			<p class="mt-4 text-paper/70">
				Starts stack through the morning. The party builds all afternoon. Pick a course that fits your
				legs, then stick around for awards, music, and s'mores.
			</p>
		</div>

		<div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
			{#each dayFlow as step, i}
				<article
					class="relative rounded-2xl border border-paper/10 bg-ink-soft p-5"
					use:reveal={i * 60}
				>
					<p class="font-mono text-xs tracking-[0.14em] text-ice uppercase">{step.time}</p>
					<h3 class="mt-3 font-display text-2xl tracking-tight">{step.label}</h3>
					<p class="mt-2 text-sm text-paper/65">{step.detail}</p>
				</article>
			{/each}
		</div>

		<div class="mt-10" use:reveal>
			<a href="/schedule" class="btn btn-secondary">See full schedule</a>
		</div>
	</div>
</section>
