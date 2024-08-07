import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./config";
import { withHelmet } from "./lib/helpers/WithHelmet";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Apply Helmet to all routes
  return withHelmet(async (req) => {
    // Apply internationalization middleware to non-API routes
    if (!pathname.startsWith("/api")) {
      return intlMiddleware(req);
    }

    // For API routes, just continue the request
    return NextResponse.next();
  })(req);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)", "/api/:path*"],
};
