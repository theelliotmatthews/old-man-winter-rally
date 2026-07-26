<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { PUBLIC_META_PIXEL_ID } from '$env/static/public';

	const pixelId = PUBLIC_META_PIXEL_ID || '1820792774830166';

	$effect(() => {
		if (!browser || !pixelId) return;

		if (!window.fbq) {
			const n = (function (f: Window, b: Document, e: string, v: string) {
				if (f.fbq) return f.fbq;
				const n = function (...args: unknown[]) {
					if (n.callMethod) n.callMethod(...args);
					else n.queue.push(args);
				} as unknown as {
					(...args: unknown[]): void;
					callMethod?: (...args: unknown[]) => void;
					queue: unknown[];
					push: typeof n;
					loaded: boolean;
					version: string;
				};
				f.fbq = n;
				if (!f._fbq) f._fbq = n;
				n.push = n;
				n.loaded = true;
				n.version = '2.0';
				n.queue = [];
				const t = b.createElement(e) as HTMLScriptElement;
				t.async = true;
				t.src = v;
				const s = b.getElementsByTagName(e)[0];
				s.parentNode?.insertBefore(t, s);
				return n;
			})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

			n('init', pixelId);
		}

		window.fbq?.('track', 'PageView');
		void page.url.pathname;
	});
</script>

<noscript>
	<img
		height="1"
		width="1"
		style="display:none"
		src="https://www.facebook.com/tr?id={pixelId}&ev=PageView&noscript=1"
		alt=""
	/>
</noscript>
