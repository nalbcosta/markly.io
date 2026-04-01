import {
	FIELD_DEFINITIONS,
	TEMPLATE_BLUEPRINTS,
	type BaseFieldId,
	type EditorFieldType,
	type TemplateId,
} from "@/data/editorTemplates";

export type Translate = (key: string) => string;

const identityTranslate: Translate = (key) => key;

export type TemplateOption = {
	id: TemplateId;
	name: string;
	description: string;
};

export type EditorField = {
	id: string;
	definitionId: BaseFieldId | null;
	type: EditorFieldType;
	label: string;
	placeholder: string;
	value: string;
	isCustom: boolean;
};

function createStableFieldId(templateId: TemplateId, definitionId: BaseFieldId, index: number) {
	return `${templateId}-${definitionId}-${index}`;
}

export function getTemplateOptions(t: Translate): TemplateOption[] {
	return TEMPLATE_BLUEPRINTS.map((template) => ({
		id: template.id,
		name: t(`editor.templates.${template.id}.name`),
		description: t(`editor.templates.${template.id}.description`),
	}));
}

export function createFieldsFromTemplate(templateId: TemplateId, t: Translate = identityTranslate): EditorField[] {
	const template = TEMPLATE_BLUEPRINTS.find((item) => item.id === templateId) ?? TEMPLATE_BLUEPRINTS[0];

	return template.fieldBlueprints.map((blueprint, index) => {
		const definition = FIELD_DEFINITIONS[blueprint.id];

		return {
			id: createStableFieldId(template.id, blueprint.id, index),
			definitionId: blueprint.id,
			type: blueprint.type,
			label: t(definition.labelKey),
			placeholder: t(definition.placeholderKey),
			value: "",
			isCustom: false,
		};
	});
}

export function relocalizeFields(fields: EditorField[], t: Translate): EditorField[] {
	return fields.map((field) => {
		if (field.isCustom || !field.definitionId) {
			return field;
		}

		const definition = FIELD_DEFINITIONS[field.definitionId];

		return {
			...field,
			label: t(definition.labelKey),
			placeholder: t(definition.placeholderKey),
			type: definition.type,
		};
	});
}

export function createCustomField(
	customId: string,
	label: string,
	type: EditorFieldType,
	t: Translate = identityTranslate,
): EditorField {
	return {
		id: `custom-${customId}`,
		definitionId: null,
		type,
		label,
		placeholder: t("editor.customFieldPlaceholder"),
		value: "",
		isCustom: true,
	};
}

function normalizeLineBreaks(value: string): string {
	return value.replace(/\r\n/g, "\n").trim();
}

export function buildMarkdown(fields: EditorField[], fallbackTitle: string): string {
	const titleField = fields.find((field) => field.definitionId === "title");
	const titleValue = titleField ? normalizeLineBreaks(titleField.value) : "";
	const resolvedTitle = titleValue.length > 0 ? titleValue : fallbackTitle;

	const sections = fields
		.filter((field) => field.definitionId !== "title")
		.map((field) => {
			const content = normalizeLineBreaks(field.value);
			return {
				label: field.label,
				content,
			};
		})
		.filter((section) => section.content.length > 0);

	const lines: string[] = [`# ${resolvedTitle}`, ""];

	for (const section of sections) {
		lines.push(`## ${section.label}`);
		lines.push(section.content);
		lines.push("");
	}

	return lines.join("\n").trimEnd();
}
