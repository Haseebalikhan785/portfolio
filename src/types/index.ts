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
  certificateImage?: string;
  certificateId?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  duration?: string;
  certificateImage?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badgeText: string;
  url?: string;
  certificateImage?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; iconName?: string }[];
}

export interface VerifiedCredential {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Hackathon' | 'Award' | 'Internship' | 'Certification';
  issuer: string;
  date: string;
  venue?: string;
  credentialId?: string;
  imageSrc: string;
  description: string;
  badgeText: string;
  skills: string[];
  verificationUrl?: string;
  verificationType: 'Physical Certificate' | 'Digital Verified' | 'Govt Registered';
}
