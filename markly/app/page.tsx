import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Section } from "@/components/sections/Section";
import { PageWrapper } from "@/components/layout/PageWrapper";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <>
      <PageWrapper withHeaderOffset minViewportHeight width="content" verticalPadding="sm">
        {/* Hero Section */}
        <Card size="full" rounded="2xl" align="center" justify="center" className={styles.welcomeCard}>
          <h1 className="ui-title hero-title">Transforme seu perfil do GitHub em uma vitrine profissional</h1>
          <p className="ui-text text-secondary">
            O Markly simplifica a criação de READMEs de perfil com templates inteligentes, edição guiada e pré-visualização em tempo real, tudo para você publicar mais rápido, com qualidade e consistência visual.
          </p>

          <div className={styles.heroActions}>
            <Button route="/editor" variant="primary" size="lg" rounded="lg">
              Começar agora
            </Button>
            <Button href="#como-funciona" variant="outline" size="lg" rounded="lg">
              Como funciona
            </Button>
          </div>
        </Card>

        <Section size="xl" rounded="xl" variant="default" padding="lg" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className="ui-title">Por que equipes e devs escolhem o Markly</h2>
            <p className="ui-text text-secondary">
              Fluxo objetivo, resultado profissional e controle total sobre o conteudo do perfil.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.featureItem}>
              <h3>Templates estrategicos</h3>
              <p>Estruturas criadas para destacar habilidades, projetos e resultados de forma clara.</p>
            </article>
            <article className={styles.featureItem}>
              <h3>Editor com foco em produtividade</h3>
              <p>Edite secoes rapidamente sem perder consistencia visual entre blocos.</p>
            </article>
            <article className={styles.featureItem}>
              <h3>Exportacao pronta para uso</h3>
              <p>Gere markdown limpo e copie para o GitHub sem ajustes manuais demorados.</p>
            </article>
          </div>
        </Section>

        <Section
          id="como-funciona"
          size="xl"
          rounded="xl"
          variant="secondary"
          padding="lg"
          className={styles.sectionCard}
          align="start"
          justify="start"
        >
          <div className={styles.sectionHeader}>
            <h2 className="ui-title">Como funciona</h2>
            <p className="ui-text text-secondary">Um processo simples em tres passos para publicar rapido.</p>
          </div>

          <div className={styles.stepsGrid}>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>1</span>
              <h3>Escolha um template</h3>
              <p>Selecione um layout alinhado ao seu objetivo profissional.</p>
            </article>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>2</span>
              <h3>Personalize em minutos</h3>
              <p>Edite textos, secoes e destaques com preview instantaneo.</p>
            </article>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>3</span>
              <h3>Exporte e publique</h3>
              <p>Copie o markdown e atualize seu perfil do GitHub com um clique.</p>
            </article>
          </div>
        </Section>

        <Section size="xl" rounded="xl" variant="primary" padding="lg" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className="ui-title">Pronto para elevar o nivel do seu GitHub?</h2>
            <p className="ui-text">
              Crie seu README com padrao profissional e apresente seu trabalho com mais clareza.
            </p>
            <div className={styles.ctaActions}>
              <Button route="/editor" variant="secondary" size="lg" rounded="lg" className={styles.ctaPrimaryButton}>
                Criar meu README
              </Button>
              <Button href="/templates" variant="ghost" size="lg" rounded="lg" className={styles.ctaGhostButton}>
                Ver templates
              </Button>
            </div>
          </div>
        </Section>
      </PageWrapper>
    </>
  );
}