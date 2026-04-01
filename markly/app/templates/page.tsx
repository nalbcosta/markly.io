"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { TemplatePreviewThumbnail } from "@/components/forms/TemplatePreviewThumbnail";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { TEMPLATE_BLUEPRINTS, type TemplateId } from "@/data/editorTemplates";
import { useLocale } from "@/hooks/useLocale";
import { getTemplateOptions } from "@/services/templateService";
import styles from "./page.module.css";

type TemplatesPageMode = "browse" | "start";

type TemplateCard = {
  id: TemplateId;
  name: string;
  description: string;
  fieldCount: number;
};

const PAGE_SIZE = 6;

function parseMode(value: string | null): TemplatesPageMode {
  return value === "start" ? "start" : "browse";
}

type SearchParamsLike = {
  toString: () => string;
};

function createModeUrl(pathname: string, searchParams: SearchParamsLike, nextMode: TemplatesPageMode): string {
  const nextParams = new URLSearchParams(searchParams.toString());

  if (nextMode === "start") {
    nextParams.set("mode", "start");
  } else {
    nextParams.delete("mode");
  }

  const query = nextParams.toString();
  return query.length > 0 ? `${pathname}?${query}` : pathname;
}

export default function TemplatesPage() {
  const { t, locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const mode = parseMode(searchParams.get("mode"));
  const templateOptions = useMemo(() => getTemplateOptions(t), [t]);

  const templates = useMemo<TemplateCard[]>(() => {
    return templateOptions.map((option) => {
      const blueprint = TEMPLATE_BLUEPRINTS.find((item) => item.id === option.id);
      return {
        id: option.id,
        name: option.name,
        description: option.description,
        fieldCount: blueprint?.fieldBlueprints.length ?? 0,
      };
    });
  }, [templateOptions]);

  const normalizedSearch = searchTerm.trim().toLocaleLowerCase();

  const filteredTemplates = useMemo(() => {
    if (normalizedSearch.length === 0) {
      return templates;
    }

    return templates.filter((template) => {
      const searchable = `${template.name} ${template.description}`.toLocaleLowerCase();
      return searchable.includes(normalizedSearch);
    });
  }, [normalizedSearch, templates]);

  const totalPages = Math.max(1, Math.ceil(filteredTemplates.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart = (safeCurrentPage - 1) * PAGE_SIZE;

  const pagedTemplates = useMemo(() => {
    return filteredTemplates.slice(pageStart, pageStart + PAGE_SIZE);
  }, [filteredTemplates, pageStart]);

  const editorRoute = `/${locale}/editor`;

  const handleModeChange = (nextMode: TemplatesPageMode) => {
    if (nextMode === mode) {
      return;
    }

    setCurrentPage(1);
    const nextUrl = createModeUrl(pathname, searchParams, nextMode);
    router.replace(nextUrl);
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
      className={styles.page}
    >
      <section className={styles.hero}>
        <h1 className="ui-title">{browseTitle}</h1>
        <p className="ui-text">{browseDescription}</p>

        <div className={styles.modeSwitch} role="tablist" aria-label={t("templatesPage.modeAriaLabel")}>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "browse"}
            className={`${styles.modeButton} ${mode === "browse" ? styles.modeButtonActive : ""}`}
            onClick={() => handleModeChange("browse")}
          >
            {t("templatesPage.modeBrowse")}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "start"}
            className={`${styles.modeButton} ${mode === "start" ? styles.modeButtonActive : ""}`}
            onClick={() => handleModeChange("start")}
          >
            {t("templatesPage.modeStart")}
          </button>
        </div>
      </section>

      <section className={styles.toolbar}>
        <label className={styles.searchField}>
          <span>{t("templatesPage.searchLabel")}</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setCurrentPage(1);
            }}
            placeholder={t("templatesPage.searchPlaceholder")}
          />
        </label>

        <p className={styles.resultsInfo}>
          {filteredTemplates.length} {t("templatesPage.resultsCountLabel")}
        </p>
      </section>

      {mode === "start" ? (
        <Card size="xl" rounded="xl" align="start" justify="start" className={styles.zeroCard}>
          <h2>{t("templatesPage.blankTitle")}</h2>
          <p>{t("templatesPage.blankDescription")}</p>
          <Button route={`${editorRoute}?blank=1`} variant="secondary" rounded="md">
            {t("templatesPage.blankAction")}
          </Button>
        </Card>
      ) : null}

      {pagedTemplates.length === 0 ? (
        <Card size="xl" rounded="xl" align="start" justify="start" className={styles.emptyState}>
          <h2>{t("templatesPage.emptyTitle")}</h2>
          <p>{t("templatesPage.emptyDescription")}</p>
        </Card>
      ) : (
        <section className={styles.grid}>
          {pagedTemplates.map((template) => (
            <Card
              key={template.id}
              size="xl"
              rounded="xl"
              align="start"
              justify="start"
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
        </section>
      )}

      <section className={styles.pagination} aria-label={t("templatesPage.paginationAriaLabel")}>
        <Button
          type="button"
          variant="ghost"
          rounded="md"
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          disabled={safeCurrentPage === 1}
        >
          {t("templatesPage.previousPage")}
        </Button>

        <span>{t("templatesPage.pageLabel")} {safeCurrentPage} / {totalPages}</span>

        <Button
          type="button"
          variant="ghost"
          rounded="md"
          onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          disabled={safeCurrentPage === totalPages}
        >
          {t("templatesPage.nextPage")}
        </Button>
      </section>
    </PageWrapper>
  );
}
