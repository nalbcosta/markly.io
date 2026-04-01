"use client";

import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection";
import { Section } from "@/components/sections/Section";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useLocale } from "@/hooks/useLocale";
import styles from "./page.module.css";

export default function LandingPage() {
  const { t } = useLocale();

  return (
    <>
      <PageWrapper withHeaderOffset minViewportHeight width="content" verticalPadding="sm">
        {/* Hero Section */}
        <Card size="full" rounded="2xl" align="center" justify="center" className={styles.welcomeCard}>
          <h1 className="ui-title hero-title">{t("landing.hero.title")}</h1>
          <p className="ui-text text-secondary">{t("landing.hero.description")}</p>

          <div className={styles.heroActions}>
            <Button route="/editor" variant="primary" size="lg" rounded="lg">
              {t("landing.hero.startNow")}
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg" rounded="lg">
              {t("landing.hero.howItWorks")}
            </Button>
          </div>
        </Card>

        <FeatureHighlightsSection id="templates" className={styles.sectionCard} />

        <Section
          id="how-it-works"
          size="xl"
          rounded="xl"
          variant="secondary"
          padding="lg"
          className={styles.sectionCard}
          align="start"
          justify="start"
        >
          <div className={styles.sectionHeader}>
            <h2 className="ui-title">{t("landing.howItWorks.title")}</h2>
            <p className="ui-text text-secondary">{t("landing.howItWorks.description")}</p>
          </div>

          <div className={styles.stepsGrid}>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>1</span>
              <h3>{t("landing.howItWorks.step1.title")}</h3>
              <p>{t("landing.howItWorks.step1.description")}</p>
            </article>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>2</span>
              <h3>{t("landing.howItWorks.step2.title")}</h3>
              <p>{t("landing.howItWorks.step2.description")}</p>
            </article>
            <article className={styles.stepItem}>
              <span className={styles.stepNumber}>3</span>
              <h3>{t("landing.howItWorks.step3.title")}</h3>
              <p>{t("landing.howItWorks.step3.description")}</p>
            </article>
          </div>
        </Section>

        <Section size="xl" rounded="xl" variant="primary" padding="lg" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className="ui-title">{t("landing.cta.title")}</h2>
            <p className="ui-text">{t("landing.cta.description")}</p>
            <div className={styles.ctaActions}>
              <Button route="/editor" variant="secondary" size="lg" rounded="lg" className={styles.ctaPrimaryButton}>
                {t("landing.cta.createReadme")}
              </Button>
              <Button href="/templates" variant="ghost" size="lg" rounded="lg" className={styles.ctaGhostButton}>
                {t("landing.cta.viewTemplates")}
              </Button>
            </div>
          </div>
        </Section>
      </PageWrapper>
    </>
  );
}