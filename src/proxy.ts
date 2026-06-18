import { LEGACY_REDIRECTS, mapEnSlugToCanonical } from "@/lib/routes";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SUPPORTED = ["bg", "en"] as const;

// Next.js 16: this file is `proxy.ts` (formerly `middleware.ts`) and the handler is `proxy`.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Legacy non-prefixed paths -> 301 redirect to their /bg/... equivalents.
  const legacy = LEGACY_REDIRECTS[pathname];
  if (legacy) {
    return NextResponse.redirect(new URL(legacy, request.url), { status: 301 });
  }

  const [, first, ...rest] = pathname.split("/");

  // 2. Bare /en or /bg pass through to the localized home.
  if (rest.length === 0) {
    return NextResponse.next();
  }

  // 3. For EN URLs, rewrite URL-facing slugs to the canonical (BG-named) folder route.
  //    e.g. /en/services/spraying -> internally serve /en/uslugi/pruskane (URL stays English).
  if (first === "en") {
    const subPath = rest.join("/");
    const canonical = mapEnSlugToCanonical(subPath);
    if (canonical) {
      const url = request.nextUrl.clone();
      url.pathname = `/en/${canonical}`;
      return NextResponse.rewrite(url);
    }
  }

  // 4. Unknown first segment that isn't a supported language: let Next handle (404).
  if (!SUPPORTED.includes(first as (typeof SUPPORTED)[number])) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals, API routes, and files with an extension.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
