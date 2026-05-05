import { Button } from "@/components/Button/Button";
import { ALL_BADGES, STAT_WIDGETS } from "@/data/icons";
import type { EditorField } from "@/services/templateService";
import styles from "./FieldEditor.module.css";

type FieldEditorProps = {
  field: EditorField;
  removeLabel: string;
  onValueChange: (fieldId: string, nextValue: string) => void;
  onRemove: (fieldId: string) => void;
};

export function FieldEditor({ field, removeLabel, onValueChange, onRemove }: FieldEditorProps) {
  const selectedBadgeIds = field.value.split(",").map((id) => id.trim()).filter((id) => id.length > 0);
  const badgesByCategory = ALL_BADGES.reduce(
    (acc, badge) => {
      if (!acc[badge.category]) acc[badge.category] = [];
      acc[badge.category].push(badge);
      return acc;
    },
    {} as Record<string, (typeof ALL_BADGES)[number][]>,
  );

  const handleBadgeToggle = (badgeId: string) => {
    const newIds = selectedBadgeIds.includes(badgeId)
      ? selectedBadgeIds.filter((id) => id !== badgeId)
      : [...selectedBadgeIds, badgeId];
    onValueChange(field.id, newIds.join(", "));
  };

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

      {field.type === "markdown" || field.type === "textarea" ? (
        <textarea
          id={field.id}
          className={styles.textarea}
          value={field.value}
          placeholder={field.placeholder}
          onChange={(event) => onValueChange(field.id, event.target.value)}
          rows={5}
        />
      ) : field.type === "image-url" ? (
        <>
          <input
            id={field.id}
            className={styles.input}
            type="url"
            value={field.value}
            placeholder={field.placeholder}
            onChange={(event) => onValueChange(field.id, event.target.value)}
          />
          {field.value && (
            <img src={field.value} alt={field.label} className={styles.imagePreview} />
          )}
        </>
      ) : field.type === "badge-list" ? (
        <>
          {selectedBadgeIds.length > 0 && (
            <div className={styles.badgeChipList}>
              {selectedBadgeIds.map((badgeId) => {
                const badge = ALL_BADGES.find((b) => b.id === badgeId);
                return (
                  <button
                    key={badgeId}
                    type="button"
                    className={styles.badgeChip}
                    style={{ backgroundColor: badge?.color || "#999" }}
                    onClick={() => handleBadgeToggle(badgeId)}
                    title={`Remove ${badge?.name}`}
                  >
                    {badge?.name}
                  </button>
                );
              })}
            </div>
          )}
          <div className={styles.badgeGrid}>
            {Object.entries(badgesByCategory).map(([category, badges]) => (
              <div key={category} className={styles.badgeCategory}>
                <h4 className={styles.badgeCategoryLabel}>{category}</h4>
                <div className={styles.badgeButtonRow}>
                  {badges.map((badge) => (
                    <button
                      key={badge.id}
                      type="button"
                      className={`${styles.badgeButton} ${selectedBadgeIds.includes(badge.id) ? styles.badgeButtonActive : ""}`}
                      style={
                        selectedBadgeIds.includes(badge.id)
                          ? { backgroundColor: badge.color, color: "#fff" }
                          : { borderColor: badge.color, color: badge.color }
                      }
                      onClick={() => handleBadgeToggle(badge.id)}
                    >
                      {badge.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : field.type === "stat-widget" ? (
        <div className={styles.widgetGrid}>
          {STAT_WIDGETS.map((widget) => (
            <button
              key={widget.id}
              type="button"
              className={`${styles.widgetCard} ${field.value === widget.id ? styles.widgetCardActive : ""}`}
              onClick={() => onValueChange(field.id, widget.id)}
            >
              <div className={styles.widgetName}>{widget.name}</div>
              <div className={styles.widgetDescription}>{widget.description}</div>
            </button>
          ))}
        </div>
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