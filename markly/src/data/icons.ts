export type BadgeStyle = "flat" | "flat-square" | "for-the-badge" | "plastic";
export type BadgeCategory =
  | "language"
  | "framework"
  | "tool"
  | "cloud"
  | "database"
  | "social"
  | "platform"
  | "stat";

export type BadgeDefinition = {
  id: string;
  name: string;
  category: BadgeCategory;
  /** shields.io badge URL — accepts an optional style */
  shieldsUrl: (style?: BadgeStyle) => string;
  /** skillicons.dev icon identifier */
  skillIconId?: string;
  color: string;
};

function shield(label: string, message: string, color: string, logo?: string, logoColor = "white") {
  return (style: BadgeStyle = "flat") =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}?style=${style}${logo ? `&logo=${logo}&logoColor=${logoColor}` : ""}`;
}

// ---------------------------------------------------------------------------
// Languages
// ---------------------------------------------------------------------------
export const LANGUAGE_BADGES: BadgeDefinition[] = [
  { id: "typescript",  name: "TypeScript",  category: "language", shieldsUrl: shield("TypeScript",  "TypeScript",  "3178C6", "typescript"),             skillIconId: "ts",       color: "#3178C6" },
  { id: "javascript",  name: "JavaScript",  category: "language", shieldsUrl: shield("JavaScript",  "JavaScript",  "F7DF1E", "javascript", "black"),     skillIconId: "js",       color: "#F7DF1E" },
  { id: "python",      name: "Python",      category: "language", shieldsUrl: shield("Python",      "Python",      "3776AB", "python"),                  skillIconId: "python",   color: "#3776AB" },
  { id: "go",          name: "Go",          category: "language", shieldsUrl: shield("Go",          "Go",          "00ADD8", "go"),                      skillIconId: "go",       color: "#00ADD8" },
  { id: "rust",        name: "Rust",        category: "language", shieldsUrl: shield("Rust",        "Rust",        "000000", "rust"),                    skillIconId: "rust",     color: "#000000" },
  { id: "java",        name: "Java",        category: "language", shieldsUrl: shield("Java",        "Java",        "ED8B00", "openjdk"),                 skillIconId: "java",     color: "#ED8B00" },
  { id: "csharp",      name: "C#",          category: "language", shieldsUrl: shield("C%23",        "C%23",        "239120", "csharp"),                  skillIconId: "cs",       color: "#239120" },
  { id: "cpp",         name: "C++",         category: "language", shieldsUrl: shield("C%2B%2B",     "C%2B%2B",     "00599C", "cplusplus"),               skillIconId: "cpp",      color: "#00599C" },
  { id: "kotlin",      name: "Kotlin",      category: "language", shieldsUrl: shield("Kotlin",      "Kotlin",      "7F52FF", "kotlin"),                  skillIconId: "kotlin",   color: "#7F52FF" },
  { id: "swift",       name: "Swift",       category: "language", shieldsUrl: shield("Swift",       "Swift",       "FA7343", "swift"),                   skillIconId: "swift",    color: "#FA7343" },
  { id: "php",         name: "PHP",         category: "language", shieldsUrl: shield("PHP",         "PHP",         "777BB4", "php"),                     skillIconId: "php",      color: "#777BB4" },
  { id: "ruby",        name: "Ruby",        category: "language", shieldsUrl: shield("Ruby",        "Ruby",        "CC342D", "ruby"),                    skillIconId: "ruby",     color: "#CC342D" },
];

// ---------------------------------------------------------------------------
// Frameworks & Libraries
// ---------------------------------------------------------------------------
export const FRAMEWORK_BADGES: BadgeDefinition[] = [
  { id: "react",       name: "React",       category: "framework", shieldsUrl: shield("React",       "React",       "61DAFB", "react",       "black"), skillIconId: "react",      color: "#61DAFB" },
  { id: "nextjs",      name: "Next.js",     category: "framework", shieldsUrl: shield("Next.js",     "Next.js",     "000000", "next.js"),               skillIconId: "nextjs",     color: "#000000" },
  { id: "vue",         name: "Vue.js",      category: "framework", shieldsUrl: shield("Vue.js",      "Vue.js",      "4FC08D", "vue.js"),                 skillIconId: "vue",        color: "#4FC08D" },
  { id: "svelte",      name: "Svelte",      category: "framework", shieldsUrl: shield("Svelte",      "Svelte",      "FF3E00", "svelte"),                 skillIconId: "svelte",     color: "#FF3E00" },
  { id: "angular",     name: "Angular",     category: "framework", shieldsUrl: shield("Angular",     "Angular",     "DD0031", "angular"),                skillIconId: "angular",    color: "#DD0031" },
  { id: "tailwind",    name: "Tailwind CSS",category: "framework", shieldsUrl: shield("Tailwind+CSS","Tailwind+CSS","06B6D4", "tailwindcss"),             skillIconId: "tailwind",   color: "#06B6D4" },
  { id: "nodejs",      name: "Node.js",     category: "framework", shieldsUrl: shield("Node.js",     "Node.js",     "339933", "node.js"),                skillIconId: "nodejs",     color: "#339933" },
  { id: "fastapi",     name: "FastAPI",     category: "framework", shieldsUrl: shield("FastAPI",     "FastAPI",     "009688", "fastapi"),                skillIconId: "fastapi",    color: "#009688" },
  { id: "django",      name: "Django",      category: "framework", shieldsUrl: shield("Django",      "Django",      "092E20", "django"),                 skillIconId: "django",     color: "#092E20" },
  { id: "laravel",     name: "Laravel",     category: "framework", shieldsUrl: shield("Laravel",     "Laravel",     "FF2D20", "laravel"),                skillIconId: "laravel",    color: "#FF2D20" },
  { id: "spring",      name: "Spring Boot", category: "framework", shieldsUrl: shield("Spring+Boot", "Spring+Boot", "6DB33F", "springboot"),             skillIconId: "spring",     color: "#6DB33F" },
];

// ---------------------------------------------------------------------------
// Databases
// ---------------------------------------------------------------------------
export const DATABASE_BADGES: BadgeDefinition[] = [
  { id: "postgres",  name: "PostgreSQL", category: "database", shieldsUrl: shield("PostgreSQL","PostgreSQL","4169E1","postgresql"), skillIconId: "postgres", color: "#4169E1" },
  { id: "mysql",     name: "MySQL",      category: "database", shieldsUrl: shield("MySQL",     "MySQL",     "4479A1","mysql"),      skillIconId: "mysql",    color: "#4479A1" },
  { id: "mongodb",   name: "MongoDB",    category: "database", shieldsUrl: shield("MongoDB",   "MongoDB",   "47A248","mongodb"),    skillIconId: "mongodb",  color: "#47A248" },
  { id: "redis",     name: "Redis",      category: "database", shieldsUrl: shield("Redis",     "Redis",     "DC382D","redis"),      skillIconId: "redis",    color: "#DC382D" },
  { id: "sqlite",    name: "SQLite",     category: "database", shieldsUrl: shield("SQLite",    "SQLite",    "003B57","sqlite"),     skillIconId: "sqlite",   color: "#003B57" },
  { id: "supabase",  name: "Supabase",   category: "database", shieldsUrl: shield("Supabase",  "Supabase",  "3ECF8E","supabase"),   skillIconId: "supabase", color: "#3ECF8E" },
];

// ---------------------------------------------------------------------------
// Cloud & DevOps
// ---------------------------------------------------------------------------
export const CLOUD_BADGES: BadgeDefinition[] = [
  { id: "aws",            name: "AWS",            category: "cloud", shieldsUrl: shield("AWS",            "AWS",            "FF9900","amazon-aws"),         skillIconId: "aws",            color: "#FF9900" },
  { id: "gcp",            name: "Google Cloud",   category: "cloud", shieldsUrl: shield("Google+Cloud",   "GCP",            "4285F4","google-cloud"),        skillIconId: "gcp",            color: "#4285F4" },
  { id: "azure",          name: "Azure",          category: "cloud", shieldsUrl: shield("Azure",          "Azure",          "0078D4","microsoftazure"),       skillIconId: "azure",          color: "#0078D4" },
  { id: "docker",         name: "Docker",         category: "tool",  shieldsUrl: shield("Docker",         "Docker",         "2496ED","docker"),               skillIconId: "docker",         color: "#2496ED" },
  { id: "kubernetes",     name: "Kubernetes",     category: "tool",  shieldsUrl: shield("Kubernetes",     "Kubernetes",     "326CE5","kubernetes"),           skillIconId: "kubernetes",     color: "#326CE5" },
  { id: "terraform",      name: "Terraform",      category: "tool",  shieldsUrl: shield("Terraform",      "Terraform",      "7B42BC","terraform"),            skillIconId: "terraform",      color: "#7B42BC" },
  { id: "github-actions", name: "GitHub Actions", category: "tool",  shieldsUrl: shield("GitHub+Actions", "CI%2FCD",        "2088FF","github-actions"),       skillIconId: "githubactions",  color: "#2088FF" },
  { id: "vercel",         name: "Vercel",         category: "platform", shieldsUrl: shield("Vercel",      "Vercel",         "000000","vercel"),               skillIconId: "vercel",         color: "#000000" },
];

// ---------------------------------------------------------------------------
// Social / Profile
// ---------------------------------------------------------------------------
export const SOCIAL_BADGES: BadgeDefinition[] = [
  { id: "github",    name: "GitHub",     category: "social",    shieldsUrl: shield("GitHub",    "GitHub",       "181717","github"),              color: "#181717" },
  { id: "linkedin",  name: "LinkedIn",   category: "social",    shieldsUrl: shield("LinkedIn",  "Connect",      "0A66C2","linkedin"),            color: "#0A66C2" },
  { id: "twitter",   name: "Twitter/X",  category: "social",    shieldsUrl: shield("Twitter",   "Follow",       "1DA1F2","twitter"),             color: "#1DA1F2" },
  { id: "email",     name: "Email",      category: "social",    shieldsUrl: shield("Email",     "your@email",   "EA4335","gmail"),               color: "#EA4335" },
  { id: "portfolio", name: "Portfolio",  category: "social",    shieldsUrl: shield("Portfolio", "yoursite.dev", "FF5722","google-chrome"),       color: "#FF5722" },
  { id: "dribbble",  name: "Dribbble",   category: "social",    shieldsUrl: shield("Dribbble",  "Dribbble",     "EA4C89","dribbble"),            color: "#EA4C89" },
  { id: "kaggle",    name: "Kaggle",     category: "platform",  shieldsUrl: shield("Kaggle",    "Profile",      "20BEFF","kaggle"),              color: "#20BEFF" },
  { id: "itchio",    name: "Itch.io",    category: "platform",  shieldsUrl: shield("Itch.io",   "Games",        "FA5C5C","itch.io"),             color: "#FA5C5C" },
  { id: "sponsor",   name: "Sponsor",    category: "social",    shieldsUrl: shield("Sponsor",   "Sponsor",      "EA4AAA","github-sponsors"),     color: "#EA4AAA" },
];

// ---------------------------------------------------------------------------
// GitHub Stats widgets — ready-to-use markdown snippets
// ---------------------------------------------------------------------------
export type StatWidget = {
  id: string;
  name: string;
  description: string;
  markdown: (username?: string) => string;
};

const U = (u = "yourusername") => u;

export const STAT_WIDGETS: StatWidget[] = [
  {
    id: "github-stats",
    name: "GitHub Stats",
    description: "Commits, PRs, issues and star count.",
    markdown: (u) => `<div align="center">\n<img src="https://github-readme-stats.vercel.app/api?username=${U(u)}&show_icons=true&theme=tokyonight&hide_border=true" />\n</div>`,
  },
  {
    id: "top-languages",
    name: "Top Languages",
    description: "Most used languages across your repos.",
    markdown: (u) => `<div align="center">\n<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${U(u)}&layout=compact&theme=tokyonight&hide_border=true" />\n</div>`,
  },
  {
    id: "streak",
    name: "Contribution Streak",
    description: "Current and longest contribution streak.",
    markdown: (u) => `<div align="center">\n<img src="https://github-readme-streak-stats.herokuapp.com/?user=${U(u)}&theme=tokyonight&hide_border=true" />\n</div>`,
  },
  {
    id: "trophies",
    name: "GitHub Trophies",
    description: "Achievement trophies from your GitHub activity.",
    markdown: (u) => `<div align="center">\n<img src="https://github-profile-trophy.vercel.app/?username=${U(u)}&theme=tokyonight&no-frame=true&row=1&column=6" />\n</div>`,
  },
  {
    id: "profile-views",
    name: "Profile Views Counter",
    description: "Badge showing how many times your profile has been visited.",
    markdown: (u) => `[![Profile Views](https://komarev.com/ghpvc/?username=${U(u)}&color=6366f1&style=flat&label=Profile+Views)](https://github.com/${U(u)})`,
  },
  {
    id: "typing-svg",
    name: "Typing Animation",
    description: "Animated typing SVG — edit the lines parameter.",
    markdown: () => `<div align="center">\n<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6366F1&center=true&vCenter=true&width=500&lines=Your+first+line;Your+second+line" alt="Typing SVG" />\n</div>`,
  },
  {
    id: "capsule-header",
    name: "Wave Header",
    description: "Animated wave banner at the top of your README.",
    markdown: () => `<div align="center">\n<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=140&section=header&text=Hi+there!&fontSize=40&fontColor=fff&animation=fadeIn" width="100%" />\n</div>`,
  },
  {
    id: "capsule-footer",
    name: "Wave Footer",
    description: "Matching wave banner for the bottom of your README.",
    markdown: () => `<div align="center">\n<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=80&section=footer" width="100%" />\n</div>`,
  },
  {
    id: "skill-icons",
    name: "Skill Icons",
    description: "Tech stack icons row via skillicons.dev.",
    markdown: () => `<div align="center">\n<img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,postgres,docker&perline=6" />\n</div>`,
  },
];

