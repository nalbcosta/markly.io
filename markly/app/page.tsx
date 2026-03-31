import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { PageWrapper } from "@/components/layout/PageWrapper";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <>
      <Header />
      <PageWrapper withHeaderOffset minViewportHeight width="content" verticalPadding="sm">
        <Card size="full" rounded="2xl" align="center" justify="center" className={styles.welcomeCard}>
          <h2 className="ui-title">Bem-vindo ao Markly!</h2>
          <p className="ui-text text-secondary">
            O Markly é a maneira mais fácil de criar um README de perfil incrível para o seu GitHub. Com templates prontos, preview em tempo real e exportação em Markdown, você pode ter um README profissional em minutos.
          </p>

          <div className="mt-6">
            <Button variant="primary" size="lg">
              Começar agora
            </Button>
          </div>
        </Card> 
      </PageWrapper>
      <Footer />
    </>
  );
}