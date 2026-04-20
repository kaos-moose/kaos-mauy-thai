import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Kaos Muay Thai <kaos1@kaosmedia-ai.com>",
    to: "kaos1@kaosmedia-ai.com",
    subject: "New Founding Member Inquiry",
    html: `
      <h2>New Founding Member Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
