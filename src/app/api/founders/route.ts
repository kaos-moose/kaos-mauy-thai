import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { Resend } from "resend";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/adminAuth";

const membershipLabels: Record<string, string> = {
  "muay-thai": "Muay Thai Only",
  "krav-maga": "Krav Maga Only",
  "full-access": "Full Access (Both)",
};

const FOUNDERS_TABLE = "kaosmt-founder-applications";

// Module-level singleton — reused across warm Lambda invocations.
// Region and credentials resolved from the default AWS SDK provider chain
// (env vars locally, IAM service role in Amplify SSR Lambda).
const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

type FounderRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipInterest: string;
  whyJoin: string;
  submittedAt: string;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, phone, membershipInterest, whyJoin } = body;

  if (!firstName || !lastName || !email || !phone || !membershipInterest) {
    return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const membershipLabel = membershipLabels[membershipInterest] ?? membershipInterest;

  const { error } = await resend.emails.send({
    from: "Kaos Muay Thai <onboarding@resend.dev>",
    to: "crissmoosman1@gmail.com",
    subject: "New Founder Application",
    html: `
      <h2>New Founder Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Membership Interest:</strong> ${membershipLabel}</p>
      <p><strong>Why they want to join:</strong></p>
      <blockquote style="border-left:3px solid #dc2626;padding-left:12px;color:#555">${whyJoin || "Not provided"}</blockquote>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  // Persist to DynamoDB. Failures are logged but do not fail the user-facing
  // response — the notification email has already been sent.
  try {
    const item: FounderRecord = {
      id: randomUUID(),
      firstName,
      lastName,
      email,
      phone,
      membershipInterest,
      whyJoin: whyJoin ?? "",
      submittedAt: new Date().toISOString(),
    };
    await dynamo.send(new PutCommand({ TableName: FOUNDERS_TABLE, Item: item }));
  } catch (dynamoError) {
    console.error("DynamoDB PutItem failed:", dynamoError);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!verifyAdminSession(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await dynamo.send(new ScanCommand({ TableName: FOUNDERS_TABLE }));
    const items = (result.Items ?? []) as FounderRecord[];
    items.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : a.submittedAt > b.submittedAt ? -1 : 0));
    return NextResponse.json({ founders: items }, { status: 200 });
  } catch (dynamoError) {
    console.error("DynamoDB Scan failed:", dynamoError);
    return NextResponse.json({ error: "Failed to fetch founders" }, { status: 500 });
  }
}
