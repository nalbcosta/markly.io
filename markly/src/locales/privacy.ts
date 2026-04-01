export type PrivacyLocale = "pt" | "en";

type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type PrivacyDocument = {
  pageTitle: string;
  pageSubtitle: string;
  updatedLabel: string;
  updatedAt: string;
  backHomeLabel: string;
  summaryTitle: string;
  sections: PrivacySection[];
  contactTitle: string;
  contactDescription: string;
  contactEmailLabel: string;
  contactEmail: string;
};

const privacyByLocale: Record<PrivacyLocale, PrivacyDocument> = {
  pt: {
    pageTitle: "Politica de Privacidade",
    pageSubtitle:
      "Esta politica explica quais dados o Markly coleta, como usamos essas informacoes e como protegemos sua privacidade.",
    updatedLabel: "Ultima atualizacao",
    updatedAt: "01 de abril de 2026",
    backHomeLabel: "Voltar para a pagina inicial",
    summaryTitle: "Resumo rapido",
    sections: [
      {
        id: "dados-coletados",
        title: "1. Dados que coletamos",
        paragraphs: [
          "Coletamos apenas os dados necessarios para que o Markly funcione com qualidade, como informacoes de uso da plataforma, idioma preferido e conteudo que voce salva durante a edicao.",
          "Nao coletamos dados sensiveis sem necessidade e evitamos qualquer excesso de coleta. Nosso principio e minimizar a quantidade de dados armazenados.",
        ],
      },
      {
        id: "uso-dos-dados",
        title: "2. Como usamos os dados",
        paragraphs: [
          "Usamos os dados para manter o editor estavel, melhorar a experiencia de uso, corrigir problemas e evoluir recursos com base em comportamento agregado.",
          "Nao vendemos dados pessoais. As informacoes sao tratadas para operacao do produto, seguranca e aprimoramento continuo da plataforma.",
        ],
      },
      {
        id: "armazenamento-seguranca",
        title: "3. Armazenamento e seguranca",
        paragraphs: [
          "Aplicamos boas praticas de seguranca para proteger as informacoes contra acesso nao autorizado, alteracao indevida ou perda acidental.",
          "Mesmo com medidas tecnicas e organizacionais, nenhum sistema e 100% inviolavel. Por isso monitoramos continuamente nossos processos e reforcamos controles de seguranca.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies e tecnologias similares",
        paragraphs: [
          "Podemos usar cookies essenciais para lembrar preferencias, como idioma e configuracoes de interface, garantindo uma experiencia consistente.",
          "Quando aplicavel, voce podera gerenciar preferencias de cookies no proprio navegador.",
        ],
      },
      {
        id: "direitos",
        title: "5. Seus direitos",
        paragraphs: [
          "Voce pode solicitar acesso, correcao ou exclusao de dados pessoais, dentro dos limites legais e operacionais aplicaveis.",
          "Tambem pode solicitar esclarecimentos sobre tratamento de dados e tempo de retencao das informacoes.",
        ],
      },
      {
        id: "alteracoes",
        title: "6. Alteracoes nesta politica",
        paragraphs: [
          "Podemos atualizar esta Politica de Privacidade para refletir melhorias no produto, exigencias legais ou mudancas operacionais.",
          "Sempre que houver alteracoes relevantes, atualizaremos a data desta pagina e manteremos o historico de revisoes quando necessario.",
        ],
      },
    ],
    contactTitle: "Contato",
    contactDescription:
      "Se tiver duvidas sobre esta politica ou sobre o tratamento de dados no Markly, entre em contato:",
    contactEmailLabel: "E-mail",
    contactEmail: "privacy@markly.io",
  },
  en: {
    pageTitle: "Privacy Policy",
    pageSubtitle:
      "This policy explains what data Markly collects, how we use that information, and how we protect your privacy.",
    updatedLabel: "Last updated",
    updatedAt: "April 1, 2026",
    backHomeLabel: "Back to home page",
    summaryTitle: "Quick summary",
    sections: [
      {
        id: "data-collected",
        title: "1. Data we collect",
        paragraphs: [
          "We only collect data that is necessary for Markly to work well, such as product usage information, preferred language, and content you save while editing.",
          "We do not collect sensitive data unnecessarily and avoid over-collection. Our principle is to minimize stored personal data.",
        ],
      },
      {
        id: "how-we-use-data",
        title: "2. How we use data",
        paragraphs: [
          "We use data to keep the editor stable, improve the user experience, fix issues, and evolve features based on aggregated behavior.",
          "We do not sell personal data. Information is processed for product operation, security, and continuous platform improvement.",
        ],
      },
      {
        id: "storage-security",
        title: "3. Storage and security",
        paragraphs: [
          "We apply security best practices to protect information against unauthorized access, improper changes, or accidental loss.",
          "Even with technical and organizational safeguards, no system is 100% secure. That is why we continuously monitor and strengthen our controls.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies and similar technologies",
        paragraphs: [
          "We may use essential cookies to remember preferences, such as language and interface settings, for a consistent experience.",
          "When applicable, you can manage cookie preferences through your browser settings.",
        ],
      },
      {
        id: "your-rights",
        title: "5. Your rights",
        paragraphs: [
          "You may request access, correction, or deletion of personal data, within applicable legal and operational boundaries.",
          "You may also request clarification about data processing and information retention periods.",
        ],
      },
      {
        id: "policy-changes",
        title: "6. Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy to reflect product improvements, legal requirements, or operational changes.",
          "Whenever relevant changes happen, we update the date on this page and keep revision history when needed.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactDescription:
      "If you have questions about this policy or how Markly processes data, please contact us:",
    contactEmailLabel: "Email",
    contactEmail: "privacy@markly.io",
  },
};

export function getPrivacyDocument(locale: string): PrivacyDocument {
  return locale === "en" ? privacyByLocale.en : privacyByLocale.pt;
}
