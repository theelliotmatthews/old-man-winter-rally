<script lang="ts">
	import { gallery } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-pad paper-panel">
	<div class="container-wide">
		<div class="container-page mb-10" use:reveal>
			<p class="eyebrow !text-ice-deep">Proof, not stock photos</p>
			<h2 class="headline-lg mt-4">Real mud. Real grins. Real Lyons.</h2>
		</div>

		<div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
			{#each gallery as src, i}
				<figure
					class="overflow-hidden rounded-2xl {i === 0 || i === 5
						? 'md:col-span-2 md:row-span-2'
						: ''}"
					use:reveal={i * 40}
				>
					<img
						src={src}
						alt="Old Man Winter Rally gallery"
						class="h-full min-h-40 w-full object-cover transition duration-700 hover:scale-[1.03]"
						loading="lazy"
					/>
				</figure>
			{/each}
		</div>

		<div class="container-page mt-8" use:reveal>
			<a href="/results" class="btn btn-dark">Results & photo galleries</a>
		</div>
	</div>
</section>
