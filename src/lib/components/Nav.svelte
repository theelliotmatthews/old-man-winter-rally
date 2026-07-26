<script lang="ts">
	import { page } from '$app/state';
	import { nav, site } from '$lib/data/content';

	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		void page.url.pathname;
		open = false;
	});
</script>

<header
	class="fixed inset-x-0 z-50 transition-all duration-500 {scrolled
		? 'top-0 bg-ink/90 backdrop-blur-md shadow-[0_1px_0_rgba(242,239,230,0.08)]'
		: 'top-0 bg-transparent'}"
>
	<div class="container-wide flex items-center justify-between gap-6 py-4">
		<a href="/" class="relative z-10 flex items-center gap-3" aria-label="{site.name} home">
			<img src="/logo.webp" alt={site.name} class="h-12 w-auto sm:h-14" />
			<span class="hidden font-display text-lg leading-none tracking-tight text-paper md:block">
				Old Man<br />Winter Rally
			</span>
		</a>

		<nav class="hidden items-center gap-7 lg:flex">
			{#each nav as item}
				<a
					href={item.href}
					class="font-mono text-[0.7rem] tracking-[0.14em] uppercase transition {page.url.pathname ===
						item.href || page.url.pathname.startsWith(item.href + '/')
						? 'text-ice'
						: 'text-paper/75 hover:text-paper'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-3 lg:flex">
			<a href="/register" class="btn btn-secondary !py-2.5 !px-4 text-sm">Get updates</a>
			<a
				href={site.buyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary !py-2.5 !px-4 text-sm">Register now</a
			>
		</div>

		<button
			type="button"
			class="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 lg:hidden"
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			<span class="font-mono text-xs tracking-widest">{open ? 'CLOSE' : 'MENU'}</span>
		</button>
	</div>
</header>

{#if open}
	<div class="fixed inset-0 z-40 bg-ink/95 px-6 pt-28 backdrop-blur-xl lg:hidden">
		<nav class="flex flex-col gap-5">
			{#each nav as item}
				<a
					href={item.href}
					class="font-display text-4xl tracking-tight text-paper"
					onclick={() => (open = false)}>{item.label}</a
				>
			{/each}
			<a href="/getting-there" class="font-display text-3xl text-paper/70" onclick={() => (open = false)}
				>Getting there</a
			>
			<a href="/volunteer" class="font-display text-3xl text-paper/70" onclick={() => (open = false)}
				>Volunteer</a
			>
			<div class="mt-6 flex flex-col gap-3">
				<a href="/register" class="btn btn-secondary" onclick={() => (open = false)}>Get updates</a>
				<a
					href={site.buyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
					onclick={() => (open = false)}>Register now</a
				>
			</div>
		</nav>
	</div>
{/if}
