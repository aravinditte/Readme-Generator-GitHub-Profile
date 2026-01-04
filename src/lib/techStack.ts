export interface TechItem {
  name: string;
  icon: string;
  skillIcon: string; // for skillicons.dev
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'tool';
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'JavaScript', icon: 'javascript', skillIcon: 'js', category: 'language' },
  { name: 'TypeScript', icon: 'typescript', skillIcon: 'ts', category: 'language' },
  { name: 'Python', icon: 'python', skillIcon: 'py', category: 'language' },
  { name: 'Java', icon: 'java', skillIcon: 'java', category: 'language' },
  { name: 'C++', icon: 'cplusplus', skillIcon: 'cpp', category: 'language' },
  { name: 'C#', icon: 'csharp', skillIcon: 'cs', category: 'language' },
  { name: 'Go', icon: 'go', skillIcon: 'go', category: 'language' },
  { name: 'Rust', icon: 'rust', skillIcon: 'rust', category: 'language' },
  { name: 'PHP', icon: 'php', skillIcon: 'php', category: 'language' },
  { name: 'Ruby', icon: 'ruby', skillIcon: 'ruby', category: 'language' },
  { name: 'Swift', icon: 'swift', skillIcon: 'swift', category: 'language' },
  { name: 'Kotlin', icon: 'kotlin', skillIcon: 'kotlin', category: 'language' },

  // Frontend
  { name: 'React', icon: 'react', skillIcon: 'react', category: 'frontend' },
  { name: 'Vue.js', icon: 'vuejs', skillIcon: 'vue', category: 'frontend' },
  { name: 'Angular', icon: 'angularjs', skillIcon: 'angular', category: 'frontend' },
  { name: 'Svelte', icon: 'svelte', skillIcon: 'svelte', category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', skillIcon: 'nextjs', category: 'frontend' },
  { name: 'Nuxt.js', icon: 'nuxtjs', skillIcon: 'nuxtjs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', skillIcon: 'tailwind', category: 'frontend' },
  { name: 'Sass', icon: 'sass', skillIcon: 'sass', category: 'frontend' },
  { name: 'HTML5', icon: 'html5', skillIcon: 'html', category: 'frontend' },
  { name: 'CSS3', icon: 'css3', skillIcon: 'css', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'nodejs', skillIcon: 'nodejs', category: 'backend' },
  { name: 'Express', icon: 'express', skillIcon: 'express', category: 'backend' },
  { name: 'Django', icon: 'django', skillIcon: 'django', category: 'backend' },
  { name: 'Flask', icon: 'flask', skillIcon: 'flask', category: 'backend' },
  { name: 'Spring', icon: 'spring', skillIcon: 'spring', category: 'backend' },
  { name: 'FastAPI', icon: 'fastapi', skillIcon: 'fastapi', category: 'backend' },
  { name: 'NestJS', icon: 'nestjs', skillIcon: 'nestjs', category: 'backend' },
  { name: 'GraphQL', icon: 'graphql', skillIcon: 'graphql', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: 'postgresql', skillIcon: 'postgres', category: 'database' },
  { name: 'MySQL', icon: 'mysql', skillIcon: 'mysql', category: 'database' },
  { name: 'MongoDB', icon: 'mongodb', skillIcon: 'mongodb', category: 'database' },
  { name: 'Redis', icon: 'redis', skillIcon: 'redis', category: 'database' },
  { name: 'SQLite', icon: 'sqlite', skillIcon: 'sqlite', category: 'database' },
  { name: 'Firebase', icon: 'firebase', skillIcon: 'firebase', category: 'database' },
  { name: 'Supabase', icon: 'supabase', skillIcon: 'supabase', category: 'database' },

  // DevOps
  { name: 'Docker', icon: 'docker', skillIcon: 'docker', category: 'devops' },
  { name: 'Kubernetes', icon: 'kubernetes', skillIcon: 'kubernetes', category: 'devops' },
  { name: 'AWS', icon: 'amazonwebservices', skillIcon: 'aws', category: 'devops' },
  { name: 'GCP', icon: 'googlecloud', skillIcon: 'gcp', category: 'devops' },
  { name: 'Azure', icon: 'azure', skillIcon: 'azure', category: 'devops' },
  { name: 'Vercel', icon: 'vercel', skillIcon: 'vercel', category: 'devops' },
  { name: 'Netlify', icon: 'netlify', skillIcon: 'netlify', category: 'devops' },
  { name: 'GitHub Actions', icon: 'githubactions', skillIcon: 'githubactions', category: 'devops' },

  // Tools
  { name: 'Git', icon: 'git', skillIcon: 'git', category: 'tool' },
  { name: 'GitHub', icon: 'github', skillIcon: 'github', category: 'tool' },
  { name: 'VS Code', icon: 'vscode', skillIcon: 'vscode', category: 'tool' },
  { name: 'Figma', icon: 'figma', skillIcon: 'figma', category: 'tool' },
  { name: 'Postman', icon: 'postman', skillIcon: 'postman', category: 'tool' },
  { name: 'npm', icon: 'npm', skillIcon: 'npm', category: 'tool' },
  { name: 'Yarn', icon: 'yarn', skillIcon: 'yarn', category: 'tool' },
  { name: 'Webpack', icon: 'webpack', skillIcon: 'webpack', category: 'tool' },
  { name: 'Vite', icon: 'vitejs', skillIcon: 'vite', category: 'tool' },
  { name: 'Jest', icon: 'jest', skillIcon: 'jest', category: 'tool' },
];

export const getIconUrl = (icon: string): string => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
};

export const getSkillIconUrl = (skillIcon: string): string => {
  return `https://skillicons.dev/icons?i=${skillIcon}&theme=dark`;
};

export const getShieldsBadge = (name: string, icon: string): string => {
  const formattedName = name.replace(/\s+/g, '_').replace(/\./g, '');
  return `https://img.shields.io/badge/${formattedName}-000000?style=for-the-badge&logo=${icon}&logoColor=white`;
};
