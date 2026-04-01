"use client";

import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/Button/Button";
import { FiChevronDown } from "react-icons/fi";
import { Section } from "./Section";
import { cx } from "@/utils/utils";
import styles from "./FAQSection.module.css";

type FAQSectionProps = {
  id?: string;
  className?: string;
};

export function FAQSection({ id, className }: FAQSectionProps) {
  const { t, tArray } = useLocale();
  const faqItems = tArray("faq.items") as Array<{ question: string; answer: string }>;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section
      id={id}
      size="half"
      rounded="xl"
      variant="secondary"
      padding="3xl"
      className={cx(styles.section, className)}
      align="center"
      justify="center"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="ui-title">{t("faq.title")}</h2>
          <p className="ui-text text-secondary">{t("faq.description")}</p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item: { question: string; answer: string }, index: number) => (
            <div key={index} className={styles.faqItem}>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                rounded="sm"
                className={styles.questionButton}
                onClick={() => toggleExpanded(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <FiChevronDown
                  className={styles.chevron}
                  style={{
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Button>
              {expandedIndex === index && (
                <div id={`faq-answer-${index}`} className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
