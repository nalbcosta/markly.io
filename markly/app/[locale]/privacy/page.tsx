import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/Article/Article";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getPrivacyDocument } from "@/locales/privacy";
import styles from "./page.module.css";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

const SUPPORTED_LOCALES = ["pt", "en"] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Privacy Policy | Markly.io" : "Politica de Privacidade | Markly.io",
    description: isEnglish
      ? "Learn how Markly collects, uses, and protects data in its GitHub README builder."
      : "Saiba como o Markly coleta, usa e protege dados no criador de README para GitHub.",
    alternates: {
      canonical: `https://markly.io/${locale}/privacy`,
      languages: {
        "pt-BR": "https://markly.io/pt/privacy",
        "en-US": "https://markly.io/en/privacy",
      },
    },
    openGraph: {
      title: isEnglish ? "Privacy Policy | Markly" : "Politica de Privacidade | Markly",
      description: isEnglish
        ? "Understand what data Markly collects, why it is used, and how your privacy is protected."
        : "Entenda quais dados o Markly coleta, por que usa essas informacoes e como protege sua privacidade.",
      url: `https://markly.io/${locale}/privacy`,
      siteName: "Markly",
      type: "article",
      locale: isEnglish ? "en_US" : "pt_BR",
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isEnglish ? "Markly Privacy Policy" : "Politica de Privacidade do Markly",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish ? "Privacy Policy | Markly" : "Politica de Privacidade | Markly",
      description: isEnglish
        ? "Read how Markly handles and protects your data."
        : "Veja como o Markly trata e protege seus dados.",
      images: [`/${locale}/opengraph-image`],
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const doc = getPrivacyDocument(locale);

  return (
    <PageWrapper
      as="main"
      width="content"
      verticalPadding="sm"
      withHeaderOffset
      className={styles.page}
    >
      <Article locale={locale} document={doc} tag="Markly.io" />
    </PageWrapper>
  );
}
