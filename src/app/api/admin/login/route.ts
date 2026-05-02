import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  signAdminSession,
  verifyAdminPassword,
} from "@/lib/adminAuth";

// Redirects use relative Location headers (HTTP spec allows this) so they
// resolve against whatever host the browser actually requested. In prod,
// request.url reflects the internal Lambda origin behind CloudFront/Amplify
// and would otherwise leak "localhost:3000" into the Location header.

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const submitted = formData.get("password");
  const password = typeof submitted === "string" ? submitted : undefined;

  if (!verifyAdminPassword(password)) {
    return new NextResponse(null, {
      status: 303,
      headers: { Location: "/admin/login?error=1" },
    });
  }

  const response = new NextResponse(null, {
    status: 303,
    headers: { Location: "/admin/founders" },
  });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: signAdminSession(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });
  return response;
}
