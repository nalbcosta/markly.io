import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TemplatesPage from "../../templates/page";

type LocalizedTemplatesPageProps = {
  params: Promise<{ locale: string }>;
};

const SUPPORTED_LOCALES = ["pt", "en"] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export async function generateMetadata({ params }: LocalizedTemplatesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Templates | Markly.io" : "Templates | Markly.io",
    description: isEnglish
      ? "Browse Markly templates, search and paginate options, then start from a template or from scratch."
      : "Explore os templates do Markly, pesquise, pagine e comece com um template ou do zero.",
    alternates: {
      canonical: `https://markly.io/${locale}/templates`,
      languages: {
        "pt-BR": "https://markly.io/pt/templates",
        "en-US": "https://markly.io/en/templates",
      },
    },
  };
}

export default async function LocalizedTemplatesPage({ params }: LocalizedTemplatesPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <TemplatesPage />;
}
