import { env } from 'cloudflare:workers';

export const prerender = false;

function redirect(path: string): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: path },
  });
}

export async function POST({ request }: { request: Request }) {
  const apiKey =
    (env as { RESEND_API_KEY?: string }).RESEND_API_KEY ??
    import.meta.env.RESEND_API_KEY;
  const toEmail =
    (env as { CONTACT_TO_EMAIL?: string }).CONTACT_TO_EMAIL ??
    import.meta.env.CONTACT_TO_EMAIL;
  const fromEmail =
    (env as { CONTACT_FROM_EMAIL?: string }).CONTACT_FROM_EMAIL ??
    import.meta.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return redirect('/contact?error=config');
  }

  const form = await request.formData();

  const gotcha = String(form.get('_gotcha') ?? '');
  if (gotcha) {
    return redirect('/contact?sent=1');
  }

  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return redirect('/contact?error=validation');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `お問い合わせ: ${name}`,
      text: [`名前: ${name}`, `メール: ${email}`, '', message].join('\n'),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error('Resend error:', detail);
    return redirect('/contact?error=send');
  }

  return redirect('/contact/thanks');
}