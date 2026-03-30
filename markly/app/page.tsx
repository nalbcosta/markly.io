import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <>
      <Header />
      <PageWrapper withHeaderOffset minViewportHeight width="reading" verticalPadding="lg">
        {/* Seções da landing vêm aqui */}
        <section className={styles.hero}>
          <span className="badge-info ui-text">
            ✨ Gerador de README para GitHub
          </span>
          <h1 className="hero-title">
            Crie um README de perfil{" "}
            <span className="accent">memorável</span>.
          </h1>
          <p className="ui-text text-secondary">
            Templates prontos, preview em tempo real e exportação em Markdown — em minutos.
          </p>
          <div className={styles.actions}>
            <button className="btn-primary ui-text">Começar agora</button>
            <button className="btn-soft ui-text">Ver templates</button>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}