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

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  if (!isSupportedLocale(locale)) {
    return {
      title: "Markly.io",
      description: "Crie seu README profissional.",
      metadataBase: new URL("https://markly.io"),
    };
  }

  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Markly.io - Professional GitHub README" : "Markly.io - README Profissional",
    description: isEnglish
      ? "Build a professional GitHub README with real-time preview, templates and Markdown export."
      : "Crie um README profissional no GitHub com preview em tempo real, templates e exportação em Markdown.",
    metadataBase: new URL("https://markly.io"),
    alternates: {
      canonical: `https://markly.io/${locale}`,
      languages: {
        "pt-BR": "https://markly.io/pt",
        "en-US": "https://markly.io/en",
      },
    },
    openGraph: {
      title: isEnglish ? "Markly.io" : "Markly.io",
      description: isEnglish
        ? "Build a professional GitHub README with real-time preview, templates and Markdown export."
        : "Crie um README profissional no GitHub com preview em tempo real, templates e exportação em Markdown.",
      url: `https://markly.io/${locale}`,
      siteName: "Markly",
      type: "website",
      locale: isEnglish ? "en_US" : "pt_BR",
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Markly.io Open Graph image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Markly.io",
      description: isEnglish
        ? "Build a professional GitHub README with real-time preview, templates and Markdown export."
        : "Crie um README profissional no GitHub com preview em tempo real, templates e exportação em Markdown.",
      creator: "@markly",
      images: [`/${locale}/opengraph-image`],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return children;
}
