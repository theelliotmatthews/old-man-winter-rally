import { json } from '@sveltejs/kit';
import { KLAVIYO_API_KEY, KLAVIYO_LIST_ID } from '$env/static/private';
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

		const apiKey = KLAVIYO_API_KEY;
		const listId = KLAVIYO_LIST_ID;

		if (!apiKey || apiKey.includes('your_private') || !listId || listId.includes('YourList')) {
			// Placeholder mode for local/demo deploys before real credentials are set
			console.info('[register] Placeholder Klaviyo credentials. Accepted lead:', {
				email,
				phone: cleanPhone(dialingCode, phone)
			});
			return json({ ok: true, mode: 'placeholder' });
		}

		const phoneNumber = cleanPhone(dialingCode, phone);

		const profileRes = await fetch('https://a.klaviyo.com/api/profile-import/', {
			method: 'POST',
			headers: {
				Authorization: `Klaviyo-API-Key ${apiKey}`,
				revision: '2024-10-15',
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				data: {
					type: 'profile',
					attributes: {
						email,
						phone_number: phoneNumber,
						properties: {
							source: 'old-man-winter-rally-website',
							marketing_consent: true
						}
					}
				}
			})
		});

		if (!profileRes.ok) {
			const errText = await profileRes.text();
			console.error('Klaviyo profile error', profileRes.status, errText);
			return json({ error: 'Could not save your details. Try again.' }, { status: 502 });
		}

		const profileJson = await profileRes.json();
		const profileId = profileJson?.data?.id;

		const subscribeRes = await fetch(
			'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/',
			{
				method: 'POST',
				headers: {
					Authorization: `Klaviyo-API-Key ${apiKey}`,
					revision: '2024-10-15',
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					data: {
						type: 'profile-subscription-bulk-create-job',
						attributes: {
							profiles: {
								data: [
									{
										type: 'profile',
										id: profileId,
										attributes: {
											email,
											phone_number: phoneNumber,
											subscriptions: {
												email: {
													marketing: {
														consent: 'SUBSCRIBED'
													}
												},
												sms: {
													marketing: {
														consent: 'SUBSCRIBED'
													}
												}
											}
										}
									}
								]
							}
						},
						relationships: {
							list: {
								data: {
									type: 'list',
									id: listId
								}
							}
						}
					}
				})
			}
		);

		if (!subscribeRes.ok && subscribeRes.status !== 202) {
			const errText = await subscribeRes.text();
			console.error('Klaviyo subscribe error', subscribeRes.status, errText);
			// Profile was created; still treat as soft success for UX
		}

		return json({ ok: true });
	} catch (error) {
		console.error(error);
		return json({ error: 'Unexpected server error.' }, { status: 500 });
	}
};
