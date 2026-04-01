export type EditorFieldType = "text" | "textarea";

export type BaseFieldId =
  | "title"
  | "subtitle"
  | "about"
  | "skills"
  | "stack"
  | "projects"
  | "experience"
  | "contact"
  | "cta";

export type TemplateId = "profile" | "maintainer" | "freelancer";

export type TemplateFieldBlueprint = {
  id: BaseFieldId;
  type: EditorFieldType;
};

export type TemplateBlueprint = {
  id: TemplateId;
  fieldBlueprints: TemplateFieldBlueprint[];
};

export type FieldDefinition = {
  id: BaseFieldId;
  type: EditorFieldType;
  labelKey: string;
  placeholderKey: string;
};

export const FIELD_DEFINITIONS: Record<BaseFieldId, FieldDefinition> = {
  title: {
    id: "title",
    type: "text",
    labelKey: "editor.fields.title.label",
    placeholderKey: "editor.fields.title.placeholder",
  },
  subtitle: {
    id: "subtitle",
    type: "text",
    labelKey: "editor.fields.subtitle.label",
    placeholderKey: "editor.fields.subtitle.placeholder",
  },
  about: {
    id: "about",
    type: "textarea",
    labelKey: "editor.fields.about.label",
    placeholderKey: "editor.fields.about.placeholder",
  },
  skills: {
    id: "skills",
    type: "textarea",
    labelKey: "editor.fields.skills.label",
    placeholderKey: "editor.fields.skills.placeholder",
  },
  stack: {
    id: "stack",
    type: "textarea",
    labelKey: "editor.fields.stack.label",
    placeholderKey: "editor.fields.stack.placeholder",
  },
  projects: {
    id: "projects",
    type: "textarea",
    labelKey: "editor.fields.projects.label",
    placeholderKey: "editor.fields.projects.placeholder",
  },
  experience: {
    id: "experience",
    type: "textarea",
    labelKey: "editor.fields.experience.label",
    placeholderKey: "editor.fields.experience.placeholder",
  },
  contact: {
    id: "contact",
    type: "textarea",
    labelKey: "editor.fields.contact.label",
    placeholderKey: "editor.fields.contact.placeholder",
  },
  cta: {
    id: "cta",
    type: "text",
    labelKey: "editor.fields.cta.label",
    placeholderKey: "editor.fields.cta.placeholder",
  },
};

export const TEMPLATE_BLUEPRINTS: TemplateBlueprint[] = [
  {
    id: "profile",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "maintainer",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "about", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "cta", type: "text" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "freelancer",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "experience", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
];