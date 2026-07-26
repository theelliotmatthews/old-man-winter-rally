<script lang="ts">
	import { benefits } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-pad bg-ink">
	<div class="container-page">
		<div class="max-w-2xl" use:reveal>
			<p class="eyebrow">Why athletes come back</p>
			<h2 class="headline-lg mt-4">Benefits you can feel in your legs and your bones.</h2>
		</div>

		<div class="mt-12 grid gap-5 md:grid-cols-2">
			{#each benefits as benefit, i}
				<article
					class="group grid overflow-hidden rounded-[1.5rem] border border-paper/10 bg-ink-soft md:grid-cols-[0.9fr_1.1fr] {i %
						2 ===
					1
						? 'md:translate-y-8'
						: ''}"
					use:reveal={i * 70}
				>
					<div class="aspect-[4/3] overflow-hidden md:aspect-auto">
						<img
							src={benefit.image}
							alt={benefit.title}
							class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
						/>
					</div>
					<div class="p-7">
						<h3 class="font-display text-3xl tracking-tight">{benefit.title}</h3>
						<p class="mt-3 text-paper/70">{benefit.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
