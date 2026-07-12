import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, phone, program, preferredTime, message, referralSource } = body;

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Kaos Muay Thai <onboarding@resend.dev>",
    to: "crissmoosman1@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>Program of Interest:</strong> ${program || "—"}</p>
      <p><strong>Preferred Class Time:</strong> ${preferredTime || "—"}</p>
      <p><strong>Message:</strong> ${message || "—"}</p>
      <p><strong>How They Heard About Us:</strong> ${referralSource || "—"}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
