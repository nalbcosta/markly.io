"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { useTemplatesMode } from "@/hooks/useTemplatesMode";
import { useTemplateList } from "@/hooks/useTemplateList";
import { paginate } from "@/utils/pagination";
import { Card } from "@/components/Card/Card";
import { Input } from "@/components/Input/Input";
import { TemplatePreviewThumbnail } from "@/components/forms/TemplatePreviewThumbnail";
import { Section } from "@/components/sections/Section";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Pagination } from "@/components/layout/Pagination";
import { type TemplateId } from "@/data/editorTemplates";
import { useLocale } from "@/hooks/useLocale";
import styles from "./page.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PAGE_SIZE = 6;

export default function TemplatesPage() {
  const { t, locale } = useLocale();
  const { mode, setMode } = useTemplatesMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTemplates = useTemplateList(t, searchTerm);
  const { items: pagedTemplates, totalPages, safeCurrentPage } = paginate(filteredTemplates, currentPage, PAGE_SIZE);

  const editorRoute = `/${locale}/editor`;

  const handleModeChange = (nextMode: typeof mode) => {
    setCurrentPage(1);
    setMode(nextMode);
  };

  const buildTemplateRoute = (templateId: TemplateId) => {
    return `${editorRoute}?template=${templateId}`;
  };

  const browseTitle = mode === "start" ? t("templatesPage.startTitle") : t("templatesPage.title");
  const browseDescription = mode === "start"
    ? t("templatesPage.startDescription")
    : t("templatesPage.description");

  return (
    <PageWrapper
      as="main"
      width="content"
      verticalPadding="sm"
      withHeaderOffset
      minViewportHeight
    >
      <Section 
        variant="primary"
        rounded="2xl"
        padding="lg"
        size="xl"
        align="start"
        justify="start"
        className={styles.hero}
      >
        <div className={styles.heroContent}>
          <h1 className="ui-title">{browseTitle}</h1>
          <p className="ui-text">{browseDescription}</p>
        </div>

        <div className={styles.modeSwitch} role="tablist" aria-label={t("templatesPage.modeAriaLabel")}>
          <Button
            type="button"
            role="tab"
            aria-selected={mode === "browse"}
            variant={mode === "browse" ? "primary" : "ghost"}
            size="md"
            rounded="lg"
            className={styles.modeButton}
            onClick={() => handleModeChange("browse")}
          >
            {t("templatesPage.modeBrowse")}
          </Button>
          <Button
            type="button"
            role="tab"
            aria-selected={mode === "start"}
            variant={mode === "start" ? "primary" : "ghost"}
            size="md"
            rounded="lg"
            className={styles.modeButton}
            onClick={() => handleModeChange("start")}
          >
            {t("templatesPage.modeStart")}
          </Button>
        </div>
      </Section>

      <Section
        size="xl"
        variant="accent"
        padding="sm"
        rounded="2xl"
        align="start"
        justify="start"
        borderless="none"
        background="none"
        shadow="none"
        className={styles.toolbar}
      >
        <Input
          type="search"
          label={t("templatesPage.searchLabel")}
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setCurrentPage(1);
          }}
          placeholder={t("templatesPage.searchPlaceholder")}
          rounded="lg"
          className={styles.searchField}
        />
        <p className={styles.resultsInfo} title={t("templatesPage.resultsCountLabel")}>
          {filteredTemplates.length}
        </p>
      </Section>

      {mode === "start" ? (
        <Card size="xl" rounded="2xl" align="start" justify="start" padding="lg" className={styles.zeroCard}>
          <div className="flex-col">
            <h2>{t("templatesPage.blankTitle")}</h2>
            <p>{t("templatesPage.blankDescription")}</p>
          </div>
          <Button route={`${editorRoute}?blank=1`} size="md" variant="primary" rounded="lg">
            {t("templatesPage.blankAction")}
          </Button>
        </Card>
      ) : null}

      {pagedTemplates.length === 0 ? (
        <Card size="xl" rounded="2xl" align="start" justify="start" padding="lg" className={styles.emptyState}>
          <h2>{t("templatesPage.emptyTitle")}</h2>
          <p>{t("templatesPage.emptyDescription")}</p>
        </Card>
      ) : (
        <Section 
          borderless="none"
          shadow="none"
          background="none"
          size="xl"
          padding="none"
          className={styles.grid}
        >
          {pagedTemplates.map((template) => (
            <Card
              key={template.id}
              size="xl"
              rounded="2xl"
              justify="start"
              align="start"
              className={styles.templateCard}
            >
              <TemplatePreviewThumbnail
                templateId={template.id}
                templateName={template.name}
                previewAltLabel={t("templatesPage.previewAlt")}
              />

              <div className={styles.cardHeader}>
                <h2>{template.name}</h2>
                <span>{template.fieldCount} {t("templatesPage.fieldsCountLabel")}</span>
              </div>

              <p>{template.description}</p>

              <Button
                route={buildTemplateRoute(template.id)}
                variant={mode === "start" ? "primary" : "outline"}
                rounded="md"
              >
                {mode === "start" ? t("templatesPage.useTemplateAction") : t("templatesPage.openTemplateAction")}
              </Button>
            </Card>
          ))}
        </Section>
      )}

      <Pagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        iconButtons
        prevLabel = <MdChevronLeft/>
        nextLabel = <MdChevronRight/>
        align="center"
        className={styles.pagination}
        ariaLabel={t("templatesPage.paginationAriaLabel")}
        pageInfo={(current, total) => `${current} / ${total}`}
      />
    </PageWrapper>
  );
}