// ---------------------------------------------------------------------------
// Skill icon sets for skillicons.dev
// ---------------------------------------------------------------------------
export const SKILL_ICON_SETS: Record<string, string[]> = {
  "Web Frontend":  ["html", "css", "js", "ts", "react", "nextjs", "vue", "svelte", "tailwind", "sass"],
  "Web Backend":   ["nodejs", "express", "fastapi", "django", "laravel", "spring", "dotnet", "go", "rust", "python"],
  "Mobile":        ["flutter", "dart", "kotlin", "swift", "react", "androidstudio", "xcode"],
  "Data & ML":     ["python", "pytorch", "tensorflow", "r", "julia", "spark", "kafka", "docker"],
  "Databases":     ["postgres", "mysql", "mongodb", "redis", "sqlite", "supabase", "prisma", "firebase"],
  "DevOps":        ["docker", "kubernetes", "terraform", "ansible", "grafana", "jenkins", "githubactions", "linux"],
  "Cloud":         ["aws", "gcp", "azure", "cloudflare", "vercel", "netlify"],
  "Design":        ["figma", "xd", "blender", "ps", "ai", "framermotion"],
  "Game Dev":      ["unity", "cs", "godot", "blender", "ps", "steam"],
  "Tools":         ["git", "github", "vscode", "vim", "linux", "bash", "postman", "bun"],
};

export const ALL_BADGES: BadgeDefinition[] = [
  ...LANGUAGE_BADGES,
  ...FRAMEWORK_BADGES,
  ...DATABASE_BADGES,
  ...CLOUD_BADGES,
  ...SOCIAL_BADGES,
];
