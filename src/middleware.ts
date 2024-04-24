import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/SignIn" || path == "SignUp";
  const isUserPath = path == "UserProfile";
  const isAdminPath = path == "AdminProfile";

  const token = request.cookies.get("token")?.value || "";

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

export const config = {
  matchers: ["/SignUp", "/SignIn"],
};
