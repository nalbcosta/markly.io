import type { TemplateOption } from "@/services/templateService";
import styles from "./TemplateSelector.module.css";

type TemplateSelectorProps = {
  title: string;
  description: string;
  label: string;
  selectedTemplateId: string;
  options: TemplateOption[];
  onTemplateChange: (templateId: string) => void;
};

export function TemplateSelector({
  title,
  description,
  label,
  selectedTemplateId,
  options,
  onTemplateChange,
}: TemplateSelectorProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <label htmlFor="template-selector" className={styles.label}>
        {label}
      </label>

      <select
        id="template-selector"
        value={selectedTemplateId}
        onChange={(event) => onTemplateChange(event.target.value)}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <p className={styles.templateDescription}>
        {options.find((option) => option.id === selectedTemplateId)?.description ?? ""}
      </p>
    </section>
  );
}