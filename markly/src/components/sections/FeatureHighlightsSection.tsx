"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import type { IconType } from "react-icons";
import { FiCheckCircle, FiEdit3, FiEye, FiLayout } from "react-icons/fi";
import { Section } from "./Section";
import { cx } from "@/utils/utils";
import styles from "./FeatureHighlightsSection.module.css";

type FeatureItem = {
  id: string;
  label: string;
  summary: string;
  icon: IconType;
  badge: string;
  cardTitle: string;
  cardDescription: string;
  bullets: string[];
};

type FeatureHighlightsSectionProps = {
  id?: string;
  className?: string;
};

export function FeatureHighlightsSection({ id, className }: FeatureHighlightsSectionProps) {
  const { t } = useLocale();
  const featureItems = useMemo<FeatureItem[]>(
    () => [
      {
        id: "editor-guided",
        label: t("features.items.editorGuided.label"),
        summary: t("features.items.editorGuided.summary"),
        icon: FiEdit3,
        badge: t("features.items.editorGuided.badge"),
        cardTitle: t("features.items.editorGuided.cardTitle"),
        cardDescription: t("features.items.editorGuided.cardDescription"),
        bullets: [
          t("features.items.editorGuided.bullets.0"),
          t("features.items.editorGuided.bullets.1"),
          t("features.items.editorGuided.bullets.2"),
        ],
      },
      {
        id: "real-time-preview",
        label: t("features.items.realTimePreview.label"),
        summary: t("features.items.realTimePreview.summary"),
        icon: FiEye,
        badge: t("features.items.realTimePreview.badge"),
        cardTitle: t("features.items.realTimePreview.cardTitle"),
        cardDescription: t("features.items.realTimePreview.cardDescription"),
        bullets: [
          t("features.items.realTimePreview.bullets.0"),
          t("features.items.realTimePreview.bullets.1"),
          t("features.items.realTimePreview.bullets.2"),
        ],
      },
      {
        id: "strategic-templates",
        label: t("features.items.strategicTemplates.label"),
        summary: t("features.items.strategicTemplates.summary"),
        icon: FiLayout,
        badge: t("features.items.strategicTemplates.badge"),
        cardTitle: t("features.items.strategicTemplates.cardTitle"),
        cardDescription: t("features.items.strategicTemplates.cardDescription"),
        bullets: [
          t("features.items.strategicTemplates.bullets.0"),
          t("features.items.strategicTemplates.bullets.1"),
          t("features.items.strategicTemplates.bullets.2"),
        ],
      },
    ],
    [t],
  );

  const [activeFeatureId, setActiveFeatureId] = useState(featureItems[0].id);

  const activeFeature = featureItems.find((item) => item.id === activeFeatureId) ?? featureItems[0];
  const activeFeatureIndex = featureItems.findIndex((item) => item.id === activeFeature.id);
  const ActiveFeatureIcon = activeFeature.icon;

  const handleTabKeyDown = (index: number, key: string) => {
    if (key !== "ArrowDown" && key !== "ArrowUp" && key !== "ArrowRight" && key !== "ArrowLeft") {
      return;
    }

    const nextIndex =
      key === "ArrowDown" || key === "ArrowRight"
        ? (index + 1) % featureItems.length
        : (index - 1 + featureItems.length) % featureItems.length;

    setActiveFeatureId(featureItems[nextIndex].id);
  };

  return (
    <Section
      id={id}
      size="xl"
      rounded="2xl"
      variant="default"
      padding="xl"
      align="start"
      justify="center"
      className={cx(styles.section, className)}
    >
      <div className={styles.layout}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{t("features.eyebrow")}</span>
          <h2 className="ui-title">{t("features.title")}</h2>
          <p className="ui-text text-secondary">{t("features.description")}</p>

          <div className={styles.stateList} role="tablist" aria-label={t("features.ariaLabel")}>
            {featureItems.map((feature, index) => {
              const isActive = feature.id === activeFeature.id;
              const FeatureIcon = feature.icon;

              return (
                <button
                  key={feature.id}
                  id={`feature-tab-${feature.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="feature-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={cx(styles.stateButton, isActive && styles.stateButtonActive)}
                  onClick={() => setActiveFeatureId(feature.id)}
                  onKeyDown={(event) => handleTabKeyDown(index, event.key)}
                >
                  <span className={styles.stateIconWrap} aria-hidden="true">
                    <FeatureIcon className={styles.stateIcon} />
                  </span>
                  <span>
                    <strong>{feature.label}</strong>
                    <small>{feature.summary}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <article
          key={activeFeature.id}
          id="feature-panel"
          className={styles.previewCard}
          role="tabpanel"
          aria-labelledby={`feature-tab-${featureItems[activeFeatureIndex].id}`}
        >
          <div className={styles.previewVisual} aria-hidden="true">
            <span className={styles.previewBadge}>
              <ActiveFeatureIcon className={styles.previewBadgeIcon} />
              {activeFeature.badge}
            </span>
          </div>

          <h3>{activeFeature.cardTitle}</h3>
          <p>{activeFeature.cardDescription}</p>

          <ul className={styles.previewList}>
            {activeFeature.bullets.map((bullet) => (
              <li key={bullet}>
                <FiCheckCircle className={styles.bulletIcon} aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
