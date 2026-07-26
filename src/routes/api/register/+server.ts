import { json } from '@sveltejs/kit';
import { BREVO_API_KEY, BREVO_VIP_LIST_ID } from '$env/static/private';
import type { RequestHandler } from './$types';

export const prerender = false;

function cleanPhone(dialingCode: string, phone: string) {
	const digits = phone.replace(/\D/g, '');
	const code = dialingCode.replace(/\D/g, '');
	return `+${code}${digits}`;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const email = String(body.email || '')
			.trim()
			.toLowerCase();
		const dialingCode = String(body.dialingCode || '+1').trim();
		const phone = String(body.phone || '').trim();
		const consent = Boolean(body.consent);

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return json({ error: 'Enter a valid email.' }, { status: 400 });
		}
		if (!phone || phone.replace(/\D/g, '').length < 7) {
			return json({ error: 'Enter a valid phone number.' }, { status: 400 });
		}
		if (!consent) {
			return json({ error: 'Marketing consent is required.' }, { status: 400 });
		}

		const apiKey = BREVO_API_KEY;
		const listId = Number(BREVO_VIP_LIST_ID);

		if (!apiKey || apiKey.includes('your_') || !Number.isFinite(listId) || listId <= 0) {
			// Placeholder mode for local/demo deploys before real credentials are set
			console.info('[register] Placeholder Brevo credentials. Accepted lead:', {
				email,
				phone: cleanPhone(dialingCode, phone)
			});
			return json({ ok: true, mode: 'placeholder' });
		}

		const phoneNumber = cleanPhone(dialingCode, phone);

		const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
			method: 'POST',
			headers: {
				'api-key': apiKey,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				email,
				attributes: {
					SMS: phoneNumber
				},
				listIds: [listId],
				updateEnabled: true,
				emailBlacklisted: false,
				smsBlacklisted: false
			})
		});

		// 201 = created, 204 = updated existing
		if (!contactRes.ok && contactRes.status !== 204) {
			const errText = await contactRes.text();
			console.error('Brevo contact error', contactRes.status, errText);
			return json({ error: 'Could not save your details. Try again.' }, { status: 502 });
		}

		return json({ ok: true });
	} catch (error) {
		console.error(error);
		return json({ error: 'Unexpected server error.' }, { status: 500 });
	}
};
