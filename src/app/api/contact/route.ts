import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const interest = body.interest?.trim() || "discovery";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID?.trim();
  const endpoint =
    process.env.CONTACT_FORM_ENDPOINT?.trim() ||
    (formspreeId ? `https://formspree.io/f/${formspreeId}` : "");

  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Set FORMSPREE_FORM_ID or CONTACT_FORM_ENDPOINT in the environment.",
      },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        interest,
        message,
        _subject: `Website contact: ${interest} — ${name}`,
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("Contact form upstream error:", upstream.status, detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again or book a call." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or book a call." },
      { status: 502 }
    );
  }
}
