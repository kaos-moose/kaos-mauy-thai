import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // TODO: Integrate with email service (AWS SES, Resend, etc.) to notify gym owner
  // TODO: Optionally store leads in a database (DynamoDB, Supabase, etc.)
  console.log("New founding member inquiry:", { name, email, phone, timestamp: new Date().toISOString() });

  return NextResponse.json({ success: true }, { status: 200 });
}
