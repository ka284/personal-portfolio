import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rewrite everything to public/ where symlinks exist
  if (pathname === "/" || pathname.startsWith("/css/") || pathname.startsWith("/js/") || pathname.startsWith("/images/") || pathname === "/resume.pdf") {
    const url = request.nextUrl.clone();
    if (pathname === "/") url.pathname = "/index.html";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/", "/resume.pdf", "/css/:path*", "/js/:path*", "/images/:path*"] };