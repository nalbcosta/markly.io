export type TranslationDictionary = {
	common: {
		language: string;
		portuguese: string;
		english: string;
	};
	header: {
		howItWorks: string;
		templates: string;
		features: string;
		faq: string;
		signIn: string;
		startNow: string;
		toggleTheme: string;
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
	faq: {
		title: string;
		description: string;
		items: Array<{
			question: string;
			answer: string;
		}>;
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
		features: "Recursos",
		faq: "FAQ",
		signIn: "Entrar",
		startNow: "Comecar agora",
		toggleTheme: "Alternar tema",
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
			description: "Tres passos objetivos para sair do rascunho e publicar um README que transmite valor.",
			step1: {
				title: "Escolha uma base estrategica",
				description: "Comece com um template pensado para seu momento profissional e economize tempo desde o inicio.",
			},
			step2: {
				title: "Personalize com preview ao vivo",
				description: "Ajuste conteudo, hierarquia e destaques enquanto visualiza o resultado final em tempo real.",
			},
			step3: {
				title: "Publique com confianca",
				description: "Copie o markdown final e atualize seu perfil no GitHub em poucos cliques, sem retrabalho.",
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
	faq: {
		title: "Dúvidas frequentes",
		description: "Respostas para as perguntas mais comuns sobre o Markly.",
		items: [
			{
				question: "Como faço para começar?",
				answer:
					"Basta clicar em 'Começar agora' para acessar o editor. Escolha um template, personalize o conteúdo e veja o resultado em tempo real. Quando estiver pronto, copie o markdown e publique no seu GitHub.",
			},
			{
				question: "Posso exportar meu README?",
				answer:
					"Sim! O Markly permite copiar o markdown gerado para levar para qualquer lugar. Você pode usar em seu GitHub, GitLab ou compartilhar com outros.",
			},
			{
				question: "Meus dados ficam salvos?",
				answer:
					"O Markly salva automaticamente seu trabalho enquanto você edita para que você não perca nenhuma alteração. Você pode continuar de onde parou.",
			},
			{
				question: "Quais são as limitações?",
				answer:
					"Markly foi pensado para criar READMEs de perfil no GitHub. Para documentação de projetos, você pode usar qualquer editor, mas recomendamos usar a base do Markly como ponto de partida.",
			},
			{
				question: "É seguro usar o Markly?",
				answer:
					"Sim, a segurança é prioridade. Seus dados são processados de forma segura e privada. Não compartilhamos informações com terceiros.",
			},
		],
	},
};
