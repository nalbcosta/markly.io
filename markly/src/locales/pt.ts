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
	editor: {
		title: string;
		description: string;
		templateTitle: string;
		templateDescription: string;
		templateLabel: string;
		formTitle: string;
		formDescription: string;
		addFieldTitle: string;
		addFieldDescription: string;
		fieldNameLabel: string;
		fieldNamePlaceholder: string;
		fieldTypeLabel: string;
		fieldTypeText: string;
		fieldTypeTextarea: string;
		addFieldAction: string;
		removeFieldAction: string;
		emptyFields: string;
		previewTitle: string;
		previewDescription: string;
		previewCompiled: string;
		previewMarkdown: string;
		copyMarkdown: string;
		copiedMarkdown: string;
		emptyPreview: string;
		customFieldPlaceholder: string;
		markdownFallbackTitle: string;
		templates: {
			profile: {
				name: string;
				description: string;
			};
			maintainer: {
				name: string;
				description: string;
			};
			freelancer: {
				name: string;
				description: string;
			};
		};
		fields: {
			title: {
				label: string;
				placeholder: string;
			};
			subtitle: {
				label: string;
				placeholder: string;
			};
			about: {
				label: string;
				placeholder: string;
			};
			skills: {
				label: string;
				placeholder: string;
			};
			stack: {
				label: string;
				placeholder: string;
			};
			projects: {
				label: string;
				placeholder: string;
			};
			experience: {
				label: string;
				placeholder: string;
			};
			contact: {
				label: string;
				placeholder: string;
			};
			cta: {
				label: string;
				placeholder: string;
			};
		};
	};
	templatesPage: {
		title: string;
		description: string;
		startTitle: string;
		startDescription: string;
			previewAlt: string;
		modeAriaLabel: string;
		modeBrowse: string;
		modeStart: string;
		searchLabel: string;
		searchPlaceholder: string;
		resultsCountLabel: string;
		fieldsCountLabel: string;
		emptyTitle: string;
		emptyDescription: string;
		blankTitle: string;
		blankDescription: string;
		blankAction: string;
		openTemplateAction: string;
		useTemplateAction: string;
		paginationAriaLabel: string;
		previousPage: string;
		nextPage: string;
		pageLabel: string;
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
	editor: {
		title: "Editor modular de Markdown",
		description:
			"Escolha um template, preencha os campos e acompanhe no preview como seu README final vai ficar em tempo real.",
		templateTitle: "Template inicial",
		templateDescription: "Selecione uma base e personalize do seu jeito com campos removiveis e adicionais.",
		templateLabel: "Escolha o template",
		formTitle: "Formulario do README",
		formDescription: "Edite os campos abaixo. Tudo atualiza automaticamente no painel de preview.",
		addFieldTitle: "Adicionar campo personalizado",
		addFieldDescription: "Inclua novos campos alem da estrutura inicial do template.",
		fieldNameLabel: "Nome do campo",
		fieldNamePlaceholder: "Ex.: Hobbies, Certificacoes, Objetivos",
		fieldTypeLabel: "Tipo do campo",
		fieldTypeText: "Linha unica",
		fieldTypeTextarea: "Texto longo",
		addFieldAction: "Adicionar campo",
		removeFieldAction: "Remover",
		emptyFields: "Nenhum campo no formulario. Adicione um campo para continuar.",
		previewTitle: "Preview final",
		previewDescription: "Troque entre o markdown bruto e o preview compilado.",
		previewCompiled: "Preview compilado",
		previewMarkdown: "Markdown",
		copyMarkdown: "Copiar markdown",
		copiedMarkdown: "Copiado",
		emptyPreview: "Preencha o formulario para gerar o preview.",
		customFieldPlaceholder: "Descreva o conteudo deste campo",
		markdownFallbackTitle: "Meu README",
		templates: {
			profile: {
				name: "Perfil profissional",
				description: "Ideal para destacar quem voce e, habilidades e projetos principais.",
			},
			maintainer: {
				name: "Mantenedor open source",
				description: "Focado em stack, projetos ativos e chamada para contribuicoes.",
			},
			freelancer: {
				name: "Freelancer",
				description: "Estrutura para apresentar experiencia, servicos e pontos de contato.",
			},
		},
		fields: {
			title: {
				label: "Titulo principal",
				placeholder: "Ex.: Ola, eu sou Nicole Alberti",
			},
			subtitle: {
				label: "Subtitulo",
				placeholder: "Ex.: Desenvolvedora Full-Stack focada em produtos web",
			},
			about: {
				label: "Sobre mim",
				placeholder: "Conte sua proposta de valor, foco atual e areas de interesse.",
			},
			skills: {
				label: "Habilidades",
				placeholder: "Liste habilidades tecnicas e comportamentais relevantes.",
			},
			stack: {
				label: "Stack",
				placeholder: "Ex.: Next.js, Laravel, TypeScript, Docker",
			},
			projects: {
				label: "Projetos em destaque",
				placeholder: "Adicione projetos, resultados e links importantes.",
			},
			experience: {
				label: "Experiencia",
				placeholder: "Resumo de experiencias profissionais e entregas relevantes.",
			},
			contact: {
				label: "Contato",
				placeholder: "Ex.: LinkedIn, email, portfolio, Calendly",
			},
			cta: {
				label: "Chamada para acão",
				placeholder: "Ex.: Aberta para colaborações e novos desafios",
			},
		},
	},
	templatesPage: {
		title: "Templates do Markly",
		description: "Veja os templates existentes, busque por estilo e escolha o melhor ponto de partida.",
		startTitle: "Comece com um template ou do zero",
		startDescription:
			"Escolha uma base pronta para abrir direto no editor, ou inicie um README vazio para montar sua estrutura.",
		previewAlt: "Previa do template",
		modeAriaLabel: "Modo da pagina de templates",
		modeBrowse: "Explorar templates",
		modeStart: "Comecar agora",
		searchLabel: "Buscar templates",
		searchPlaceholder: "Buscar por nome ou descricão",
		resultsCountLabel: "Templates encontrados",
		fieldsCountLabel: "campos",
		emptyTitle: "Nenhum template encontrado",
		emptyDescription: "Tente outro termo de busca para encontrar um template compatível.",
		blankTitle: "Começar do zero",
		blankDescription: "Abrir o editor sem campos iniciais para construir seu README em branco.",
		blankAction: "Iniciar sem template",
		openTemplateAction: "Abrir no editor",
		useTemplateAction: "Usar este template",
		paginationAriaLabel: "Paginacão de templates",
		previousPage: "Anterior",
		nextPage: "Próxima",
		pageLabel: "Pagina",
	},
};
