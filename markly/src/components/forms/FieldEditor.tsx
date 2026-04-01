import { Button } from "@/components/Button/Button";
import type { EditorField } from "@/services/templateService";
import styles from "./FieldEditor.module.css";

type FieldEditorProps = {
  field: EditorField;
  removeLabel: string;
  onValueChange: (fieldId: string, nextValue: string) => void;
  onRemove: (fieldId: string) => void;
};

export function FieldEditor({ field, removeLabel, onValueChange, onRemove }: FieldEditorProps) {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <label htmlFor={field.id} className={styles.label}>
          {field.label}
        </label>

        <Button
          type="button"
          size="sm"
          variant="ghost"
          rounded="sm"
          className={styles.removeButton}
          onClick={() => onRemove(field.id)}
        >
          {removeLabel}
        </Button>
      </div>

      {field.type === "textarea" ? (
        <textarea
          id={field.id}
          className={styles.textarea}
          value={field.value}
          placeholder={field.placeholder}
          onChange={(event) => onValueChange(field.id, event.target.value)}
          rows={5}
        />
      ) : (
        <input
          id={field.id}
          className={styles.input}
          value={field.value}
          placeholder={field.placeholder}
          onChange={(event) => onValueChange(field.id, event.target.value)}
          type="text"
        />
      )}
    </article>
  );
}