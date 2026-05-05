export type EditorFieldType = "text" | "textarea" | "markdown" | "image-url" | "badge-list" | "stat-widget";

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

export type TemplateId =
  | "profile"
  | "maintainer"
  | "freelancer"
  | "student"
  | "researcher"
  | "devops"
  | "designer"
  | "data-scientist"
  | "game-dev"
  | "tech-lead"
  | "fullstack"
  | "backend"
  | "frontend"
  | "open-source"
  | "minimal";

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
  {
    id: "student",
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
    id: "researcher",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "experience", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "devops",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "experience", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "designer",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "cta", type: "text" },
    ],
  },
  {
    id: "data-scientist",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "game-dev",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "about", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "tech-lead",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "experience", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "fullstack",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "backend",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "experience", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "frontend",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "subtitle", type: "text" },
      { id: "about", type: "textarea" },
      { id: "skills", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "cta", type: "text" },
    ],
  },
  {
    id: "open-source",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "about", type: "textarea" },
      { id: "projects", type: "textarea" },
      { id: "stack", type: "textarea" },
      { id: "cta", type: "text" },
      { id: "contact", type: "textarea" },
    ],
  },
  {
    id: "minimal",
    fieldBlueprints: [
      { id: "title", type: "text" },
      { id: "about", type: "textarea" },
      { id: "contact", type: "textarea" },
    ],
  },
];

