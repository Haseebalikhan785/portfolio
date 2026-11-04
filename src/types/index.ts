export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'Android' | 'Frontend' | 'Cloud & AI';
  techStack: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl: string;
  apkUrl?: string;
  badge?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  techStack: string[];
  responsibilities: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  duration?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badgeText: string;
  url?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; iconName?: string }[];
}
