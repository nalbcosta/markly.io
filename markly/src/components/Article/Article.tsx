import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Section } from "@/components/sections/Section";
import type { PrivacyDocument, PrivacyLocale } from "@/locales/privacy";
import styles from "./Article.module.css";

type ArticleProps = {
  locale: PrivacyLocale;
  document: PrivacyDocument;
  tag?: string;
};

export function Article({ locale, document, tag }: ArticleProps) {
  return (
    <>
      <Section
        variant="secondary"
        rounded="2xl"
        padding="2xl"
        size="xl"
        className={styles.hero}
        align="start"
        justify="start"
      >
        <p v-if={tag} className={styles.kicker}>
          {tag}
        </p>
        <h1 className={styles.title}>{document.pageTitle}</h1>
        <p className={styles.subtitle}>{document.pageSubtitle}</p>

        <div className={styles.metaRow}>
          <p className={styles.updated}>
            {document.updatedLabel}: <strong>{document.updatedAt}</strong>
          </p>
          <Button
            href={`/${locale}`}
            variant="outline"
            size="sm"
            rounded="xl"
            className={styles.backHomeButton}
          >
            {document.backHomeLabel}
          </Button>
        </div>
      </Section>

      <Card
        size="xl"
        rounded="2xl"
        padding="2xl"
        className={styles.articleCard}
        align="start"
        justify="start"
      >
        <article className={styles.article}>
          <section className={styles.summary} aria-labelledby="privacy-summary-title">
            <h2 id="privacy-summary-title" className={styles.summaryTitle}>
              {document.summaryTitle}
            </h2>
            <ol className={styles.summaryList}>
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </section>

          {document.sections.map((section) => (
            <section id={section.id} key={section.id} className={styles.section}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <Section
            variant="accent"
            rounded="lg"
            padding="md"
            className={styles.contact}
            align="start"
            justify="start"
          >
            <h3>{document.contactTitle}</h3>
            <p>{document.contactDescription}</p>
            <a className={styles.contactLink} href={`mailto:${document.contactEmail}`}>
              {document.contactEmailLabel}: {document.contactEmail}
            </a>
          </Section>
        </article>
      </Card>
    </>
  );
}
