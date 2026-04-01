import type { TranslationDictionary } from "@/locales/pt";

export const en: TranslationDictionary = {
	common: {
		language: "Language",
		portuguese: "Portuguese",
		english: "English",
	},
	header: {
		howItWorks: "How it works",
		templates: "Templates",
		faq: "FAQ",
		signIn: "Sign in",
		startNow: "Start now",
	},
	footer: {
		tagline: "GitHub profile README generator.",
		madeBy: "Made by",
		privacy: "Privacy",
		github: "GitHub",
	},
	landing: {
		hero: {
			title: "Turn your GitHub profile into a professional showcase",
			description:
				"Markly simplifies profile README creation with smart templates, guided editing, and real-time preview so you can publish faster with quality and visual consistency.",
			startNow: "Start now",
			howItWorks: "How it works",
		},
		howItWorks: {
			title: "How it works",
			description: "A simple three-step flow to build your professional README.",
			step1: {
				title: "Choose a template",
				description: "Pick a layout aligned with your professional goals.",
			},
			step2: {
				title: "Customize in minutes",
				description: "Edit texts, sections, and highlights with instant preview.",
			},
			step3: {
				title: "Export and publish",
				description: "Copy the markdown and update your GitHub profile in one click.",
			},
		},
		cta: {
			title: "Ready to level up your GitHub profile?",
			description: "Create your README with a professional standard and present your work with more clarity.",
			createReadme: "Create my README",
			viewTemplates: "View templates",
		},
	},
	features: {
		eyebrow: "Markly features",
		title: "The right platform to highlight your GitHub profile",
		description:
			"Bring together guided writing, real-time preview, and strategic templates in a simple flow to publish with confidence.",
		ariaLabel: "Available Markly features",
		items: {
			editorGuided: {
				label: "Guided editor",
				summary: "A ready structure so you can fill in without getting stuck.",
				badge: "Assisted flow",
				cardTitle: "Write with direction without starting from scratch",
				cardDescription:
					"Markly organizes your content by blocks and shows what is missing to keep your README complete and objective.",
				bullets: [
					"Sections with clear purpose",
					"Context-aware fields",
					"Less writing rework",
				],
			},
			realTimePreview: {
				label: "Real-time preview",
				summary: "See the result as you edit each section.",
				badge: "Immediate feedback",
				cardTitle: "Track the final look with every tweak",
				cardDescription:
					"Every change appears instantly in preview so you can review layout, hierarchy, and readability before publishing.",
				bullets: [
					"Instant updates",
					"Safer final review",
					"Visual consistency across sections",
				],
			},
			strategicTemplates: {
				label: "Strategic templates",
				summary: "Templates designed for professional goals.",
				badge: "Validated baseline",
				cardTitle: "Pick the right template for your current stage",
				cardDescription:
					"Use a baseline aligned with your profile, personalize it quickly, and keep a clearer positioning for recruiters.",
				bullets: [
					"Focus on clarity and impact",
					"Fast adaptation to your profile",
					"Structure ready for professional highlights",
				],
			},
		},
	},
};
