"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { FieldEditor } from "@/components/forms/FieldEditor";
import { MarkdownPreviewPanel, type PreviewMode } from "@/components/forms/MarkdownPreviewPanel";
import { TemplateSelector } from "@/components/forms/TemplateSelector";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { TEMPLATE_BLUEPRINTS, type EditorFieldType, type TemplateId } from "@/data/editorTemplates";
import sections from "@/data/sections.json";
import { useLocale } from "@/hooks/useLocale";
import {
  buildMarkdown,
  createCustomField,
  createFieldsFromTemplate,
  getTemplateOptions,
  relocalizeFields,
  type EditorField,
} from "@/services/templateService";
import { renderMarkdownToHtml } from "@/utils/renderMarkdown";
import styles from "./page.module.css";

const DEFAULT_TEMPLATE_ID: TemplateId = TEMPLATE_BLUEPRINTS[0].id;

function isTemplateId(value: string): value is TemplateId {
  return TEMPLATE_BLUEPRINTS.some((template) => template.id === value);
}

type EditorBootstrapState = {
  templateId: TemplateId;
  fields: EditorField[];
};

type SearchParamsLike = {
  get: (name: string) => string | null;
};

function getEditorBootstrapState(searchParams: SearchParamsLike): EditorBootstrapState {
  const requestedTemplate = searchParams.get("template");
  const shouldStartBlank = searchParams.get("blank") === "1";

  if (shouldStartBlank) {
    return {
      templateId: DEFAULT_TEMPLATE_ID,
      fields: [],
    };
  }

  if (requestedTemplate && isTemplateId(requestedTemplate)) {
    return {
      templateId: requestedTemplate,
      fields: createFieldsFromTemplate(requestedTemplate),
    };
  }

  return {
    templateId: DEFAULT_TEMPLATE_ID,
    fields: createFieldsFromTemplate(DEFAULT_TEMPLATE_ID),
  };
}

