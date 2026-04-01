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
		features: "Features",
		faq: "FAQ",
		signIn: "Sign in",
		startNow: "Start now",
		toggleTheme: "Toggle theme",
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
			description: "Three focused steps to move from draft to a README that communicates real value.",
			step1: {
				title: "Choose a strategic baseline",
				description: "Start from a template built for your current professional goals and save time from the first edit.",
			},
			step2: {
				title: "Customize with live preview",
				description: "Refine content, hierarchy, and highlights while seeing the final output update in real time.",
			},
			step3: {
				title: "Publish with confidence",
				description: "Copy the final markdown and update your GitHub profile in a few clicks with minimal rework.",
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
	faq: {
		title: "Frequently asked questions",
		description: "Answers to common questions about Markly.",
		items: [
			{
				question: "How do I get started?",
				answer:
					"Just click 'Start now' to access the editor. Choose a template, customize your content, and see the result in real-time. When you're ready, copy the markdown and publish it on your GitHub.",
			},
			{
				question: "Can I export my README?",
				answer:
					"Yes! Markly lets you copy the generated markdown to take anywhere. You can use it on GitHub, GitLab, or share it with others.",
			},
			{
				question: "Are my files saved?",
				answer:
					"Markly automatically saves your work as you edit so you don't lose any changes. You can continue where you left off.",
			},
			{
				question: "What are the limitations?",
				answer:
					"Markly was designed to create GitHub profile READMEs. For project documentation, you can use any editor, but we recommend using Markly's foundation as your starting point.",
			},
			{
				question: "Is it safe to use Markly?",
				answer:
					"Yes, security is a priority. Your data is processed securely and privately. We don't share information with third parties.",
			},
		],
	},
};
