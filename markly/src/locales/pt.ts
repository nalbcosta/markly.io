export type TranslationDictionary = {
	common: {
		language: string;
		portuguese: string;
		english: string;
	};
	header: {
		howItWorks: string;
		templates: string;
		faq: string;
		signIn: string;
		startNow: string;
	};
	footer: {
		tagline: string;
		madeBy: string;
		privacy: string;
		github: string;
	};
	landing: {
		hero: {
			title: string;
			description: string;
			startNow: string;
			howItWorks: string;
		};
		howItWorks: {
			title: string;
			description: string;
			step1: {
				title: string;
				description: string;
			};
			step2: {
				title: string;
				description: string;
			};
			step3: {
				title: string;
				description: string;
			};
		};
		cta: {
			title: string;
			description: string;
			createReadme: string;
			viewTemplates: string;
		};
	};
	features: {
		eyebrow: string;
		title: string;
		description: string;
		ariaLabel: string;
		items: {
			editorGuided: {
				label: string;
				summary: string;
				badge: string;
				cardTitle: string;
				cardDescription: string;
				bullets: [string, string, string];
			};
			realTimePreview: {
				label: string;
				summary: string;
				badge: string;
				cardTitle: string;
				cardDescription: string;
				bullets: [string, string, string];
			};
			strategicTemplates: {
				label: string;
				summary: string;
				badge: string;
				cardTitle: string;
				cardDescription: string;
				bullets: [string, string, string];
			};
		};
	};
};

export const pt: TranslationDictionary = {
	common: {
		language: "Idioma",
		portuguese: "Portugues",
		english: "Ingles",
	},
	header: {
		howItWorks: "Como funciona",
		templates: "Templates",
		faq: "FAQ",
		signIn: "Entrar",
		startNow: "Comecar agora",
	},
	footer: {
		tagline: "Gerador de README de perfil do GitHub.",
		madeBy: "Feito por",
		privacy: "Privacidade",
		github: "GitHub",
	},
	landing: {
		hero: {
			title: "Transforme seu perfil do GitHub em uma vitrine profissional",
			description:
				"O Markly simplifica a criacao de READMEs de perfil com templates inteligentes, edicao guiada e pre-visualizacao em tempo real, tudo para voce publicar mais rapido, com qualidade e consistencia visual.",
			startNow: "Comecar agora",
			howItWorks: "Como funciona",
		},
		howItWorks: {
			title: "Como funciona",
			description: "Um processo simples em tres passos para criar seu README profissional.",
			step1: {
				title: "Escolha um template",
				description: "Selecione um layout alinhado ao seu objetivo profissional.",
			},
			step2: {
				title: "Personalize em minutos",
				description: "Edite textos, secoes e destaques com preview instantaneo.",
			},
			step3: {
				title: "Exporte e publique",
				description: "Copie o markdown e atualize seu perfil do GitHub com um clique.",
			},
		},
		cta: {
			title: "Pronto para elevar o nivel do seu GitHub?",
			description: "Crie seu README com padrao profissional e apresente seu trabalho com mais clareza.",
			createReadme: "Criar meu README",
			viewTemplates: "Ver templates",
		},
	},
	features: {
		eyebrow: "Recursos do Markly",
		title: "A plataforma certa para destacar seu perfil no GitHub",
		description:
			"Reuna escrita guiada, preview em tempo real e templates estrategicos em um fluxo simples para publicar com qualidade.",
		ariaLabel: "Recursos disponiveis do Markly",
		items: {
			editorGuided: {
				label: "Editor guiado",
				summary: "Estrutura pronta para voce preencher sem travar.",
				badge: "Fluxo assistido",
				cardTitle: "Escreva com direcao, sem comecar do zero",
				cardDescription:
					"O Markly organiza o conteudo por blocos e mostra o que falta para o seu README ficar completo e objetivo.",
				bullets: [
					"Secoes com proposito claro",
					"Campos orientados por contexto",
					"Menos retrabalho na escrita",
				],
			},
			realTimePreview: {
				label: "Preview em tempo real",
				summary: "Veja o resultado enquanto edita cada secao.",
				badge: "Feedback imediato",
				cardTitle: "Acompanhe o visual final a cada ajuste",
				cardDescription:
					"Cada alteracao aparece instantaneamente no preview para voce revisar layout, hierarquia e legibilidade antes de publicar.",
				bullets: [
					"Atualizacao instantanea",
					"Leitura final com mais seguranca",
					"Consistencia visual entre secoes",
				],
			},
			strategicTemplates: {
				label: "Templates estrategicos",
				summary: "Modelos pensados para objetivos profissionais.",
				badge: "Base validada",
				cardTitle: "Escolha o template ideal para seu momento",
				cardDescription:
					"Use uma base alinhada ao seu perfil, personalize com facilidade e mantenha um posicionamento mais claro para recrutadores.",
				bullets: [
					"Foco em clareza e impacto",
					"Adaptacao rapida ao seu perfil",
					"Estrutura pronta para destaque profissional",
				],
			},
		},
	},
};
