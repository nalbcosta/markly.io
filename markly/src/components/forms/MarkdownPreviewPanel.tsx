import { Button } from "@/components/Button/Button";
import styles from "./MarkdownPreviewPanel.module.css";

export type PreviewMode = "compiled" | "markdown";

type MarkdownPreviewPanelProps = {
  title: string;
  description: string;
  compiledLabel: string;
  markdownLabel: string;
  copyLabel: string;
  copiedLabel: string;
  downloadLabel?: string;
  emptyStateLabel: string;
  previewMode: PreviewMode;
  markdown: string;
  compiledHtml: string;
  hasCopied: boolean;
  onPreviewModeChange: (mode: PreviewMode) => void;
  onCopy: () => void;
  onDownload?: () => void;
};

export function MarkdownPreviewPanel({
  title,
  description,
  compiledLabel,
  markdownLabel,
  copyLabel,
  copiedLabel,
  downloadLabel,
  emptyStateLabel,
  previewMode,
  markdown,
  compiledHtml,
  hasCopied,
  onPreviewModeChange,
  onCopy,
  onDownload,
}: MarkdownPreviewPanelProps) {
  const hasContent = markdown.trim().length > 0;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.buttonGroup}>
          <Button type="button" size="sm" rounded="sm" variant="outline" onClick={onCopy}>
            {hasCopied ? copiedLabel : copyLabel}
          </Button>
          {onDownload && (
            <Button type="button" size="sm" rounded="sm" variant="outline" onClick={onDownload}>
              {downloadLabel || "Download"}
            </Button>
          )}
        </div>
      </header>

      <div className={styles.modeSwitch} role="tablist" aria-label={title}>
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === "compiled"}
          className={`${styles.modeButton} ${previewMode === "compiled" ? styles.modeButtonActive : ""}`}
          onClick={() => onPreviewModeChange("compiled")}
        >
          {compiledLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === "markdown"}
          className={`${styles.modeButton} ${previewMode === "markdown" ? styles.modeButtonActive : ""}`}
          onClick={() => onPreviewModeChange("markdown")}
        >
          {markdownLabel}
        </button>
      </div>

      <div className={styles.previewSurface}>
        {previewMode === "compiled" ? (
          hasContent ? (
            <article
              className={`${styles.compiledMarkdown} markdown-output`}
              dangerouslySetInnerHTML={{ __html: compiledHtml }}
            />
          ) : (
            <p className={styles.emptyState}>{emptyStateLabel}</p>
          )
        ) : (
          <pre className={`${styles.rawMarkdown} code-block`}>
            <code>{hasContent ? markdown : emptyStateLabel}</code>
          </pre>
        )}
      </div>
    </section>
  );
}