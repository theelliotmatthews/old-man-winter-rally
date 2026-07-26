<script lang="ts">
	import { courses, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';

	const main = courses.filter((c) => c.kind !== 'kids');
</script>

<section id="courses" class="section-pad paper-panel">
	<div class="container-page">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" use:reveal>
			<div class="max-w-2xl">
				<p class="eyebrow !text-ice-deep">Choose your adventure</p>
				<h2 class="headline-lg mt-4">One festival. Eight ways in.</h2>
				<p class="mt-4 text-ink/70">
					Bike 23, 40, or 75. Run 5K, 10K, or the half. Stack a Combo. Or cheer and race the free kids
					event. Every ticket includes the after party energy.
				</p>
			</div>
			<a href="/courses" class="btn btn-dark">Compare all courses</a>
		</div>

		<div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each main as course, i}
				<article
					class="relative flex flex-col overflow-hidden rounded-[1.4rem] border border-ink/10 bg-snow"
					use:reveal={i * 50}
				>
					{#if course.popular}
						<span
							class="absolute top-4 right-4 z-10 rounded-full bg-ember px-3 py-1 font-mono text-[0.65rem] tracking-wider text-ink uppercase"
							>Most popular</span
						>
					{/if}
					<div class="aspect-[16/10] overflow-hidden">
						<img src={course.image} alt={course.name} class="h-full w-full object-cover" />
					</div>
					<div class="flex flex-1 flex-col p-6">
						<p class="font-mono text-xs tracking-[0.14em] text-muted uppercase">{course.start}</p>
						<h3 class="mt-2 font-display text-3xl tracking-tight">{course.name}</h3>
						<p class="mt-2 text-sm text-ink/70">{course.tagline}</p>
						<p class="mt-4 font-display text-2xl text-ice-deep">
							{course.price === 0 ? 'Free' : `From $${course.price}`}
						</p>
						<ul class="mt-4 space-y-1.5 text-sm text-ink/70">
							{#each course.highlights.slice(0, 3) as h}
								<li class="flex gap-2"><span class="text-ember">→</span>{h}</li>
							{/each}
						</ul>
						<div class="mt-auto flex flex-wrap gap-2 pt-6">
							<a href="/courses/{course.slug}" class="btn btn-secondary !text-ink !border-ink/20"
								>Course details</a
							>
							<a
								href={site.buyUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary">{course.ctaLabel}</a
							>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
