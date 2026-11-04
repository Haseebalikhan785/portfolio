import { Project, ExperienceItem, Certification, Achievement, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Haseeb Ali',
  title: 'Full-Stack Software Engineer & Android Developer',
  headline: 'Computer Science engineer with a 9.17 CGPA specializing in cloud web applications, Android systems, and scalable backend services.',
  bio: 'Proficient in Java, Python, React, FastAPI, Firebase, and modern cloud deployment architectures. Proven track record building end-to-end applications from national hackathon stages to production cloud environments.',
  email: 'haseebalikhan785@gmail.com',
  phone: '+91 6306917705',
  location: 'Punjab, India',
  workMode: 'Open to Remote / Hybrid / On-site',
  noticePeriod: 'Immediate / Flexible',
  workAuthorization: 'Authorized to work in India (Open to Global Relocation/Remote)',
  github: 'https://github.com/Haseebalikhan785',
  githubRepos: 'https://github.com/Haseebalikhan785?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/haseebalikhan785/',
  linkedinActivity: 'https://www.linkedin.com/in/haseebalikhan785/recent-activity/all/',
  linkedinSkills: 'https://www.linkedin.com/in/haseebalikhan785/details/skills/',
  linkedinExperience: 'https://www.linkedin.com/in/haseebalikhan785/details/experience/?isSelfProfile=true&vieweeProfileId=ACoAAFQXnlgB6y508bob_l1VPpT_CdWeBp3uK0s',
  linkedinEducation: 'https://www.linkedin.com/in/haseebalikhan785/details/education/',
  resumeUrl: '/Haseeb_Ali_Resume.pdf',
};

export const QUICK_FACTS = [
  { label: 'Academic Standing', value: '9.17 / 10 CGPA', detail: 'Lovely Professional University (CSE)', icon: 'Award' },
  { label: 'Experience Level', value: 'Software Engineer', detail: 'Internship + Production Builds', icon: 'Briefcase' },
  { label: 'Core Tech Stack', value: 'Python · React · Java', detail: 'FastAPI, Firebase, MySQL, AWS', icon: 'Code' },
  { label: 'Availability', value: 'Immediate Joiner', detail: 'Full-time / Remote / Hybrid', icon: 'Clock' },
];

