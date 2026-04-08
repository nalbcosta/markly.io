import { useMemo } from "react";
import { TEMPLATE_BLUEPRINTS, type TemplateId } from "@/data/editorTemplates";
import { getTemplateOptions } from "@/services/templateService";
export type TemplateCard = {
  id: TemplateId;
  name: string;
  description: string;
  fieldCount: number;
};

export function useTemplateList(t: (key: string) => string, searchTerm: string): TemplateCard[] {
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

  return useMemo(() => {
    const normalized = searchTerm.trim().toLocaleLowerCase();
    if (normalized.length === 0) return templates;

    return templates.filter((template) => {
      const searchable = `${template.name} ${template.description}`.toLocaleLowerCase();
      return searchable.includes(normalized);
    });
  }, [searchTerm, templates]);
}
