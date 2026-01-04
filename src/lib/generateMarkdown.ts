import { TechItem, getShieldsBadge } from './techStack';

export interface ReadmeData {
  name: string;
  tagline: string;
  profileImage: string;
  bannerUrl: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  email: string;
  aboutMe: string;
  features: string[];
  installation: string;
  usage: string;
  roadmap: string[];
  contributing: string;
  license: string;
  selectedTech: TechItem[];
  enabledSections: string[];
  // Animation & Display Options
  showTypingAnimation: boolean;
  showGithubStats: boolean;
  showVisitorBadge: boolean;
  showStreakStats: boolean;
  showTrophies: boolean;
  showContributionGraph: boolean;
  showActivityGraph: boolean;
  showTopLanguages: boolean;
  showProfileCard: boolean;
  showCommitStats: boolean;
  // Theme & Style Options
  statsTheme: string;
  animationSpeed: string;
}

export const generateMarkdown = (data: ReadmeData): string => {
  const lines: string[] = [];
  const sections = data.enabledSections;
  const theme = data.statsTheme || 'tokyonight';

  // Header with typing animation or regular title
  if (data.showTypingAnimation && data.name) {
    const typeSpeed = data.animationSpeed === 'fast' ? '500' : data.animationSpeed === 'slow' ? '2000' : '1000';
    lines.push(`<h1 align="center">`);
    lines.push(`  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=${typeSpeed}&color=00D9FF&center=true&vCenter=true&random=false&width=600&lines=${encodeURIComponent(data.name)}${data.tagline ? `;${encodeURIComponent(data.tagline)}` : ''}" alt="Typing SVG" />`);
    lines.push(`</h1>`);
  } else if (data.name) {
    lines.push(`# ${data.name}`);
    if (data.tagline) {
      lines.push('');
      lines.push(`> ${data.tagline}`);
    }
  }
  lines.push('');

  // Badges row
  const badges: string[] = [];
  if (data.showVisitorBadge && data.github) {
    badges.push(`![Visitor Count](https://komarev.com/ghpvc/?username=${data.github}&color=00d9ff&style=for-the-badge&label=Profile+Views)`);
  }
  if (data.github) {
    badges.push(`[![GitHub followers](https://img.shields.io/github/followers/${data.github}?style=for-the-badge&logo=github&color=181717)](https://github.com/${data.github})`);
    badges.push(`[![GitHub stars](https://img.shields.io/github/stars/${data.github}?style=for-the-badge&logo=github&color=181717)](https://github.com/${data.github})`);
  }
  if (badges.length > 0) {
    lines.push(`<p align="center">`);
    lines.push(`  ${badges.join(' ')}`);
    lines.push(`</p>`);
    lines.push('');
  }

  // Banner
  if (data.bannerUrl) {
    lines.push(`<p align="center">`);
    lines.push(`  <img src="${data.bannerUrl}" alt="Banner" width="100%" />`);
    lines.push(`</p>`);
    lines.push('');
  }

  // Profile Image
  if (data.profileImage) {
    lines.push(`<p align="center">`);
    lines.push(`  <img src="${data.profileImage}" alt="Profile" width="200" style="border-radius: 50%;" />`);
    lines.push(`</p>`);
    lines.push('');
  }

  // Dynamic Profile Card
  if (data.showProfileCard && data.github) {
    lines.push(`<p align="center">`);
    lines.push(`  <a href="https://github.com/${data.github}">`);
    lines.push(`    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${data.github}&theme=${theme}" alt="Profile Details" />`);
    lines.push(`  </a>`);
    lines.push(`</p>`);
    lines.push('');
  }

  // Social Links
  const socialLinks: string[] = [];
  if (data.github) socialLinks.push(`[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.github})`);
  if (data.linkedin) socialLinks.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${data.linkedin})`);
  if (data.twitter) socialLinks.push(`[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${data.twitter})`);
  if (data.website) socialLinks.push(`[![Website](https://img.shields.io/badge/Website-00D9FF?style=for-the-badge&logo=googlechrome&logoColor=white)](${data.website})`);
  if (data.email) socialLinks.push(`[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})`);

  if (socialLinks.length > 0) {
    lines.push(`<p align="center">`);
    lines.push(`  ${socialLinks.join(' ')}`);
    lines.push(`</p>`);
    lines.push('');
  }

  // Divider
  lines.push('---');
  lines.push('');

  // About Me
  if (sections.includes('about') && data.aboutMe) {
    lines.push('## 👋 About Me');
    lines.push('');
    lines.push(data.aboutMe);
    lines.push('');
  }

  // Tech Stack with animated skill icons
  if (sections.includes('tech') && data.selectedTech.length > 0) {
    lines.push('## 🛠️ Tech Stack');
    lines.push('');
    
    // Group by category for better organization
    lines.push('<p align="center">');
    data.selectedTech.forEach(tech => {
      lines.push(`  <a href="#"><img src="https://skillicons.dev/icons?i=${tech.icon.toLowerCase()}" alt="${tech.name}" title="${tech.name}" /></a>`);
    });
    lines.push('</p>');
    lines.push('');
    
    // Alternative shields.io badges
    lines.push('<p align="center">');
    data.selectedTech.forEach(tech => {
      lines.push(`  <img src="${getShieldsBadge(tech.name, tech.icon)}" alt="${tech.name}" />`);
    });
    lines.push('</p>');
    lines.push('');
  }

  // Features
  if (sections.includes('features') && data.features.length > 0) {
    lines.push('## ✨ Features');
    lines.push('');
    data.features.forEach(feature => {
      if (feature.trim()) {
        lines.push(`- ${feature}`);
      }
    });
    lines.push('');
  }

  // Installation
  if (sections.includes('installation') && data.installation) {
    lines.push('## 📦 Installation');
    lines.push('');
    lines.push('```bash');
    lines.push(data.installation);
    lines.push('```');
    lines.push('');
  }

  // Usage
  if (sections.includes('usage') && data.usage) {
    lines.push('## 🚀 Usage');
    lines.push('');
    lines.push('```bash');
    lines.push(data.usage);
    lines.push('```');
    lines.push('');
  }

  // GitHub Stats Section (combined)
  const hasGitHubStats = data.github && (
    data.showGithubStats || data.showStreakStats || data.showTopLanguages || 
    data.showTrophies || data.showContributionGraph || data.showActivityGraph ||
    data.showCommitStats
  );

  if (hasGitHubStats) {
    lines.push('## 📊 GitHub Stats');
    lines.push('');

    // Main Stats Card
    if (data.showGithubStats) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0D1117&include_all_commits=true&count_private=true" alt="GitHub Stats" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Commit Stats
    if (data.showCommitStats) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${data.github}&theme=${theme}&utcOffset=0" alt="Commit Activity" />`);
      lines.push(`  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${data.github}&theme=${theme}" alt="Repos per Language" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Streak Stats
    if (data.showStreakStats) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&theme=${theme}&hide_border=true&background=0D1117&ring=00D9FF&fire=00D9FF&currStreakLabel=00D9FF" alt="GitHub Streak" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Top Languages
    if (data.showTopLanguages) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&layout=compact&theme=${theme}&hide_border=true&bg_color=0D1117&langs_count=8" alt="Top Languages" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Trophies
    if (data.showTrophies) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-profile-trophy.vercel.app/?username=${data.github}&theme=${theme}&no-frame=true&no-bg=true&margin-w=4&row=1" alt="Trophies" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Contribution Graph
    if (data.showContributionGraph) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${data.github}&theme=${theme === 'tokyonight' ? 'tokyo-night' : theme}&hide_border=true&bg_color=0D1117&color=00D9FF&line=00D9FF&point=FFFFFF" alt="Contribution Graph" />`);
      lines.push('</p>');
      lines.push('');
    }

    // Activity Graph (Snake animation)
    if (data.showActivityGraph) {
      lines.push('<p align="center">');
      lines.push(`  <img src="https://raw.githubusercontent.com/${data.github}/${data.github}/output/github-contribution-grid-snake-dark.svg" alt="Snake Animation" />`);
      lines.push('</p>');
      lines.push('');
      lines.push('<!-- Note: Snake animation requires setting up GitHub Actions. See: https://github.com/Platane/snk -->');
      lines.push('');
    }
  }

  // Roadmap
  if (sections.includes('roadmap') && data.roadmap.length > 0) {
    lines.push('## 🗺️ Roadmap');
    lines.push('');
    data.roadmap.forEach(item => {
      if (item.trim()) {
        lines.push(`- [ ] ${item}`);
      }
    });
    lines.push('');
  }

  // Contributing
  if (sections.includes('contributing') && data.contributing) {
    lines.push('## 🤝 Contributing');
    lines.push('');
    lines.push(data.contributing);
    lines.push('');
  }

  // License
  if (sections.includes('license') && data.license) {
    lines.push('## 📄 License');
    lines.push('');
    lines.push(`This project is licensed under the ${data.license} License.`);
    lines.push('');
  }

  // Contact
  if (sections.includes('contact')) {
    lines.push('## 📫 Contact');
    lines.push('');
    if (data.email) lines.push(`- 📧 Email: ${data.email}`);
    if (data.website) lines.push(`- 🌐 Website: ${data.website}`);
    if (data.github) lines.push(`- 💻 GitHub: [@${data.github}](https://github.com/${data.github})`);
    if (data.linkedin) lines.push(`- 💼 LinkedIn: [${data.linkedin}](https://linkedin.com/in/${data.linkedin})`);
    if (data.twitter) lines.push(`- 🐦 Twitter: [@${data.twitter}](https://twitter.com/${data.twitter})`);
    lines.push('');
  }

  // Footer
  lines.push('---');
  lines.push('');
  lines.push('<p align="center">');
  lines.push('  <i>Made with ❤️ using README Generator</i>');
  lines.push('</p>');

  return lines.join('\n');
};
