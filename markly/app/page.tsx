"use client";

import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Section } from "@/components/sections/Section";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useLocale } from "@/hooks/useLocale";
import styles from "./page.module.css";

export default function LandingPage() {
  const { t, locale } = useLocale();
  const editorRoute = `/${locale}/editor`;
  const templatesRoute = `/${locale}/templates`;
  const howItWorksSteps = [
    {
      title: t("landing.howItWorks.step1.title"),
      description: t("landing.howItWorks.step1.description"),
    },
    {
      title: t("landing.howItWorks.step2.title"),
      description: t("landing.howItWorks.step2.description"),
    },
    {
      title: t("landing.howItWorks.step3.title"),
      description: t("landing.howItWorks.step3.description"),
    },
  ];

  return (
    <>
      <PageWrapper withHeaderOffset minViewportHeight width="content" verticalPadding="sm">
        {/* Hero Section */}
        <Card size="full" rounded="2xl" align="center" justify="center" className={styles.welcomeCard}>
          <h1 className="ui-title hero-title">{t("landing.hero.title")}</h1>
          <p className="ui-text text-secondary">{t("landing.hero.description")}</p>

          <div className={styles.heroActions}>
            <Button route={editorRoute} variant="primary" size="lg" rounded="lg">
              {t("landing.hero.startNow")}
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg" rounded="lg">
              {t("landing.hero.howItWorks")}
            </Button>
          </div>
        </Card>

        <Section
          id="how-it-works"
          size="half"
          rounded="sm"
          variant="secondary"
          padding="xl"
          borderColor="none"
          background="none"
          shadow="none"
          className={styles.sectionCard}
          align="start"
          justify="center"
        >
          <div className={styles.sectionHeader}>
            <h2 className="ui-title">{t("landing.howItWorks.title")}</h2>
            <p className="ui-text text-secondary">{t("landing.howItWorks.description")}</p>
          </div>

          <div className={styles.stepsGrid}>
            {howItWorksSteps.map((step, index) => (
              <article key={step.title} className={styles.stepItem}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <FeatureHighlightsSection id="features" className={styles.sectionCard} />

        <FAQSection id="faq" className={styles.sectionCard} />

        <Section size="xl" rounded="2xl" variant="primary" padding="4xl" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className="ui-title">{t("landing.cta.title")}</h2>
            <p className="ui-text">{t("landing.cta.description")}</p>
            <div className={styles.ctaActions}>
              <Button route={editorRoute} variant="primary" size="lg" rounded="lg">
                {t("landing.cta.createReadme")}
              </Button>
              <Button href={templatesRoute} variant="ghost" size="lg" rounded="lg" className={styles.ctaGhostButton}>
                {t("landing.cta.viewTemplates")}
              </Button>
            </div>
          </div>
        </Section>
      </PageWrapper>
    </>
  );
}