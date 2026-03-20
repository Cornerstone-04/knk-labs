import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, country, productPreference } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "KNK Labs <waitlist@knklabs.com>",
      to: [process.env.WAITLIST_RECIPIENT_EMAIL ?? "hello@knklabs.com"],
      subject: `New Waitlist Signup — ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 500px; padding: 24px;">
          <h2 style="margin: 0 0 24px; font-size: 20px;">New Waitlist Signup</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Country</td><td style="padding: 8px 0;">${country ?? "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Preference</td><td style="padding: 8px 0;">${productPreference ?? "—"}</td></tr>
          </table>
        </div>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "KNK Labs <waitlist@knklabs.com>",
      to: [email],
      subject: "You're on the KNK Labs waitlist.",
      html: `
        <div style="font-family: monospace; max-width: 500px; padding: 24px; background: #000; color: #fff;">
          <h2 style="margin: 0 0 16px; font-size: 20px; color: #f97316;">You're on the list.</h2>
          <p style="color: #999; line-height: 1.7; margin: 0 0 16px;">
            Hi ${name}, thanks for joining the KNK Labs waitlist. We'll be in touch as soon as your spot is ready.
          </p>
          <p style="color: #999; line-height: 1.7; margin: 0;">
            Stay sharp.
          </p>
          <p style="color: #555; margin-top: 32px; font-size: 11px;">KNK Labs — King Krown Labs</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Waitlist API Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
