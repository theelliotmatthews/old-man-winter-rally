<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { onMount } from 'svelte';

	let videoEl: HTMLVideoElement;
	let playing = $state(false);
	let muted = $state(true);
	let current = $state(0);
	let duration = $state(0);

	onMount(() => {
		const onTime = () => (current = videoEl.currentTime);
		const onMeta = () => (duration = videoEl.duration || 0);
		videoEl.addEventListener('timeupdate', onTime);
		videoEl.addEventListener('loadedmetadata', onMeta);
		return () => {
			videoEl.removeEventListener('timeupdate', onTime);
			videoEl.removeEventListener('loadedmetadata', onMeta);
		};
	});

	function togglePlay() {
		if (videoEl.paused) {
			videoEl.play();
			playing = true;
		} else {
			videoEl.pause();
			playing = false;
		}
	}

	function fmt(t: number) {
		const m = Math.floor(t / 60);
		const s = Math.floor(t % 60)
			.toString()
			.padStart(2, '0');
		return `${m}:${s}`;
	}
</script>

<section class="section-pad paper-panel">
	<div class="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
		<div use:reveal>
			<p class="eyebrow !text-ice-deep">See the day</p>
			<h2 class="headline-lg mt-4">Winter weather is not a bug. It is the point.</h2>
			<p class="mt-5 max-w-md text-ink/70">
				Watch how Old Man Winter feels when the Front Range shows up cold, bright, and a little wild.
				Then pick your distance and register while your course still has space.
			</p>
			<a href="/weather" class="btn btn-dark mt-8">Read the weather promise</a>
		</div>

		<div class="relative overflow-hidden rounded-[1.5rem]" use:reveal={120}>
			<video
				bind:this={videoEl}
				class="aspect-square w-full object-cover"
				poster="/video/poster.jpg"
				playsinline
				muted={muted}
				loop
				preload="metadata"
			>
				<source src="/video/weather.mp4" type="video/mp4" />
			</video>

			<div
				class="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-ink/80 to-transparent p-4"
			>
				<button type="button" class="btn btn-primary !px-4 !py-2 text-sm" onclick={togglePlay}>
					{playing ? 'Pause' : 'Play'}
				</button>
				<input
					class="flex-1 accent-ember"
					type="range"
					min="0"
					max={duration || 1}
					step="0.1"
					bind:value={current}
					oninput={() => {
						videoEl.currentTime = current;
					}}
				/>
				<span class="font-mono text-xs text-paper/80">{fmt(current)}</span>
				<button
					type="button"
					class="btn btn-secondary !px-3 !py-2 text-xs"
					onclick={() => {
						muted = !muted;
						videoEl.muted = muted;
					}}>{muted ? 'Unmute' : 'Mute'}</button
				>
			</div>
		</div>
	</div>
</section>