export const TEMPLATE_SAMPLE_MARKDOWN: Record<TemplateId, string> = {
  profile: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=140&section=header&text=Hi+there!+%F0%9F%91%8B&fontSize=40&fontColor=fff&animation=fadeIn" width="100%" />
</div>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6366F1&center=true&vCenter=true&width=500&lines=Full-Stack+Developer;Open+Source+Enthusiast;Building+cool+things+%F0%9F%9A%80" alt="Typing SVG" />
</div>

<div align="center">

[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=6366f1&style=flat&label=Profile+Views)](https://github.com/yourusername)
[![GitHub followers](https://img.shields.io/github/followers/yourusername?style=flat&color=6366f1&logo=github)](https://github.com/yourusername)

</div>

---

Passionate developer with 5+ years building web applications. I turn complex problems into elegant solutions and love contributing to open source.

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,postgres,docker,git,aws&perline=8" />
</div>

## Featured projects

- **[markly](https://github.com/yourusername/markly)** — GitHub profile README generator built with Next.js
- **[taskflow](https://github.com/yourusername/taskflow)** — Real-time kanban board with collaborative features
- **[devtools-cli](https://github.com/yourusername/devtools-cli)** — CLI utilities for modern development workflows

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=tokyonight&hide_border=true" height="165" />
</div>

<div align="center">
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=tokyonight&hide_border=true" height="165" />
</div>

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.dev)

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=80&section=footer" width="100%" />
</div>`,

  maintainer: `# Alex Chen · Open Source Maintainer

[![GitHub Stars](https://img.shields.io/github/stars/yourusername?style=flat&logo=github&color=10b981)](https://github.com/yourusername)
[![Sponsors](https://img.shields.io/github/sponsors/yourusername?style=flat&logo=github-sponsors&color=10b981)](https://github.com/sponsors/yourusername)
[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=10b981&style=flat)](https://github.com/yourusername)

Building developer tools and open-source infrastructure used by thousands of projects.

---

## Tech stack

<div align="center">
<img src="https://skillicons.dev/icons?i=rust,go,ts,nodejs,docker,kubernetes,github,linux&perline=8" />
</div>

## Active projects

| Project | Stars | Description |
| --- | --- | --- |
| **[fastbuild](https://github.com/yourusername/fastbuild)** | ⭐ 2.4k | Incremental build system for monorepos |
| **[lintbot](https://github.com/yourusername/lintbot)** | ⭐ 980 | Automated code review bot for GitHub |
| **[configkit](https://github.com/yourusername/configkit)** | ⭐ 540 | Zero-dep config parser for Node.js |

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=merko&hide_border=true" height="165" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=merko&hide_border=true" height="165" />
</div>

## Contribute

All projects are open for contributions! Check **good first issue** labels to get started.

[![Sponsor](https://img.shields.io/badge/Sponsor_this_work-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)`,

  freelancer: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=rect&color=f97316,fb923c&height=120&text=Maria+Santos&fontSize=42&fontColor=fff&desc=Freelance+Web+Developer&descSize=18&descAlignY=75&animation=fadeIn" width="100%" />
</div>

<div align="center">

[![Available for hire](https://img.shields.io/badge/Status-Available%20for%20hire-22c55e?style=for-the-badge)](https://yourportfolio.dev)
[![Open to DMs](https://img.shields.io/badge/DMs-Open-3b82f6?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)

</div>

---

I help startups and businesses build performant, accessible web applications. **20+ projects** shipped across e-commerce, fintech, and SaaS.

## Experience

- **Senior Frontend** at TechStartup Co. *(2022–2024)*
- **Freelance Developer** — 20+ projects delivered *(2020–present)*
- **Web Developer** at Digital Agency *(2019–2022)*

## Tech stack

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## Contact

[![Portfolio](https://img.shields.io/badge/Portfolio-mariasantos.dev-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://mariasantos.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Email](https://img.shields.io/badge/Email-maria@freelance.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maria@freelance.dev)`,

  student: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=3b82f6,60a5fa&height=140&section=header&text=Lucas+Oliveira&fontSize=38&fontColor=fff&desc=Computer+Science+Student&descAlignY=75" width="100%" />
</div>

<div align="center">

[![Open to internships](https://img.shields.io/badge/Status-Open%20to%20internships-3b82f6?style=for-the-badge)](https://github.com/yourusername)
[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=3b82f6&style=flat&label=Profile+Views)](https://github.com/yourusername)

</div>

3rd-year **Computer Science student** at University of São Paulo. Passionate about distributed systems and web development.

---

## Currently learning

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com)

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=python,js,java,react,html,css,git,linux&perline=8" />
</div>

## Featured projects

- **[unisched](https://github.com/yourusername/unisched)** — University schedule planner built with React
- **[sortvisualizer](https://github.com/yourusername/sortvisualizer)** — Algorithm visualization tool
- **[chatbot-nlp](https://github.com/yourusername/chatbot-nlp)** — Simple NLP chatbot

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=blue-green&hide_border=true" height="165" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=blue-green&hide_border=true" height="165" />
</div>`,

  researcher: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=soft&color=4f46e5,7c3aed&height=120&text=Dr.+Emily+Park&fontSize=38&fontColor=fff&desc=AI+%2F+ML+Researcher&descAlignY=75" width="100%" />
</div>

<div align="center">

[![Google Scholar](https://img.shields.io/badge/Google_Scholar-12+papers-4285F4?style=for-the-badge&logo=google-scholar&logoColor=white)](https://scholar.google.com)
[![ResearchGate](https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white)](https://researchgate.net)

</div>

Researcher at the intersection of **NLP** and **human-computer interaction**. Published in top-tier venues (NeurIPS, ACL, CHI). Building interpretable AI systems.

---

## Research areas

[![NLP](https://img.shields.io/badge/NLP-Language+Models-7c3aed?style=flat)](https://github.com/yourusername)
[![HCI](https://img.shields.io/badge/HCI-Human--AI+Interaction-7c3aed?style=flat)](https://github.com/yourusername)
[![XAI](https://img.shields.io/badge/XAI-Interpretability-7c3aed?style=flat)](https://github.com/yourusername)

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=python,pytorch,tensorflow,docker,aws,julia,r,github&perline=8" />
</div>

## Academic experience

- **Postdoctoral Researcher** — MIT CSAIL *(2023–present)*
- **PhD in Computer Science** — Stanford University *(2023)*
- **Research Intern** — Google DeepMind *(Summer 2022)*

## Contact

[![Email](https://img.shields.io/badge/Email-emily@mit.edu-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:emily@mit.edu)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/yourusername)`,

  devops: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=cylinder&color=1e293b,334155&height=140&text=Carlos+Mendes&fontSize=38&fontColor=64ffda&desc=DevOps+%7C+SRE+%7C+Cloud+Architect&descSize=17&descAlignY=72" width="100%" />
</div>

<div align="center">

[![AWS Certified](https://img.shields.io/badge/AWS-Certified-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![CKA](https://img.shields.io/badge/CKA-Certified_Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://cncf.io)
[![Uptime](https://img.shields.io/badge/Uptime-99.99%25-22c55e?style=for-the-badge)](https://github.com/yourusername)

</div>

Infrastructure enthusiast with **6+ years** automating deployments, improving reliability, and scaling distributed systems.

---

## Tech stack

<div align="center">
<img src="https://skillicons.dev/icons?i=aws,gcp,azure,kubernetes,docker,terraform,ansible,grafana&perline=8" />
</div>

## Experience

- **Senior SRE** at CloudScale Inc. *(2022–present)* — 99.99% uptime, 3× infra cost reduction
- **DevOps Engineer** at FinTech Corp *(2019–2022)* — Migrated 40+ services to Kubernetes
- **Systems Admin** at DataHost *(2017–2019)*

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=dark&hide_border=true" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=dark&hide_border=true" height="165" />
</div>`,

  designer: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=ec4899,f472b6,a855f7&height=140&section=header&text=Sofia+Kim&fontSize=38&fontColor=fff&desc=Design+Engineer&descAlignY=75" width="100%" />
</div>

<div align="center">

[![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)](https://dribbble.com/yourusername)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com/@yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-sofiakim.design-FF5722?style=for-the-badge)](https://sofiakim.design)

</div>

Bridging **design and engineering** — from Figma prototypes to production React components. Obsessed with accessible, performant UI.

---

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=figma,react,ts,css,tailwind,framermotion,blender,ps&perline=8" />
</div>

## Featured projects

- **[designsystem-ui](https://github.com/yourusername/designsystem-ui)** — Accessible React component library (800+ ⭐)
- **[portfolio-theme](https://github.com/yourusername/portfolio-theme)** — Minimal developer portfolio template
- **[a11y-checker](https://github.com/yourusername/a11y-checker)** — Browser extension for WCAG 2.1 audits

[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA_Compliant-22c55e?style=flat)](https://github.com/yourusername)
[![Framer Motion](https://img.shields.io/badge/Motion-Framer-0055FF?style=flat&logo=framer)](https://framer.com/motion)

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=rose_pine&hide_border=true" height="165" />
</div>`,

  "data-scientist": `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=shark&color=0ea5e9,0284c7&height=140&text=Raj+Patel&fontSize=38&fontColor=fff&desc=Data+Scientist+%7C+ML+Engineer&descAlignY=72" width="100%" />
</div>

<div align="center">

[![Kaggle](https://img.shields.io/badge/Kaggle-Expert-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://kaggle.com/rajpatel)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/rajpatel)
[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=0ea5e9&style=flat)](https://github.com/yourusername)

</div>

Turning data into **actionable insights** and intelligent systems. 5+ years building end-to-end ML pipelines for production environments.

---

## Tech stack

<div align="center">
<img src="https://skillicons.dev/icons?i=python,pytorch,tensorflow,sklearn,spark,docker,aws,postgres&perline=8" />
</div>

## Featured projects

- **[forecastlib](https://github.com/yourusername/forecastlib)** — Time-series forecasting for retail demand prediction
- **[textclassifier](https://github.com/yourusername/textclassifier)** — Multi-label NLP classification API
- **[datavis](https://github.com/yourusername/datavis)** — Interactive dashboards with Plotly and Dash

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=ocean_dark&hide_border=true" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=ocean_dark&hide_border=true&hide=html,css" height="165" />
</div>`,

  "game-dev": `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=venom&color=1a1a2e,16213e,0f3460&height=150&text=Yuki+Tanaka&fontSize=38&fontColor=e94560&desc=Indie+Game+Developer&descSize=18&descAlignY=72" width="100%" />
</div>

<div align="center">

[![Steam](https://img.shields.io/badge/Steam-3+titles-1b2838?style=for-the-badge&logo=steam&logoColor=white)](https://store.steampowered.com)
[![Itch.io](https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white)](https://yourusername.itch.io)
[![Twitter](https://img.shields.io/badge/Devlog-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)

</div>

I make games that **tell stories through mechanics**. Currently building a narrative roguelike. Shipped 3 titles on Steam.

---

## Engines and tools

<div align="center">
<img src="https://skillicons.dev/icons?i=unity,cs,godot,blender,ps,git,github,steam&perline=8" />
</div>

## Published titles

- **Echoes of Dust** *(Steam 2024)* — Narrative roguelike with procedural storytelling
- **Pixel Tides** *(Itch.io 2023)* — Cozy fishing sim — 500+ downloads
- **BulletForge** *(Open source)* — Bullet-hell pattern editor used by 200+ developers

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=dark&hide_border=true&bg_color=1a1a2e&title_color=e94560&icon_color=e94560" height="165" />
</div>`,

  "tech-lead": `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=rect&color=1e3a5f,2d5986&height=120&text=Daniel+Costa&fontSize=38&fontColor=fff&desc=Tech+Lead+%7C+Engineering+Manager&descAlignY=75" width="100%" />
</div>

<div align="center">

[![10+ years](https://img.shields.io/badge/Experience-10%2B+years-1e3a5f?style=for-the-badge)](https://github.com/yourusername)
[![Team size](https://img.shields.io/badge/Team-8+engineers-2d5986?style=for-the-badge)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)

</div>

Engineering leader focused on **high-performing teams**, technical direction, and shipping quality products at scale.

---

## Experience

- **Tech Lead** at BigTech Corp *(2022–present)* — Team of 8, 3 shipped products
- **Senior Engineer** at ScaleUp Inc. *(2019–2022)* — Grew team from 3 to 15 engineers
- **Software Engineer** at StartupXYZ *(2015–2019)*

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=ts,go,python,kubernetes,aws,postgres,redis,github&perline=8" />
</div>

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=github_dark&hide_border=true" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=github_dark&hide_border=true" height="165" />
</div>

<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=yourusername&theme=darkhub&no-frame=true&row=1&column=6" />
</div>`,

  fullstack: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=8b5cf6,6366f1,3b82f6&height=140&section=header&text=Priya+Sharma&fontSize=38&fontColor=fff&desc=Full-Stack+Developer&descAlignY=75&animation=twinkling" width="100%" />
</div>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=8B5CF6&center=true&vCenter=true&width=500&lines=I+build+products+end-to-end;Frontend+%2B+Backend+%2B+DevOps;TypeScript+%7C+React+%7C+Node.js" alt="Typing SVG" />
</div>

<div align="center">

[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=8b5cf6&style=flat)](https://github.com/yourusername)
[![GitHub followers](https://img.shields.io/github/followers/yourusername?style=flat&color=8b5cf6&logo=github)](https://github.com/yourusername)

</div>

---

**Frontend** · [![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev) [![Next.js](https://img.shields.io/badge/Next.js-000?style=flat&logo=next.js)](https://nextjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org) [![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**Backend** · [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)](https://postgresql.org) [![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)](https://redis.io) [![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com)

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=tokyonight&hide_border=true" height="165" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=tokyonight&hide_border=true" height="165" />
</div>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=8b5cf6,3b82f6&height=80&section=footer" width="100%" />
</div>`,

  backend: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=cylinder&color=1e293b,0f172a&height=140&text=Omar+Hassan&fontSize=38&fontColor=38bdf8&desc=Backend+Engineer+%7C+API+Architect&descSize=17&descAlignY=72" width="100%" />
</div>

<div align="center">

[![Go](https://img.shields.io/badge/Go-Expert-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://go.dev)
[![Rust](https://img.shields.io/badge/Rust-Systems-000000?style=for-the-badge&logo=rust&logoColor=white)](https://rust-lang.org)
[![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=38bdf8&style=flat)](https://github.com/yourusername)

</div>

Designing and building **resilient backend systems** that handle millions of daily requests. Focused on clean architecture, performance, and data integrity.

---

## Tech stack

<div align="center">
<img src="https://skillicons.dev/icons?i=go,rust,ts,postgres,redis,kafka,docker,kubernetes&perline=8" />
</div>

## Experience

- **Senior Backend** at PaymentsCo *(2021–present)* — Handles 2M+ transactions/day
- **Backend Developer** at LogisticsHub *(2018–2021)* — Real-time tracking system
- **Junior Developer** at WebAgency *(2016–2018)*

## Featured projects

- **[apigateway](https://github.com/yourusername/apigateway)** — High-performance API gateway in Go (5k+ req/s)
- **[queuemaster](https://github.com/yourusername/queuemaster)** — Distributed task queue with retry and DLQ
- **[migratool](https://github.com/yourusername/migratool)** — Database migration CLI with rollback support

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=midnight-purple&hide_border=true" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=midnight-purple&hide_border=true" height="165" />
</div>`,

  frontend: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=f472b6,fb7185,fbbf24&height=140&section=header&text=Camila+Rivera&fontSize=38&fontColor=fff&desc=Frontend+Developer+%7C+UI+Engineer&descAlignY=75" width="100%" />
</div>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=F472B6&center=true&vCenter=true&width=500&lines=Building+fast+%26+accessible+UI;React+%7C+Next.js+%7C+TypeScript;Every+pixel+with+purpose" alt="Typing SVG" />
</div>

---

## Skills

<div align="center">
<img src="https://skillicons.dev/icons?i=react,nextjs,ts,tailwind,figma,framermotion,sass,storybook&perline=8" />
</div>

<div align="center">

[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-FF6347?style=flat&logo=lighthouse&logoColor=white)](https://github.com/yourusername)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA-22c55e?style=flat)](https://github.com/yourusername)

</div>

## Featured projects

- **[uikit](https://github.com/yourusername/uikit)** — Accessible React component library
- **[css-tricks](https://github.com/yourusername/css-tricks)** — Advanced CSS patterns collection
- **[portfolio](https://github.com/yourusername/portfolio)** — Animated developer portfolio template

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=radical&hide_border=true" height="165" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=radical&hide_border=true" height="165" />
</div>

[![Portfolio](https://img.shields.io/badge/See+my+work-yourdomain.dev-f472b6?style=for-the-badge)](https://yourdomain.dev)`,

  "open-source": `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=10b981,34d399&height=140&section=header&text=Kenji+Yamamoto&fontSize=38&fontColor=fff&desc=Open+Source+Contributor&descAlignY=75" width="100%" />
</div>

<div align="center">

[![GitHub Stars](https://img.shields.io/badge/Total+Stars-10k%2B-10b981?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![Commits](https://img.shields.io/badge/Commits-2500%2B-10b981?style=for-the-badge&logo=git&logoColor=white)](https://github.com/yourusername)
[![Sponsor](https://img.shields.io/badge/Sponsor-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/yourusername)

</div>

Full-time open-source contributor. Building developer tools used across **thousands of projects**.

---

## Active projects

| Project | Stars | Weekly Downloads |
| --- | --- | --- |
| **[fastlint](https://github.com/yourusername/fastlint)** | ⭐ 5.2k | 180k |
| **[bundlecheck](https://github.com/yourusername/bundlecheck)** | ⭐ 1.8k | 42k |
| **[hooklib](https://github.com/yourusername/hooklib)** | ⭐ 3.1k | 95k |

## Tech stack

<div align="center">
<img src="https://skillicons.dev/icons?i=ts,rust,go,nodejs,deno,bun,vite,github&perline=8" />
</div>

## GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=merko&hide_border=true&count_private=true" height="165" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=merko&hide_border=true" height="165" />
</div>`,

  minimal: `<div align="center">
<img src="https://capsule-render.vercel.app/api?type=soft&color=374151,1f2937&height=100&text=Sam+Lee&fontSize=42&fontColor=f9fafb&desc=Software+Engineer&descAlignY=72" width="100%" />
</div>

<div align="center">

Software engineer building things for the web.
Currently at **Acme Corp** working on developer tools.

[![GitHub](https://img.shields.io/badge/GitHub-yourusername-181717?style=flat&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Email](https://img.shields.io/badge/Email-sam@example.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:sam@example.com)

</div>`,
};