export const PROJECTS: Project[] = [
  {
    id: 'citizenassist-ai',
    title: 'CitizenAssist AI',
    subtitle: 'Intelligent Civic Welfare Services & Scheme Discovery Navigator',
    description: 'An AI-integrated government welfare portal engineered during GRAVITON Hackathon 2026. Features multilingual discovery, automated eligibility evaluation rules, side-by-side benefit comparison, and dynamic checklist generation.',
    category: 'Cloud & AI',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS EC2', 'SQLite'],
    metrics: [
      'Problem Statement #11 Finalist at GRAVITON Hackathon 2026',
      'Automated rule evaluation across 10+ public welfare schemes',
      'Multilingual query support in English, Hindi, and Punjabi',
      'Deployed on AWS EC2 with reverse proxy and SSL'
    ],
    liveUrl: 'https://ai-2.duckdns.org/',
    githubUrl: 'https://github.com/Haseebalikhan785/citizenassist-ai',
    badge: 'National Hackathon Project',
    featured: true,
  },
  {
    id: 'buildmart',
    title: 'BuildMart',
    subtitle: 'Android Marketplace & Supply Chain App for Construction Materials',
    description: 'Full-featured Android e-commerce application connecting construction material buyers with local vendors. Features real-time catalog search, Firebase user authentication, cart management, and order tracking.',
    category: 'Android',
    techStack: ['Java', 'Android Studio', 'Firebase Auth', 'Cloud Firestore', 'Realtime DB', 'Material UI'],
    metrics: [
      'Awarded Certificate of Merit at INNO-TECH 2026 (Pushpa Gujral Science City)',
      'Real-time catalog synchronization with Cloud Firestore',
      'End-to-end shopping cart and status tracking workflow',
      'Production APK v1.0.0 released on GitHub'
    ],
    githubUrl: 'https://github.com/Haseebalikhan785/BuildMart',
    apkUrl: 'https://github.com/Haseebalikhan785/BuildMart/releases/tag/v1.0.0',
    badge: 'Award Winner · INNO-TECH 2026',
    featured: true,
  },
  {
    id: 'university-management',
    title: 'University Management System',
    subtitle: 'Enterprise Cloud-Native Campus Administration Web Portal',
    description: 'Cloud-native university administration platform with role-based access control for Super Admin, Faculty, and Students. Handles student admissions, semester course registrations, attendance tracking, and exam records.',
    category: 'Full-Stack',
    techStack: ['Python', 'Flask', 'MySQL (Aiven Cloud)', 'Gunicorn', 'Nginx', 'AWS Lightsail', 'HTML5/CSS3'],
    metrics: [
      'Role-based dashboards for 3 user tiers (Admin, Faculty, Students)',
      'Automated semester attendance & course enrollment validation',
      'Backed by high-availability Aiven Cloud MySQL database',
      'Production deployment on AWS Lightsail Mumbai with Gunicorn/Nginx'
    ],
    liveUrl: 'http://university-portal.privatedns.org',
    githubUrl: 'https://github.com/Haseebalikhan785/Student-Management-System-Python',
    badge: 'Production Cloud Portal',
    featured: true,
  },
  {
    id: 'youthhub',
    title: 'YouthHub',
    subtitle: 'High-Performance E-Commerce Frontend Architecture',
    description: 'Responsive multi-page e-commerce storefront featuring home, product listing, product details, shopping cart, user login, and checkout flows with local storage state persistence.',
    category: 'Frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'LocalStorage API'],
    metrics: [
      '6 distinct responsive page views with zero external UI frameworks',
      'Dynamic client-side cart calculations and item quantity controls',
      'Tested across desktop, tablet, and mobile viewports'
    ],
    githubUrl: 'https://github.com/Haseebalikhan785/Youth-Hub',
    badge: 'Frontend Architecture',
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'prabhutwa-internship',
    role: 'Python Intern',
    company: 'Prabhutwa Computer Education Pvt. Ltd.',
    period: 'Jun 2026 – Jul 2026',
    location: 'India',
    techStack: ['Python', 'JupyterLab', 'Pandas', 'Data Cleaning', 'Regex', 'Automation'],
    responsibilities: [
      'Engineered automated data-cleaning and transformation scripts in Python, reducing manual dataset preparation time by ~40%.',
      'Processed, sanitized, and validated 1,000+ records across 30 days maintaining a 99.5% accuracy threshold.',
      'Constructed standardized JupyterLab analysis workflows for team-wide exploratory data pipelines.'
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'C', level: 'Proficient' },
      { name: 'C++', level: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'PHP', level: 'Proficient' },
    ],
  },
  {
    name: 'Web & Frameworks',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Flask', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'HTML5 & CSS3', level: 'Expert' },
      { name: 'Jinja2', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'Android Development', level: 'Advanced' },
      { name: 'Android Studio', level: 'Advanced' },
      { name: 'Java Mobile SDK', level: 'Advanced' },
      { name: 'Firebase Mobile SDK', level: 'Advanced' },
      { name: 'Material UI Mobile', level: 'Advanced' },
    ],
  },
  {
    name: 'Databases & Cloud',
    skills: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Firebase Firestore', level: 'Advanced' },
      { name: 'Firebase Realtime DB', level: 'Advanced' },
      { name: 'SQLite', level: 'Advanced' },
      { name: 'AWS (EC2, Lightsail, S3, SSM)', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Nginx & Caddy', level: 'Advanced' },
    ],
  },
  {
    name: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'JupyterLab', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Linux / macOS CLI', level: 'Expert' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'alpha-dsa',
    title: 'Alpha: Data Structures and Algorithms with Java',
    issuer: 'Apna College',
    date: 'Mar – Aug 2026',
    credentialUrl: 'https://lnkd.in/p/gVvr2G_C',
  },
  {
    id: 'computer-architecture',
    title: 'Computer Architecture and Organization',
    issuer: 'Udemy',
    date: 'Feb 2026',
    duration: '24 Hours',
    credentialUrl: 'https://www.udemy.com/certificate/UC-271bcb87-463c-42b1-91a1-53135c4f30f2/',
  },
  {
    id: 'python-bootcamp',
    title: 'The Complete Python Bootcamp: From Zero to Hero',
    issuer: 'Udemy',
    date: 'Aug 2026',
    duration: '22.5 Hours',
    credentialUrl: 'https://www.udemy.com/certificate/UC-ea9268be-2c68-4598-ad5b-0c4f45126498/',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'graviton-2026',
    title: 'GRAVITON Hackathon 2026 Finalist',
    organization: 'CGC University, Mohali',
    date: 'Oct – Nov 2026',
    description: 'Designed and engineered CitizenAssist AI, an AI-powered public services navigator solving Problem Statement #11 over a 36-hour competitive hackathon sprint.',
    badgeText: 'National Level Hackathon',
    url: 'https://www.linkedin.com/in/haseebalikhan785/recent-activity/all/',
  },
  {
    id: 'inno-tech-2026',
    title: 'Certificate of Merit — INNO-TECH 2026',
    organization: 'Pushpa Gujral Science City',
    date: 'Mar 2026',
    description: 'Awarded Certificate of Merit for presenting BuildMart, an innovative mobile marketplace for construction materials.',
    badgeText: 'Innovation Excellence',
    url: 'https://github.com/Haseebalikhan785/BuildMart',
  },
  {
    id: 'academic-distinction',
    title: '9.17 / 10 CGPA Academic Distinction',
    organization: 'Lovely Professional University',
    date: '2024 – 2027',
    description: 'Maintained top-percentile academic standing across Diploma in Computer Science and Engineering course curriculum.',
    badgeText: 'Top Percentile',
    url: 'https://www.linkedin.com/in/haseebalikhan785/details/education/',
  },
];
