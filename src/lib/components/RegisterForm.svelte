<script lang="ts">
	import { dialingCodes, site } from '$lib/data/content';

	type Props = {
		compact?: boolean;
		title?: string;
		subtitle?: string;
	};

	let {
		compact = false,
		title = 'Get race updates',
		subtitle = 'Email + SMS alerts for registration windows, packet pickup, and weather calls. No spam, just useful race intel.'
	}: Props = $props();

	let email = $state('');
	let dialingCode = $state('+1');
	let phone = $state('');
	let consent = $state(false);
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let message = $state('');

	async function submit(e: Event) {
		e.preventDefault();
		if (!consent) {
			status = 'error';
			message = 'Please agree to receive marketing updates.';
			return;
		}
		status = 'loading';
		message = '';

		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, dialingCode, phone, consent })
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || 'Something went wrong');

			window.fbq?.('track', 'CompleteRegistration', {
				content_name: 'OMW Registration Interest',
				status: true
			});

			status = 'success';
			message = 'You are on the list. Watch your inbox (and texts) for updates.';
			email = '';
			phone = '';
			consent = false;
		} catch (err) {
			status = 'error';
			message = err instanceof Error ? err.message : 'Could not submit. Try again.';
		}
	}
</script>

<form
	class="rounded-[1.5rem] border border-ink/10 bg-snow p-6 text-ink shadow-[0_20px_60px_rgba(6,24,32,0.08)] sm:p-8"
	onsubmit={submit}
>
	{#if !compact}
		<p class="eyebrow !text-ice-deep">Hazelnut Trail · Stage 2</p>
	{/if}
	<h3 class="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{title}</h3>
	<p class="mt-3 text-sm text-ink/70">{subtitle}</p>

	<div class="mt-6 grid gap-4 {compact ? '' : 'sm:grid-cols-2'}">
		<label class="block sm:col-span-2">
			<span class="mb-1.5 block font-mono text-[0.65rem] tracking-[0.12em] uppercase">Email</span>
			<input class="input" type="email" required autocomplete="email" bind:value={email} placeholder="you@email.com" />
		</label>

		<label class="block">
			<span class="mb-1.5 block font-mono text-[0.65rem] tracking-[0.12em] uppercase"
				>Dialing code</span
			>
			<select class="select" bind:value={dialingCode} required>
				{#each dialingCodes as item}
					<option value={item.code}>{item.label}</option>
				{/each}
			</select>
		</label>

		<label class="block">
			<span class="mb-1.5 block font-mono text-[0.65rem] tracking-[0.12em] uppercase">Phone</span>
			<input
				class="input"
				type="tel"
				required
				autocomplete="tel-national"
				bind:value={phone}
				placeholder="5551234567"
			/>
		</label>
	</div>

	<label class="mt-5 flex items-start gap-3 text-sm text-ink/75">
		<input class="mt-1" type="checkbox" bind:checked={consent} required />
		<span>
			I agree to receive email and SMS marketing about {site.name}, including registration reminders
			and event updates. Msg/data rates may apply. Consent is not a condition of purchase.
		</span>
	</label>

	<button type="submit" class="btn btn-primary mt-6 w-full" disabled={status === 'loading'}>
		{status === 'loading' ? 'Submitting…' : 'Join the list'}
	</button>

	{#if message}
		<p class="mt-4 text-sm {status === 'success' ? 'text-ice-deep' : 'text-red-700'}">{message}</p>
	{/if}

	<p class="mt-5 text-center text-xs text-muted">
		Ready to buy now?
		<a
			href={site.buyUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-ink underline decoration-ember underline-offset-2">Register on Events.com</a
		>
	</p>
</form>
