<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/data/content';
</script>

<section class="section-pad relative overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="/images/Screen_Shot_2024-02-06_at_5.43.39_PM.webp"
			alt=""
			class="h-full w-full object-cover opacity-35"
		/>
		<div class="absolute inset-0 bg-ink/85"></div>
	</div>

	<div class="relative container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
		<div use:reveal>
			<p class="eyebrow">Risk removed</p>
			<h2 class="headline-lg mt-4">The Winter Promise</h2>
			<p class="mt-5 max-w-xl text-lg text-paper/75">
				Rain, snow, or shine. Old Man Winter is built for real Colorado weather. If roads become
				unsafe, Boulder County can postpone and you will hear ASAP. If a freak storm hits mid-race,
				courses shorten so the day can continue.
			</p>
		</div>
		<div
			class="rounded-[1.5rem] border border-paper/15 bg-paper p-7 text-ink"
			use:reveal={100}
		>
			<ul class="space-y-4 text-sm">
				<li class="flex gap-3"><span class="text-ember">01</span> Hot meal and cold beer waiting at the finish</li>
				<li class="flex gap-3"><span class="text-ember">02</span> Aid stations stocked for winter conditions</li>
				<li class="flex gap-3"><span class="text-ember">03</span> Cancellation insurance + optional FanShield</li>
				<li class="flex gap-3"><span class="text-ember">04</span> Deferral options if life (or weather) gets weird</li>
			</ul>
			<div class="mt-7 flex flex-wrap gap-3">
				<a href="/weather" class="btn btn-dark">Weather history</a>
				<a href={site.buyUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary"
					>Register anyway</a
				>
			</div>
		</div>
	</div>
</section>
