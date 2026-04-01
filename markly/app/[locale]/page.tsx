import { notFound } from "next/navigation";
import LandingPage from "../page";

type LocalizedLandingPageProps = {
  params: Promise<{ locale: string }>;
};

const SUPPORTED_LOCALES = ["pt", "en"] as const;

function isSupportedLocale(locale: string): locale is (typeof SUPPORTED_LOCALES)[number] {
  return SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number]);
}

export default async function LocalizedLandingPage({ params }: LocalizedLandingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LandingPage />;
}
