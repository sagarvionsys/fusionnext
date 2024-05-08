import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/SignIn" || path == "/SignUp";
  const protectedPath = path == "/dashboard/user" || path == "/dashboard/admin";

  const token = request.cookies.get("token")?.value || "";
  // todo := find to redirect to original place if already has login
  // trying to go on signin or signout but already has signin token
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("", request.url));
  }
  // trying to go on user dashbord with no token so redirection to signin
  if (protectedPath && !token) {
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }
}

export const config = {
  matchers: ["/SignUp", "/SignIn", "/dashboard/user", "/dashboard/admin"],
};