export default function MarkdownEditorPage() {
  const { t } = useLocale();
  const searchParams = useSearchParams();
  const [selectedTemplateId, setSelectedTemplateId] = useState<TemplateId>(
    () => getEditorBootstrapState(searchParams).templateId,
  );
  const [fields, setFields] = useState<EditorField[]>(() => getEditorBootstrapState(searchParams).fields);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("compiled");
  const [customFieldLabel, setCustomFieldLabel] = useState("");
  const [customFieldType, setCustomFieldType] = useState<EditorFieldType>("text");
  const [hasCopied, setHasCopied] = useState(false);
  const customFieldCounter = useRef(0);

  const templateOptions = useMemo(() => getTemplateOptions(t), [t]);
  const localizedFields = useMemo(() => relocalizeFields(fields, t), [fields, t]);

  useEffect(() => {
    if (!hasCopied) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHasCopied(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [hasCopied]);

  const markdown = useMemo(
    () => buildMarkdown(localizedFields, t("editor.markdownFallbackTitle")),
    [localizedFields, t],
  );

  const compiledHtml = useMemo(() => renderMarkdownToHtml(markdown), [markdown]);

  const handleTemplateChange = (templateId: string) => {
    if (!isTemplateId(templateId)) {
      return;
    }

    setSelectedTemplateId(templateId);
    setFields(createFieldsFromTemplate(templateId, t));
  };

  const handleFieldValueChange = (fieldId: string, nextValue: string) => {
    setFields((current) =>
      current.map((field) => (field.id === fieldId ? { ...field, value: nextValue } : field)),
    );
  };

  const handleRemoveField = (fieldId: string) => {
    setFields((current) => current.filter((field) => field.id !== fieldId));
  };

  const handleAddCustomField = () => {
    const label = customFieldLabel.trim();

    if (label.length === 0) {
      return;
    }

    customFieldCounter.current += 1;

    setFields((current) => [
      ...current,
      createCustomField(String(customFieldCounter.current), label, customFieldType, t),
    ]);

    setCustomFieldLabel("");
    setCustomFieldType("text");
  };

  const handleCopyMarkdown = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(markdown);
    setHasCopied(true);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleInsertSnippet = (snippet: typeof sections[0]) => {
    customFieldCounter.current += 1;
    setFields((current) => [
      ...current,
      {
        id: `snippet-${customFieldCounter.current}`,
        definitionId: null,
        type: "markdown",
        label: snippet.label,
        placeholder: "",
        value: snippet.markdown,
        isCustom: true,
      },
    ]);
  };

  const snippetsByCategory = useMemo(() => {
    return sections.reduce(
      (acc, snippet) => {
        if (!acc[snippet.category]) acc[snippet.category] = [];
        acc[snippet.category].push(snippet);
        return acc;
      },
      {} as Record<string, (typeof sections)[number][]>,
    );
  }, []);

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
        <h1 className="ui-title">{t("editor.title")}</h1>
        <p className="ui-text">{t("editor.description")}</p>
      </section>

      <section className={styles.grid}>
        <Card size="xl" rounded="xl" align="start" justify="start" className={styles.formCard}>
          <TemplateSelector
            title={t("editor.templateTitle")}
            description={t("editor.templateDescription")}
            label={t("editor.templateLabel")}
            selectedTemplateId={selectedTemplateId}
            options={templateOptions}
            onTemplateChange={handleTemplateChange}
          />

          <section className={styles.customFieldCard}>
            <header className={styles.sectionHeader}>
              <h2>{t("editor.addFieldTitle")}</h2>
              <p>{t("editor.addFieldDescription")}</p>
            </header>

            <div className={styles.customFieldGrid}>
              <div className={styles.controlBlock}>
                <label htmlFor="custom-field-label">{t("editor.fieldNameLabel")}</label>
                <input
                  id="custom-field-label"
                  type="text"
                  className={styles.input}
                  value={customFieldLabel}
                  placeholder={t("editor.fieldNamePlaceholder")}
                  onChange={(event) => setCustomFieldLabel(event.target.value)}
                />
              </div>

              <div className={styles.controlBlock}>
                <label htmlFor="custom-field-type">{t("editor.fieldTypeLabel")}</label>
                <select
                  id="custom-field-type"
                  className={styles.select}
                  value={customFieldType}
                  onChange={(event) => setCustomFieldType(event.target.value as EditorFieldType)}
                >
                  <option value="text">{t("editor.fieldTypeText")}</option>
                  <option value="textarea">{t("editor.fieldTypeTextarea")}</option>
                  <option value="markdown">{t("editor.fieldTypeMarkdown")}</option>
                  <option value="image-url">{t("editor.fieldTypeImageUrl")}</option>
                  <option value="badge-list">{t("editor.fieldTypeBadgeList")}</option>
                  <option value="stat-widget">{t("editor.fieldTypeStatWidget")}</option>
                </select>
              </div>

              <div className={styles.addButtonWrap}>
                <Button
                  type="button"
                  variant="secondary"
                  rounded="md"
                  disabled={customFieldLabel.trim().length === 0}
                  onClick={handleAddCustomField}
                >
                  {t("editor.addFieldAction")}
                </Button>
              </div>
            </div>
          </section>

          <section className={styles.fieldsSection}>
            <header className={styles.sectionHeader}>
              <h2>{t("editor.formTitle")}</h2>
              <p>{t("editor.formDescription")}</p>
            </header>

            {localizedFields.length === 0 ? (
              <p className={styles.emptyFields}>{t("editor.emptyFields")}</p>
            ) : (
              <div className={styles.fieldList}>
                {localizedFields.map((field) => (
                  <FieldEditor
                    key={field.id}
                    field={field}
                    removeLabel={t("editor.removeFieldAction")}
                    onValueChange={handleFieldValueChange}
                    onRemove={handleRemoveField}
                  />
                ))}
              </div>
            )}
          </section>

          <section className={styles.snippetCard}>
            <header className={styles.sectionHeader}>
              <h2>{t("editor.insertSectionTitle")}</h2>
              <p>{t("editor.insertSectionDescription")}</p>
            </header>

            <div className={styles.snippetGrid}>
              {Object.entries(snippetsByCategory).map(([category, snippets]) => (
                <div key={category} className={styles.snippetCategory}>
                  <h3 className={styles.snippetCategoryTitle}>{category}</h3>
                  <div className={styles.snippetButtonGroup}>
                    {snippets.map((snippet) => (
                      <button
                        key={snippet.id}
                        type="button"
                        className={styles.snippetButton}
                        onClick={() => handleInsertSnippet(snippet)}
                        title={snippet.description}
                      >
                        {snippet.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Card>

        <Card size="xl" rounded="xl" align="start" justify="start" className={styles.previewCard}>
          <MarkdownPreviewPanel
            title={t("editor.previewTitle")}
            description={t("editor.previewDescription")}
            compiledLabel={t("editor.previewCompiled")}
            markdownLabel={t("editor.previewMarkdown")}
            copyLabel={t("editor.copyMarkdown")}
            copiedLabel={t("editor.copiedMarkdown")}
            downloadLabel={t("editor.downloadMarkdown")}
            emptyStateLabel={t("editor.emptyPreview")}
            previewMode={previewMode}
            markdown={markdown}
            compiledHtml={compiledHtml}
            hasCopied={hasCopied}
            onPreviewModeChange={setPreviewMode}
            onCopy={handleCopyMarkdown}
            onDownload={handleDownloadMarkdown}
          />
        </Card>
      </section>
    </PageWrapper>
  );
}