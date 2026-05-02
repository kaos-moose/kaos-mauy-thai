import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  signAdminSession,
  verifyAdminPassword,
} from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const submitted = formData.get("password");
  const password = typeof submitted === "string" ? submitted : undefined;

  if (!verifyAdminPassword(password)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url), { status: 303 });
  }

  const response = NextResponse.redirect(new URL("/admin/founders", request.url), { status: 303 });
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
