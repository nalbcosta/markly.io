"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { en } from "@/locales/en";
import { pt, type TranslationDictionary } from "@/locales/pt";

export type Locale = "pt" | "en";

const SUPPORTED_LOCALES: readonly Locale[] = ["pt", "en"];
const STORAGE_KEY = "markly-locale";

const dictionaries: Record<Locale, TranslationDictionary> = {
  pt,
  en,
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  t: (key: string) => string;
  supportedLocales: readonly Locale[];
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const short = value.toLowerCase().split("-")[0];
  if (short === "en") {
    return "en";
  }

  if (short === "pt") {
    return "pt";
  }

  return null;
}

function getLocaleFromPath(pathname: string | null): Locale | null {
  if (!pathname) {
    return null;
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "en" || firstSegment === "pt" ? firstSegment : null;
}

function getNestedTranslation(source: TranslationDictionary, key: string): unknown {
  const parts = key.split(".");
  let current: unknown = source;

  for (const part of parts) {
    if (!current || typeof current !== "object") {
      return undefined;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

function withLocalePrefix(pathname: string, locale: Locale): string {
  const currentLocale = getLocaleFromPath(pathname);

  if (currentLocale) {
    return pathname.replace(new RegExp(`^/${currentLocale}`), `/${locale}`);
  }

  if (pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathname}`;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [storedLocale, setStoredLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "pt";
    }

    const localeFromStorage = normalizeLocale(localStorage.getItem(STORAGE_KEY));
    const localeFromBrowser = normalizeLocale(window.navigator.language);
    return localeFromStorage ?? localeFromBrowser ?? "pt";
  });

  const locale = useMemo(() => getLocaleFromPath(pathname) ?? storedLocale, [pathname, storedLocale]);

  useEffect(() => {
    const localeFromPath = getLocaleFromPath(pathname);
    if (localeFromPath) {
      localStorage.setItem(STORAGE_KEY, localeFromPath);
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en-US" : "pt-BR";
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) {
        return;
      }

      setStoredLocale(nextLocale);
      localStorage.setItem(STORAGE_KEY, nextLocale);

      const nextPath = withLocalePrefix(pathname ?? "/", nextLocale);
      const search = window.location.search;
      const hash = window.location.hash;
      router.push(`${nextPath}${search}${hash}`);
    },
    [locale, pathname, router],
  );

  const t = useCallback(
    (key: string): string => {
      const localeValue = getNestedTranslation(dictionaries[locale], key);
      if (typeof localeValue === "string") {
        return localeValue;
      }

      const fallbackValue = getNestedTranslation(dictionaries.pt, key);
      return typeof fallbackValue === "string" ? fallbackValue : key;
    },
    [locale],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      supportedLocales: SUPPORTED_LOCALES,
    }),
    [locale, setLocale, t],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  }

  return context;
}
