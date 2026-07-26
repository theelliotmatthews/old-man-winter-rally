import { site } from '$lib/data/content';

const DEFAULT_SITE_URL = 'https://old-man-winter-rally.vercel.app';

export function buildRegistrationConfirmationEmail(opts?: { siteUrl?: string }) {
	const siteUrl = (opts?.siteUrl || DEFAULT_SITE_URL).replace(/\/$/, '');
	const heroUrl = `${siteUrl}/email/hero.jpg`;
	const logoUrl = `${siteUrl}/email/logo.png`;
	const instagramUrl = site.instagram;
	const webUrl = siteUrl;

	const subject = `You're on the list · ${site.name}`;

	const textContent = [
		`You're on the list for ${site.name}.`,
		'',
		`Tickets go on sale soon. We'll email you when registration opens.`,
		'',
		`In the meantime, follow us on Instagram so you don't miss the drop:`,
		instagramUrl,
		'',
		`${site.dateShort} · ${site.city}`,
		`${site.venue} · ${site.address}`,
		webUrl
	].join('\n');

	const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${subject}</title>
<!--[if mso]>
<style type="text/css">
body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
</style>
<![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#faf8f2;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f2;">
  <tr>
    <td align="center" style="padding:0;">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background-color:#faf8f2;">
        <!-- Hero -->
        <tr>
          <td style="padding:0;background-color:#061820;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td background="${heroUrl}" bgcolor="#061820" width="640" valign="top" style="background-image:url('${heroUrl}');background-size:cover;background-position:center;background-color:#061820;">
                  <!--[if gte mso 9]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:640px;height:280px;">
                    <v:fill type="frame" src="${heroUrl}" color="#061820" />
                    <v:textbox inset="0,0,0,0">
                  <![endif]-->
                  <div style="background-color:rgba(6,24,32,0.55);">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="min-height:280px;">
                      <tr>
                        <td style="padding:40px 40px 32px 40px;">
                          <img src="${logoUrl}" width="70" height="88" alt="${site.name}" style="display:block;border:0;width:70px;height:auto;" />
                          <div style="font-family:Arial Black, Arial, Helvetica, sans-serif;font-weight:700;font-size:36px;line-height:40px;letter-spacing:-0.4px;text-transform:uppercase;color:#f2efe6;padding-top:20px;">
                            OLD MAN WINTER<br />RALLY
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if gte mso 9]>
                    </v:textbox>
                  </v:rect>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 0 40px;">
            <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:13px;line-height:1.4;letter-spacing:0.78px;text-transform:uppercase;color:#d4843a;">
              ${site.dateShort.toUpperCase()} · ${site.city.toUpperCase()}
            </p>
            <h1 style="margin:16px 0 0 0;font-family:Arial Black, Arial, Helvetica, sans-serif;font-weight:700;font-size:40px;line-height:44px;letter-spacing:-0.44px;text-transform:uppercase;color:#061820;">
              YOU'RE ON<br />THE LIST
            </h1>
            <p style="margin:28px 0 0 0;font-family:Arial, Helvetica, sans-serif;font-size:17px;line-height:1.5;color:#6b7c84;">
              Thanks for signing up. Tickets will go on sale soon, and we'll email you the moment registration opens.
            </p>
            <p style="margin:16px 0 0 0;font-family:Arial, Helvetica, sans-serif;font-size:17px;line-height:1.5;color:#6b7c84;">
              In the meantime, follow us on Instagram so you don't miss course drops, weather calls, and race-day intel.
            </p>

            <!-- Primary CTA -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:36px 0 0 0;">
              <tr>
                <td align="center" bgcolor="#d4843a" style="border-radius:28px;background-color:#d4843a;">
                  <a href="${instagramUrl}" target="_blank" style="display:inline-block;padding:18px 36px;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:700;line-height:1;text-decoration:none;text-transform:uppercase;color:#061820;">
                    FOLLOW ON INSTAGRAM
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Secondary card -->
        <tr>
          <td style="padding:40px 40px 0 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#061820;border-radius:16px;">
              <tr>
                <td style="padding:24px 24px 28px 24px;">
                  <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:12px;line-height:1.4;letter-spacing:0.96px;text-transform:uppercase;color:#7eb8c9;">
                    STAY CLOSE
                  </p>
                  <p style="margin:12px 0 0 0;font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:1.35;color:#f2efe6;">
                    Race updates hit Instagram first
                  </p>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0 0 0;">
                    <tr>
                      <td align="center" bgcolor="#7eb8c9" style="border-radius:20px;background-color:#7eb8c9;">
                        <a href="${instagramUrl}" target="_blank" style="display:inline-block;padding:12px 24px;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;line-height:1;text-decoration:none;text-transform:uppercase;color:#061820;">
                          @OLDMANWINTERRALLY
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:40px 40px 56px 40px;">
            <p style="margin:0;font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:1.5;color:#6b7c84;">
              ${site.venue} · ${site.address}
            </p>
            <p style="margin:12px 0 0 0;font-family:'Courier New',Courier,monospace;font-size:12px;line-height:1.4;letter-spacing:0.48px;text-transform:uppercase;">
              <a href="${webUrl}" style="color:#7eb8c9;text-decoration:none;">oldmanwinterrally.com</a>
            </p>
            <p style="margin:28px 0 0 0;font-family:Arial, Helvetica, sans-serif;font-size:11px;line-height:1.5;color:#6b7c84;">
              You are receiving this because you opted in to OMW updates.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

	return { subject, htmlContent, textContent };
}
