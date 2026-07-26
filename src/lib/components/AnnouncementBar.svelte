<script lang="ts">
	import { site } from '$lib/data/content';

	let open = $state(true);
</script>

{#if open}
	<div class="relative z-[60] bg-ember text-ink">
		<div class="container-page flex items-center justify-between gap-4 py-2.5 text-sm font-medium">
			<p class="font-mono text-[0.68rem] tracking-[0.12em] uppercase sm:text-xs">
				{site.edition} · {site.dateShort} · Lyons, CO · Register before it sells out
			</p>
			<button
				type="button"
				class="shrink-0 opacity-70 transition hover:opacity-100"
				aria-label="Dismiss announcement"
				onclick={() => (open = false)}
			>
				✕
			</button>
		</div>
	</div>
{/if}
