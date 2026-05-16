import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validations/waitlist";
import { Resend } from "resend";
import {
  adminWaitlistEmail,
  customerWaitlistEmail,
} from "@/lib/email/waitlist-emails";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.WAITLIST_ADMIN_EMAIL;

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();

    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message ?? "Invalid form data.",
        },
        { status: 400 },
      );
    }

    const data = result.data;

    // Insert waitlist submission into Supabase
    const isPopSubmission = data.formType === "pop";

    const { error } = await supabaseAdmin.from("waitlist_submissions").insert({
      form_type: data.formType,
      full_name: data.fullName,
      email: data.email,
      country: data.country,
      product_interest: data.productInterest ?? null,

      selected_hand: isPopSubmission ? (data.selectedHand ?? null) : null,
      selected_colour: isPopSubmission ? (data.selectedColour ?? null) : null,
      selected_style: isPopSubmission ? (data.selectedStyle ?? null) : null,
      watch_orientation: isPopSubmission
        ? (data.watchOrientation ?? null)
        : null,
    });

    if (error) {
      console.error("Supabase waitlist insert error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Could not save waitlist submission.",
        },
        { status: 500 },
      );
    }

    // Send confirmation email to the user and notification email to admin
    await resend.emails.send({
      from: "KNK Labs <onboarding@resend.dev>",
      to: data.email,
      subject:
        data.formType === "pop"
          ? "Your P.O.P Glove waitlist is confirmed"
          : "You’re on the KNK Labs waitlist",
      html: customerWaitlistEmail(data),
    });

    // Only send admin email for P.O.P Glove submissions to reduce noise
    if (adminEmail) {
      await resend.emails.send({
        from: "KNK Labs <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New ${data.formType.toUpperCase()} waitlist submission`,
        html: adminWaitlistEmail(data),
      });
    }

    // Respond with success
    return NextResponse.json({
      success: true,
      message: "Waitlist submission saved successfully.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
