<script lang="ts">
	import RegisterForm from './RegisterForm.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/data/content';
</script>

<section id="mailing-list" class="section-pad bg-ink">
	<div class="container-page grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
		<div use:reveal>
			<p class="eyebrow">Not ready to buy yet?</p>
			<h2 class="headline-lg mt-4">Stay close without committing your legs today.</h2>
			<p class="mt-5 max-w-md text-paper/70">
				Get notified when courses near capacity, when packet pickup opens, and when weather calls
				land. Or skip the list and
				<a href={site.buyUrl} target="_blank" rel="noopener noreferrer" class="text-ice underline"
					>register now</a
				>.
			</p>
		</div>
		<div use:reveal={100}>
			<RegisterForm />
		</div>
	</div>
</section>
