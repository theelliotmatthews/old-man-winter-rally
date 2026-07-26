<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import RegisterForm from '$lib/components/RegisterForm.svelte';
	import { contactChannels, site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head><title>Contact · {site.name}</title></svelte:head>

<PageHero eyebrow="Contact" title="Let's talk." lead="Registration, timing, sponsorship, media, or general questions." />

<section class="section-pad paper-panel">
	<div class="container-page grid gap-10 lg:grid-cols-2">
		<div class="space-y-4" use:reveal>
			{#each contactChannels as channel}
				<div class="rounded-2xl border border-ink/10 bg-snow px-5 py-4">
					<p class="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">{channel.label}</p>
					<p class="mt-1 text-ink/80">{channel.value}</p>
				</div>
			{/each}
		</div>
		<div use:reveal={80}>
			<RegisterForm title="Prefer updates?" subtitle="Drop your email and phone and we will keep you posted." />
		</div>
	</div>
</section>
