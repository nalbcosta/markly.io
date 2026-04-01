import Image from "next/image";
import { type TemplateId } from "@/data/editorTemplates";
import styles from "./TemplatePreviewThumbnail.module.css";

type TemplatePreviewThumbnailProps = {
  templateId: TemplateId;
  templateName: string;
  previewAltLabel: string;
};

const previewByTemplate: Record<TemplateId, string> = {
  profile: "/template-previews/profile.svg",
  maintainer: "/template-previews/maintainer.svg",
  freelancer: "/template-previews/freelancer.svg",
};

export function TemplatePreviewThumbnail({ templateId, templateName, previewAltLabel }: TemplatePreviewThumbnailProps) {
  const src = previewByTemplate[templateId];

  return (
    <figure className={styles.frame}>
      <Image
        src={src}
        alt={`${templateName} - ${previewAltLabel}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
        className={styles.image}
      />
    </figure>
  );
}
