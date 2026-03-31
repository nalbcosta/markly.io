"use client";

import { useMemo, useState } from "react";
import type { IconType } from "react-icons";
import { FiCheckCircle, FiEdit3, FiEye, FiLayout } from "react-icons/fi";
import { Section } from "./Section";
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

const featureItems: FeatureItem[] = [
  {
    id: "editor-guiado",
    label: "Editor guiado",
    summary: "Estrutura pronta para você preencher sem travar.",
    icon: FiEdit3,
    badge: "Fluxo assistido",
    cardTitle: "Escreva com direção, sem começar do zero",
    cardDescription:
      "O Markly organiza o conteúdo por blocos e mostra o que falta para o seu README ficar completo e objetivo.",
    bullets: [
      "Seções com propósito claro",
      "Campos orientados por contexto",
      "Menos retrabalho na escrita",
    ],
  },
  {
    id: "preview-tempo-real",
    label: "Preview em tempo real",
    summary: "Veja o resultado enquanto edita cada seção.",
    icon: FiEye,
    badge: "Feedback imediato",
    cardTitle: "Acompanhe o visual final a cada ajuste",
    cardDescription:
      "Cada alteração aparece instantaneamente no preview para você revisar layout, hierarquia e legibilidade antes de publicar.",
    bullets: [
      "Atualização instantânea",
      "Leitura final com mais segurança",
      "Consistência visual entre seções",
    ],
  },
  {
    id: "templates-estrategicos",
    label: "Templates estratégicos",
    summary: "Modelos pensados para objetivos profissionais.",
    icon: FiLayout,
    badge: "Base validada",
    cardTitle: "Escolha o template ideal para seu momento",
    cardDescription:
      "Use uma base alinhada ao seu perfil, personalize com facilidade e mantenha um posicionamento mais claro para recrutadores.",
    bullets: [
      "Foco em clareza e impacto",
      "Adaptação rápida ao seu perfil",
      "Estrutura pronta para destaque profissional",
    ],
  },
];

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function FeatureHighlightsSection({ id, className }: FeatureHighlightsSectionProps) {
  const [activeFeatureId, setActiveFeatureId] = useState(featureItems[0].id);

  const activeFeature = useMemo(
    () => featureItems.find((item) => item.id === activeFeatureId) ?? featureItems[0],
    [activeFeatureId],
  );
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
      rounded="xl"
      variant="default"
      padding="lg"
      align="start"
      justify="center"
      className={cx(styles.section, className)}
    >
      <div className={styles.layout}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Recursos do Markly</span>
          <h2 className="ui-title">A plataforma certa para destacar seu perfil no GitHub</h2>
          <p className="ui-text text-secondary">
            Reúna escrita guiada, preview em tempo real e templates estratégicos em um fluxo simples para publicar com qualidade.
          </p>

          <div className={styles.stateList} role="tablist" aria-label="Recursos disponíveis do Markly">
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
