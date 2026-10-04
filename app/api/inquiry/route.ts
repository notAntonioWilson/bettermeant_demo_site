import { NextResponse } from "next/server";

// Discovery-session requests land here.
// Set INQUIRY_WEBHOOK_URL in Vercel (an n8n webhook, for example) to forward each request
// to an inbox, CRM sheet, or auto-booking flow. Without it, requests are logged only.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const email = String(body.email ?? "");
  if (!email.includes("@") || !body.firstName) {
    return NextResponse.json({ ok: false, error: "Name and email are required" }, { status: 400 });
  }

  const payload = { ...body, receivedAt: new Date().toISOString(), source: "website" };

  const hook = process.env.INQUIRY_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Webhook forward failed", err);
    }
  } else {
    console.log("New discovery session request", payload);
  }

  return NextResponse.json({ ok: true });
}
