import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const SUPPORTED_LOCALES = ["pt", "en"] as const;

function isSupportedLocale(locale: string): locale is (typeof SUPPORTED_LOCALES)[number] {
  return SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number]);
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return children;
}
