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
  description: "Crie um perfil README do GitHub profissional com preview em tempo real, templates e exportação em Markdown",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
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
