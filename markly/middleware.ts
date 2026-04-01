import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["pt", "en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: Locale = "pt";
const LOCALE_COOKIE_KEY = "markly-locale";

function normalizeLocale(value: string | undefined | null): Locale | null {
  if (!value) {
    return null;
  }

  const short = value.toLowerCase().split("-")[0];
  if (SUPPORTED_LOCALES.includes(short as Locale)) {
    return short as Locale;
  }

  return null;
}

function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim())
    .filter(Boolean) as string[];

  for (const language of languages) {
    const locale = normalizeLocale(language);
    if (locale) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

function getPathLocale(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return normalizeLocale(firstSegment);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = getPathLocale(pathname);

  if (pathLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE_KEY, pathLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const cookieLocale = normalizeLocale(request.cookies.get(LOCALE_COOKIE_KEY)?.value);
  const browserLocale = getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  const locale = cookieLocale ?? browserLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
