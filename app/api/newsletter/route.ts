const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhook) {
    return Response.json({ ok: false, reason: "closed" }, { status: 503 });
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  if (!EMAIL.test(email) || email.length > 320) {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "universal-consciousness" }),
  });

  if (!response.ok) {
    return Response.json({ ok: false, reason: "unavailable" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
