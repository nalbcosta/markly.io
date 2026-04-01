import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownEditorPage from "../../editor/page";

type LocalizedEditorPageProps = {
  params: Promise<{ locale: string }>;
};

const SUPPORTED_LOCALES = ["pt", "en"] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export async function generateMetadata({ params }: LocalizedEditorPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Markdown Editor | Markly.io" : "Editor Markdown | Markly.io",
    description: isEnglish
      ? "Choose a template, fill dynamic fields and preview your final Markdown in real time."
      : "Escolha um template, preencha campos dinamicos e visualize seu Markdown final em tempo real.",
    alternates: {
      canonical: `https://markly.io/${locale}/editor`,
      languages: {
        "pt-BR": "https://markly.io/pt/editor",
        "en-US": "https://markly.io/en/editor",
      },
    },
  };
}

export default async function LocalizedEditorPage({ params }: LocalizedEditorPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <MarkdownEditorPage />;
}