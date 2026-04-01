import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleContext";
import { DM_Sans, Noto_Sans_Mono, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoMono =  Noto_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
  

export const metadata: Metadata = {
  title: "Markly.io",
  applicationName: "Markly",
  description:
    "Crie um perfil README do GitHub profissional com preview em tempo real, templates, exportação em Markdown e integração com GitHub.",
  authors: [{ name: "Markly Team", url: "https://markly.io" }],
  creator: "Markly",
  publisher: "Markly",
  metadataBase: new URL("https://markly.io"),
  themeColor: "#4f46e5",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Markly.io",
    description:
      "Crie um perfil README do GitHub profissional com preview em tempo real, templates, exportação em Markdown e integração com GitHub.",
    url: "https://markly.io",
    siteName: "Markly",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Markly.io Open Graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markly.io",
    description:
      "Crie um perfil README do GitHub profissional com preview em tempo real, templates, exportação em Markdown e integração com GitHub.",
    creator: "@markly",
    images: ["/opengraph-image"],
  },
};

function getLang(locale?: string): "pt-BR" | "en-US" {
  return locale === "en" ? "en-US" : "pt-BR";
}

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params?: { locale?: string } }>) {
  const lang = getLang(params?.locale);

  return (
    <html lang={lang}>
      <body className={`${dmSans.variable} ${notoMono.variable} ${playfair.variable}`}>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
