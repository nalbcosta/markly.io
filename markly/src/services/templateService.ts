import {
	FIELD_DEFINITIONS,
	TEMPLATE_BLUEPRINTS,
	type BaseFieldId,
	type EditorFieldType,
	type TemplateId,
} from "@/data/editorTemplates";
import { ALL_BADGES, STAT_WIDGETS } from "@/data/icons";

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

function renderBadgeList(badgeIds: string): string {
	const ids = badgeIds.split(",").map((id) => id.trim()).filter((id) => id.length > 0);
	const badgeMarkdown = ids
		.map((id) => {
			const badge = ALL_BADGES.find((b) => b.id === id);
			if (!badge) return "";
			const shieldsUrl = badge.shieldsUrl("for-the-badge");
			return `[![${badge.name}](${shieldsUrl})](https://github.com)`;
		})
		.filter((md) => md.length > 0)
		.join(" ");

	return badgeMarkdown.length > 0
		? `<div align="center">\n${badgeMarkdown}\n</div>`
		: "";
}

function renderStatWidget(widgetId: string): string {
	const widget = STAT_WIDGETS.find((w) => w.id === widgetId);
	return widget ? widget.markdown() : "";
}

export function buildMarkdown(fields: EditorField[], fallbackTitle: string): string {
	const titleField = fields.find((field) => field.definitionId === "title");
	const titleValue = titleField ? normalizeLineBreaks(titleField.value) : "";
	const resolvedTitle = titleValue.length > 0 ? titleValue : fallbackTitle;

	const sections: string[] = [`# ${resolvedTitle}`, ""];

	for (const field of fields) {
		if (field.definitionId === "title") {
			continue;
		}

		const content = normalizeLineBreaks(field.value);
		if (content.length === 0) {
			continue;
		}

		if (field.type === "markdown") {
			// Raw markdown passthrough, no heading
			sections.push(content);
			sections.push("");
		} else if (field.type === "image-url") {
			// Centered image
			sections.push(`<div align="center"><img src="${content}" width="100%" alt="${field.label}" /></div>`);
			sections.push("");
		} else if (field.type === "badge-list") {
			// Render badges
			const badgeMarkdown = renderBadgeList(content);
			if (badgeMarkdown.length > 0) {
				sections.push(badgeMarkdown);
				sections.push("");
			}
		} else if (field.type === "stat-widget") {
			// Render stat widget
			const widgetMarkdown = renderStatWidget(content);
			if (widgetMarkdown.length > 0) {
				sections.push(widgetMarkdown);
				sections.push("");
			}
		} else {
			// Default: text / textarea — add section heading
			sections.push(`## ${field.label}`);
			sections.push(content);
			sections.push("");
		}
	}

	return sections.join("\n").trimEnd();
}
