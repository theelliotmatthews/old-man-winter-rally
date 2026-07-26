<script lang="ts">
	import { footerExplore, site } from '$lib/data/content';
</script>

<footer class="border-t border-paper/10 bg-ink">
	<div class="container-page section-pad">
		<div class="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
			<div>
				<p class="eyebrow">Ready when you are</p>
				<h2 class="headline-lg mt-4 max-w-xl text-paper">
					Claim your spot before Old Man Winter sells out.
				</h2>
				<p class="mt-5 max-w-md text-paper/70">
					{site.date} at {site.venue}, {site.city}. Mixed terrain adventures, hot meal, cold beer, and
					a party that feels like Colorado winter done right.
				</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href={site.buyUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary">Register on Events.com</a
					>
					<a href="/register" class="btn btn-secondary">Join the waitlist / updates</a>
				</div>
			</div>

			<div>
				<p class="eyebrow mb-5">Explore</p>
				<div class="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-paper/70 sm:grid-cols-3">
					{#each footerExplore as link}
						<a href={link.href} class="transition hover:text-ice">{link.label}</a>
					{/each}
				</div>
				<div class="mt-10 space-y-1 font-mono text-xs tracking-wide text-muted uppercase">
					<p>{site.address}</p>
					<p>
						<a href="mailto:{site.email}" class="text-ice hover:underline">{site.email}</a>
					</p>
				</div>
			</div>
		</div>

		<div
			class="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {site.year} Adventure Fit · {site.name}</p>
			<p class="font-mono tracking-[0.12em] uppercase">Rain. Snow. Shine.</p>
		</div>
	</div>
</footer>
