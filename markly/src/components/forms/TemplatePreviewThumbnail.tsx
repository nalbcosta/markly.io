import { type TemplateId, TEMPLATE_SAMPLE_MARKDOWN } from "@/data/editorTemplates";
import { renderMarkdownToHtml } from "@/utils/renderMarkdown";
import styles from "./TemplatePreviewThumbnail.module.css";

type TemplatePreviewThumbnailProps = {
  templateId: TemplateId;
  templateName: string;
  previewAltLabel: string;
};

export function TemplatePreviewThumbnail({ templateId, templateName, previewAltLabel }: TemplatePreviewThumbnailProps) {
  const html = renderMarkdownToHtml(TEMPLATE_SAMPLE_MARKDOWN[templateId]);

  return (
    <figure className={styles.frame} aria-label={`${templateName} - ${previewAltLabel}`} title={templateName}>
      <div
        className={`${styles.previewScaler} markdown-output`}
        dangerouslySetInnerHTML={{ __html: html }}
        aria-hidden="true"
      />
    </figure>
  );
}
