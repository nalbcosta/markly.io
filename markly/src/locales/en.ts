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
	editor: {
		title: "Modular Markdown editor",
		description:
			"Choose a template, fill your fields, and see in real time how your final README will look.",
		templateTitle: "Starter template",
		templateDescription: "Pick a base and tailor it with removable and extra fields.",
		templateLabel: "Choose a template",
		formTitle: "README form",
		formDescription: "Edit the fields below. Everything updates instantly in the preview panel.",
		addFieldTitle: "Add custom field",
		addFieldDescription: "Create extra fields beyond the template default structure.",
		fieldNameLabel: "Field name",
		fieldNamePlaceholder: "E.g. Hobbies, Certifications, Goals",
		fieldTypeLabel: "Field type",
		fieldTypeText: "Single line",
		fieldTypeTextarea: "Long text",
		fieldTypeMarkdown: "Raw markdown",
		fieldTypeImageUrl: "Image / banner URL",
		fieldTypeBadgeList: "Tech badges",
		fieldTypeStatWidget: "GitHub stats widget",
		addFieldAction: "Add field",
		removeFieldAction: "Remove",
		emptyFields: "No fields in this form yet. Add a field to continue.",
		previewTitle: "Final preview",
		previewDescription: "Switch between raw markdown and compiled preview.",
		previewCompiled: "Compiled preview",
		previewMarkdown: "Markdown",
		copyMarkdown: "Copy markdown",
		copiedMarkdown: "Copied",
		downloadMarkdown: "Download .md",
		emptyPreview: "Fill out the form to generate a preview.",
		customFieldPlaceholder: "Describe the content for this field",
		markdownFallbackTitle: "My README",
		insertSectionTitle: "Insert section snippet",
		insertSectionDescription: "Add a ready-made block to your README",
		templates: {
			profile: {
				name: "Professional profile",
				description: "Great for highlighting who you are, your skills, and key projects.",
			},
			maintainer: {
				name: "Open-source maintainer",
				description: "Focused on stack, active projects, and contribution callouts.",
			},
			freelancer: {
				name: "Freelancer",
				description: "Built to showcase experience, services, and contact touchpoints.",
			},
			student: {
				name: "Student",
				description: "For CS students and early-career devs focused on learning and projects.",
			},
			researcher: {
				name: "Researcher",
				description: "For academics and researchers with publications and scientific experience.",
			},
			devops: {
				name: "DevOps / SRE",
				description: "For infrastructure engineers focused on automation, cloud, and observability.",
			},
			designer: {
				name: "Design engineer",
				description: "For designers who code, with focus on UI/UX, portfolio, and design systems.",
			},
			"data-scientist": {
				name: "Data scientist",
				description: "For data and ML professionals focused on analytics stack and data projects.",
			},
			"game-dev": {
				name: "Game developer",
				description: "For game developers focused on engines, tools, and published titles.",
			},
			"tech-lead": {
				name: "Tech lead",
				description: "For technical leaders and engineering managers focused on experience and leadership.",
			},
			fullstack: {
				name: "Full-stack developer",
				description: "Complete template for devs working across frontend and backend with a broad stack.",
			},
			backend: {
				name: "Backend engineer",
				description: "For backend specialists focused on APIs, architecture, and infrastructure.",
			},
			frontend: {
				name: "Frontend developer",
				description: "For frontend devs focused on UI, accessibility, and interface portfolio.",
			},
			"open-source": {
				name: "Open-source contributor",
				description: "For active open-source contributors and library maintainers.",
			},
			minimal: {
				name: "Minimal",
				description: "A lean, straight-to-the-point profile with just the essentials.",
			},
		},
		fields: {
			title: {
				label: "Main title",
				placeholder: "E.g. Hi, I'm Nicole Alberti",
			},
			subtitle: {
				label: "Subtitle",
				placeholder: "E.g. Full-Stack developer focused on web products",
			},
			about: {
				label: "About me",
				placeholder: "Describe your value proposition, current focus, and core interests.",
			},
			skills: {
				label: "Skills",
				placeholder: "List the technical and soft skills that matter most.",
			},
			stack: {
				label: "Tech stack",
				placeholder: "E.g. Next.js, Laravel, TypeScript, Docker",
			},
			projects: {
				label: "Featured projects",
				placeholder: "Add projects, outcomes, and relevant links.",
			},
			experience: {
				label: "Experience",
				placeholder: "Summarize your experience and impactful deliveries.",
			},
			contact: {
				label: "Contact",
				placeholder: "E.g. LinkedIn, email, portfolio, Calendly",
			},
			cta: {
				label: "Call to action",
				placeholder: "E.g. Open to collaborations and new opportunities",
			},
		},
	},
	templatesPage: {
		title: "Markly templates",
		description: "Browse existing templates, search by style, and pick the best starting point.",
		startTitle: "Start from a template or from scratch",
		startDescription:
			"Choose a ready base to open directly in the editor, or start with an empty README and build your own structure.",
		previewAlt: "template preview",
		modeAriaLabel: "Templates page mode",
		modeBrowse: "Browse templates",
		modeStart: "Start now",
		searchLabel: "Search templates",
		searchPlaceholder: "Search by name or description",
		resultsCountLabel: "Templates found",
		fieldsCountLabel: "fields",
		emptyTitle: "No templates found",
		emptyDescription: "Try another search term to find a matching template.",
		blankTitle: "Start from scratch",
		blankDescription: "Open the editor without starter fields and build your README from an empty canvas.",
		blankAction: "Start without template",
		openTemplateAction: "Open in editor",
		useTemplateAction: "Use this template",
		paginationAriaLabel: "Templates pagination",
		previousPage: "Previous",
		nextPage: "Next",
		pageLabel: "Page",
	},
};
