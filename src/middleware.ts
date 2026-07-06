import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    // Use rewrite to serve the static HTML file
    return NextResponse.rewrite(new URL("/portfolio.html", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};