import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.searchParams.delete("fbclid");
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*",
};
