<script lang="ts">
	import { site } from '$lib/data/content';

	let show = $state(false);

	$effect(() => {
		const onScroll = () => {
			show = window.scrollY > 640;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if show}
	<div
		class="fixed inset-x-0 bottom-0 z-50 border-t border-paper/10 bg-ink/95 p-3 backdrop-blur-md md:hidden"
	>
		<div class="flex gap-2">
			<a href="/register" class="btn btn-secondary flex-1 !py-3 text-sm">Updates</a>
			<a
				href={site.buyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary flex-[1.4] !py-3 text-sm">Register now</a
			>
		</div>
	</div>
{/if}
