<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import RegisterForm from '$lib/components/RegisterForm.svelte';
	import { site } from '$lib/data/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Register & updates · {site.name}</title>
</svelte:head>

<PageHero
	eyebrow="Register"
	title="Two ways forward."
	lead="Buy your race entry now on Events.com, or join the list for updates if you are still choosing a distance."
	image="/images/hero-crowd.webp"
/>

<section class="section-pad paper-panel">
	<div class="container-page grid gap-10 lg:grid-cols-2">
		<div use:reveal>
			<p class="eyebrow !text-ice-deep">Ready to race</p>
			<h2 class="headline-lg mt-4">Register on Events.com</h2>
			<p class="mt-4 text-ink/70">
				Official checkout for bike, run, combo, kids categories, and add-ons. You will get confirmation
				and packet options from Events.com.
			</p>
			<a
				href={site.buyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary mt-8">Continue to registration</a
			>
			<ul class="mt-8 space-y-2 text-sm text-ink/70">
				<li>→ Bike from $129 · Run from $75 · Combo $179</li>
				<li>→ Hot meal, cold beer, and after party included</li>
				<li>→ Optional FanShield protection at checkout</li>
			</ul>
		</div>
		<div use:reveal={80}>
			<RegisterForm
				title="Not buying today?"
				subtitle="Leave your email and phone. We will send course openings, packet pickup times, and weather calls."
			/>
		</div>
	</div>
</section>
