import { json } from '@sveltejs/kit';
import {
	BREVO_API_KEY,
	BREVO_VIP_LIST_ID,
	BREVO_SENDER_EMAIL,
	BREVO_SENDER_NAME,
	BREVO_REPLY_TO
} from '$env/static/private';
import { env as publicEnv } from '$env/dynamic/public';
import { buildRegistrationConfirmationEmail } from '$lib/email/registrationConfirmation';
import type { RequestHandler } from './$types';

export const prerender = false;

function cleanPhone(dialingCode: string, phone: string) {
	const digits = phone.replace(/\D/g, '');
	const code = dialingCode.replace(/\D/g, '');
	return `+${code}${digits}`;
}

async function sendConfirmationEmail(apiKey: string, email: string) {
	const senderEmail = BREVO_SENDER_EMAIL || 'omwr@adventurefit.com';
	const senderName = BREVO_SENDER_NAME || 'Old Man Winter Rally';
	const replyTo = BREVO_REPLY_TO || senderEmail;
	const { subject, htmlContent, textContent } = buildRegistrationConfirmationEmail({
		siteUrl: publicEnv.PUBLIC_SITE_URL || 'https://old-man-winter-rally.vercel.app'
	});

	const res = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			'api-key': apiKey,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			sender: { name: senderName, email: senderEmail },
			to: [{ email }],
			replyTo: { email: replyTo, name: senderName },
			subject,
			htmlContent,
			textContent,
			tags: ['omwr-registration-confirmation']
		})
	});

	if (!res.ok) {
		const errText = await res.text();
		console.error('Brevo transactional error', res.status, errText);
		return false;
	}

	return true;
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

		// 1) Add / update contact on Brevo VIP list
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

		// 2) Send confirmation email (soft-fail so list signup still succeeds)
		const emailed = await sendConfirmationEmail(apiKey, email);
		if (!emailed) {
			console.warn('[register] Contact saved but confirmation email failed:', email);
		}

		return json({ ok: true, emailed });
	} catch (error) {
		console.error(error);
		return json({ error: 'Unexpected server error.' }, { status: 500 });
	}
};
