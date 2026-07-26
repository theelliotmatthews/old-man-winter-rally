<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';

	let { data } = $props();
	const course = $derived(data.course);
</script>

<svelte:head>
	<title>{course.name} · {site.name}</title>
	<meta name="description" content={course.description} />
</svelte:head>

<PageHero
	eyebrow={course.kind}
	title={course.name}
	lead={course.tagline}
	image={course.image}
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
		<div use:reveal>
			<p class="font-mono text-xs tracking-[0.14em] text-muted uppercase">
				Start {course.start} · {course.price === 0 ? 'Free' : `From $${course.price}`}
			</p>
			<p class="mt-5 text-lg text-ink/80">{course.description}</p>
			<ul class="mt-8 space-y-3">
				{#each course.highlights as h}
					<li class="flex gap-3 text-ink/75"><span class="text-ember">→</span>{h}</li>
				{/each}
			</ul>
			{#if course.aidStations?.length}
				<div class="mt-10">
					<h2 class="font-display text-2xl tracking-tight">Aid stations</h2>
					<ul class="mt-3 space-y-2 text-ink/70">
						{#each course.aidStations as a}
							<li>{a}</li>
						{/each}
					</ul>
				</div>
			{/if}
			{#if course.notes?.length}
				<div class="mt-10 rounded-2xl border border-ink/10 bg-snow p-5">
					<h2 class="font-display text-2xl tracking-tight">Important notes</h2>
					<ul class="mt-3 space-y-2 text-sm text-ink/70">
						{#each course.notes as n}
							<li>{n}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
		<aside class="h-fit rounded-[1.5rem] bg-ink p-7 text-paper" use:reveal={80}>
			<p class="eyebrow">Next step</p>
			<h2 class="mt-3 font-display text-3xl tracking-tight">{course.ctaLabel}</h2>
			<p class="mt-3 text-sm text-paper/70">
				Secure your bib on Events.com, then come back for schedule, packet pickup, and weather updates.
			</p>
			<a
				href={site.buyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary mt-6 w-full">{course.price === 0 ? 'See kids race details' : 'Register now'}</a
			>
			<a href="/courses" class="btn btn-secondary mt-3 w-full">Compare courses</a>
			<a href="/register" class="mt-4 block text-center text-sm text-ice underline">Get updates instead</a>
		</aside>
	</div>
</section>

<FinalCta />
