import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/adminAuth";

// Next.js 16 renamed `middleware` to `proxy` (file: proxy.ts, export: proxy).
// Proxy defaults to the Node.js runtime in v16, so node:crypto works without
// any `runtime` export (setting one here would throw).

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the login page through unconditionally.
  // (The /api/admin/login route is not matched by this proxy's config.)
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (verifyAdminSession(session)) {
    return NextResponse.next();
  }

  // Use a relative Location header instead of NextResponse.redirect(new URL(..., request.url))
  // because in prod request.url reflects the internal Lambda origin (localhost:3000) behind
  // CloudFront/Amplify and would leak that into the redirect target.
  return new NextResponse(null, {
    status: 307,
    headers: { Location: "/admin/login" },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
